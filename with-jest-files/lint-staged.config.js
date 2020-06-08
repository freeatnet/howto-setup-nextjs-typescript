// For configuration options, see
// https://github.com/okonet/lint-staged#configuration
module.exports = {
  '*.{js,ts,tsx}': 'yarn lint --quiet --fix',
  '*.ts?(x)': () => 'yarn check-types',
};
