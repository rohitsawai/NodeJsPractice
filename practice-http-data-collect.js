// Read data from GitHub

const https = require("https");
const bl = require("bl");

const url = process.argv[2];

https.get(url, (res) => {
  res.pipe(
    bl((err, data) => {
      if (err) return console.error(err);

      data = data.toString();
      console.log(data);
    })
  );
});
