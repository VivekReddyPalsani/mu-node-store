import express from 'express'
const app = express();

app.listen(8080, () => {
    console.log("Server started");
});

app.get("/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            desc: "This is the description of the product",
            price: 45,
            imgUrl: "https://picsum.photos/id/1/300/300",
        },
        {
            id: 2,
            name: "Product 2",
            desc: "This is the description of the product",
            price: 50,
            imgUrl: "https://picsum.photos/id/2/300/300",
        },
        {
            id: 3,
            name: "Product 3",
            desc: "This is the description of the product",
            price: 32,
            imgUrl: "https://picsum.photos/id/3/300/300",
        },
  ];
    res.json(products);
});