import express from 'express'
import cors from "cors"
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(cors());

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    pass: { type: String },
})

const userModel = mongoose.model("user", userSchema);

mongoose.connect("mongodb://localhost:27017/mudb").then(() => {
    app.listen(8080, () => {
        console.log("Server started");
    });
});

app.post("/register", async(req, res) => {
    const body = req.body;
    const user = await userModel.create(body);
    res.json(user);
});

app.post("/login", async (req, res) => {
    const body = req.body;
    const found = await userModel.findOne({ email: body.email, pass: body.pass });
    res.json(found);
})






// let products = [];

// app.post("/products", async(req, res) => {
//     console.log(req.body);
//     const body = await req.body;
//     products.push(body);
//     res.json(body);
// })

// app.get("/products", async(req, res) => {
//     res.json(products);
// });

// let users = [];

// app.post("/users", async(req, res) => {
//     console.log(req.body);
//     const body = await req.body;
//     products.push(body);
//     res.json(body);
// })

// app.get("/users", async(req, res) => {
//     res.json(products);
// });