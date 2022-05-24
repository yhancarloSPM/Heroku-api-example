const bcrypt = require("bcryptjs");

module.exports = {
  generateHash: async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
  },
  compareHash: async (req_password, db_password) => {
    return await bcrypt.compare(req_password, db_password);
  },
};
