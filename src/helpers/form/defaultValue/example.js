export default ({ email, password, confirm, sex, test, image }) => ({
  email: email || '',
  password: password || '',
  confirm: confirm || true,
  sex: sex || 'male',
  test: test || '',
  image: image || '',
});
