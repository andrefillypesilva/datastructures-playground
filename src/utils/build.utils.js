import HtmlWebpackPlugin from 'html-webpack-plugin';
import fs from 'fs';

export class Build {
    constructor () { }

    generateHtmlWebpackTemplateConfig() {
        const linearComponents = fs.readdirSync('./src/modules/linear-data-structures/components/');
        const nonLinearComponents = fs.readdirSync('./src/modules/non-linear-data-structures/components/');
        const components = [];

        const generateLinearComponents = linearComponents.map(component => {
            const template = `./src/modules/linear-data-structures/components/${component}/${component}.component.html`;
            if (fs.existsSync(template)) {
                components.push(component);
                return new HtmlWebpackPlugin({
                    template,
                    filename: `components/${component}.html`,
                    inject: false,
                });
            }
        }).filter(component => component);

        const generateNonLinearComponents = nonLinearComponents.map(component => {
            const template = `./src/modules/non-linear-data-structures/components/${component}/${component}.component.html`;
            if (fs.existsSync(template)) {
                components.push(component);
                return new HtmlWebpackPlugin({
                    template,
                    filename: `components/${component}.html`,
                    inject: false,
                });
            }
        }).filter(component => component);

        return {
            components,
            'htmlWebpackTemplateConfig': generateLinearComponents.concat(generateNonLinearComponents)
        }
    }
}
