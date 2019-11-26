const express = require('express');
const server = express();
server.use(express.json());
var path = require("path")
const port = 4001;
server.use(express.urlencoded());

server.get("/api", (req, res) => {
    res.sendFile(path.join(__dirname + '/form.html'));
});

server.post("/api", (req, res) => {
    var count = 0
    var expression = req.body.strings
    for (var i = 0; i < expression.length; i++) {
        if (expression[i] == "(") {
            count++
        }
        if (expression[i] == ")") {
            count++
        }
        if (expression[i] == "{") {
            count++
        }
        if (expression[i] == "}") {
            count++
        }
        if (expression[i] == "[") {
            count++
        }
        if (expression[i] == "]") {
            count++
        } else
            count--
    }

    if (count == 0) {
        return res.send(true);
    } else {
        return res.send(false);
    }
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
})
