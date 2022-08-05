const { paramCase, pascalCase } = require('change-case');

const PREFIX_TYPES = {
    common: 'the-',
    unique: 'a-',
    page: 'p-'
};

const INPUTS = {
    COMPONENT_TYPE: {
        type: 'select',
        name: 'componentType',
        message: 'What type of component do you want to create?',
        choices: Object.keys(PREFIX_TYPES)
    },
    COMPONENT_NAME: {
        type: 'input',
        name: 'componentName',
        message: 'Type component name(without prefix). Example: remote-select or RemoteSelect',
        validate (value) {
            const forbiddenPrefixesRegExp = /^(the-|a-|p-)/;
            const fileName = paramCase(value);
            if (!value.length) {
                return 'Components should have a name';
            }
            if (value.length < 3) {
                return 'Component name should contain at least 3 symbols';
            }
            if (forbiddenPrefixesRegExp.test(fileName)) {
                return 'No prefixes allowed. Prefix will be added automatically based on component type';
            }
            return true;
        }
    }
};

module.exports = {
    prompt: async ({ prompter }) => {
        const { componentType } = await prompter.prompt([INPUTS.COMPONENT_TYPE]);

        const { componentName } = await prompter.prompt([INPUTS.COMPONENT_NAME]);

        const kebabName = paramCase(PREFIX_TYPES[componentType] + componentName);
        const pascalName = pascalCase(PREFIX_TYPES[componentType] + componentName);
        const path = componentType === 'page'
            ? `src/pages/${kebabName}/`
            : `src/components/${componentType}/${kebabName}/`;

        return {
            path,
            kebabName,
            pascalName
        };
    }
};
