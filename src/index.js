const express = require("express");
var cors = require("cors");
const connect = require("./configs/db");
const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());
const furnitureController = require("./controllers/furnitures.controller");
const lightingController = require("./controllers/lighting.controller");
const pillowController = require("./controllers/pillow.controller");

app.use(cors({ origin: "*" }));

app.use(express.json());


app.use("/furnitures", furnitureController);
app.use("/lighting", lightingController);
app.use("/pillow", pillowController);



const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log(`listening on port ${PORT}`);
});
