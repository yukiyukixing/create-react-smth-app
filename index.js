import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import prompts from 'prompts';
import colors from 'colors';

const BUILD_TOOLS = [
  {
    name: 'vite',
    display: colors.green('Vite'),
    templatePath: 'template/vite',
  },
  {
    name: 'webpack',
    display: colors.blue('Webpack'),
    templatePath: 'template/webpack',
  },
  {
    name: 'webpack-practical-demo',
    display: colors.yellow('webpack-practical-demo'),
    templatePath: 'template/webpack-practical-demo',
  },
];

(async () => {
  const response = await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: 'What is your project name?',
    },
    {
      type: 'select',
      name: 'buildTool',
      message: 'Select a build tool:',
      choices: BUILD_TOOLS.map((tool) => ({ title: tool.display, value: tool.name })),
    },
  ]);

  if (response.projectName && response.buildTool) {
    const selectedTool = BUILD_TOOLS.find((tool) => tool.name === response.buildTool);

    if (selectedTool) {
      const currentDir = path.dirname(fileURLToPath(import.meta.url));
      const source = path.join(currentDir, selectedTool.templatePath);
      const destination = path.join(process.cwd(), response.projectName);

      try {
        await fs.copy(source, destination);
        console.log(colors.rainbow(`Project ${response.projectName} has been created successfully!`));
      } catch (err) {
        console.error(colors.red(`An error occurred: ${err}`));
      }
    } else {
      console.error(colors.red('Invalid build tool selected.'));
    }
  } else {
    console.error(colors.red('No project name or build tool selected.'));
  }
})();
