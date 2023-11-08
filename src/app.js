const express = require('express');
const routerProducts = require('./routes/products.router');
const routerCarts = require('./routes/carts.router');

const PORT = 8080
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/products', routerProducts)
app.use('/api/carts', routerCarts)


const server = app.listen(PORT, () => console.log("Server online port " + PORT))




