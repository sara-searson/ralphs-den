const express = require("express");
const db = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const brandController = require("./controllers/brandController");
const productController = require("./controllers/productController");
const sausageController = require("./controllers/sausageController");
const reviewController = require("./controllers/reviewController")
const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get("/", (req, res) => res.send("This is our landing page!"));


const App = () => {
    return (
    <div>
        <h1>Product List</h1>
        <ProductFilter />
    </div>
    );
};

export default App;