(function doTest() {
  var service = require("../target/nodejs/listener.js").default;
  var i = 0;
  var data = JSON.parse(require("fs").readFileSync("./test/model.json").toString());
  setInterval(function () {
    var id = 'duration' + (++i);
    console.time(id);
    service.validate("quote.work.class", Object.assign({}, data), e => (console.timeEnd(id), console.log(e)));
  }, 1000);
})();