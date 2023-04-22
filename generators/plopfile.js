export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/views/components/{{pascalCase name}}/Component.jsx',
        templateFile: 'templates/Component.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/views/components/{{pascalCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs'
      }
    ]
  })
}
