const express = require('express');
const app = express();

app.use(middleWareFunction)

app.get("/books", (req, res) => {
    const data = {
        "books" : [
            "Harray Potter",
            "White Tiger",
            "Three Mistakes Of My Life",
            "Macbeth"
        ]
    }
    console.log(data);
})

function middleWareFunction(req, res, next) {
    console.log("Fetching all books");
    next()
}

app.listen(9002, () => {
    console.log('Listening on port 9002.')
})