const http = require("http");
const bl = require("bl");

module.exports = (url) => {
  http.get(url, (res) => {
    res.pipe(
      bl((err, data) => {
        if (err) return console.error(err);

        data = data.toString();
        return data;
      })
    );
  });
};
