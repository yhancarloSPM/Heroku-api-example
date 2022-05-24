const db = require("mongoose");

db.Promise = global.Promise;

async function Connect(url) {
  await db.connect(url, {
    useNewUrlParser: true,
  });
  console.info("[db] connect successfully");
}


module.exports = Connect;
