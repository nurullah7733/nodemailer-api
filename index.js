const app = require("./app");
const PORT = process.env.PORT || 8080;
app.listen(PORT, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log("App runnig at " + PORT);
  }
});