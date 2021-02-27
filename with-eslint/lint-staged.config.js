// For configuration options, see
// https://github.com/okonet/lint-staged#configuration
module.exports = {
  '*.{js,ts,tsx}': 'yarn lint:precommit',
  '*.ts?(x)': () => 'yarn check-types',
};
