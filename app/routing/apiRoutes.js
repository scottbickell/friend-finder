var friends = require("../data/friends.js");

module.exports = function (app) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        // A POST routes /api/friends. This will be used to handle incoming survey results. 
        // Get the survey results
        var userInput = req.body;
        // console.log(userInput);

        // This route will also be used to handle the compatibility logic.

        // TODO Figure out how to do this part. Stuck on this.

        friends.push(userInput);

    })
}