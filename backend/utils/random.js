function generateId() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
    const randomString = "";
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
}

function generatePassword() {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.!@#$%^&*()<>?/";
  const length = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
  const randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
}


module.exports = {
  generateId,
  generatePassword
};