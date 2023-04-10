const express = require("express");
const app = express();
const locationRoutes = require("./routes/locationRoutes");
const port = 5555;
app.use(express.static('public'));
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.use("/locations", locationRoutes);


app.listen(port,
    console.log(`Express is listening to ${port}`)
    )