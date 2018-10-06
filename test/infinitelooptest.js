(function doTest() {
  var service = require("../target/nodejs/listener.js").default;
  var i = 0;
  var data = JSON.parse(require("fs").readFileSync("./test/100cars.json").toString());
  setInterval(function () {
    var id = 'duration' + (++i);
    console.time(id);
    service.validate("quote.cmau.car", data).then(() => console.timeEnd(id));
  }, 100);
})();