const express = require('express')
const app = express();
const port = 3000;
const inventoryRouter = require('./src/routes/inventory.route');

app.get('/', (req, res) => {
    res.json({'message': 'Inventory App Rest API'});
});

app.use('/inventory', inventoryRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const db = require("./src/models");
db.mongoose
    .connect(db.url)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });


