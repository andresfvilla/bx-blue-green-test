var express = require("express");
var app = express();

/**
 * Endpoint to get health of application
 * REST API example:
 * <code>
 * GET http://localhost:3000/
 * </code>
 *
 * Response:
 * {
 *   "status": "ok"
 * }
 * 
 * @return status of the application
 */
app.get("/", function (request, response) {
  var status = {
    "status": "ok",
  }
  response.json(status)
});


var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view app, open this link in the browser: http://localhost:" + port);
});
