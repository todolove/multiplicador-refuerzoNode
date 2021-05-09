const toUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1)

module.exports = {
  description: 'Create vue view',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: '请输入路径（Please enter a path）',
      default: 'views'
    },
    {
      type: 'input',
  