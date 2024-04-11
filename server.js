

import * as d3 from "d3";
import express from "express";
const app = express();
import ejs from "ejs";

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

const logger = (req, res, next) => {
    console.log("url:", req.url);
    next();
};

app.use(express.static("public"));
app.use(express.static("/"));
app.set("views", "/public");
app.use(logger);
app.use(express.json());

app.get("/", (req, res) => {
    return res.render("index.html");
});

app.get("/all_hour.csv", (req, res) => {
    res.sendFile("all_hour.csv");
})

app.get("/data", express.json(), async (req, res) => {
    const data = await d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson");
    console.log(data);
    res.json(data);
});

app.listen(3000);