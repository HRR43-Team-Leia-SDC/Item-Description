
const app = require('./app.js');
require('dotenv').config();

const port = process.env.PORT || 3009;
// const port = process.env.PORT_DETAILS;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
