const express = require('express');
const productsRouter = require("./routes/products");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const databaseName = "products";
const username = "saul";
const password = "SaulGoodman1919"

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.naai0ct.mongodb.net/${databaseName}?retryWrites=true&w=majority`,
    e => {
        if (e) {
            console.log(e);
        } else {
            console.log("Connected to database");
        }
    }
);


app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/products", productsRouter)

app.listen(5000, () => {
    console.log("Server is running on port 5000 " + "http://localhost:5000");
});

