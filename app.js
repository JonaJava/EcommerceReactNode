const express  = require("express");
const app = express();
const port = 8000;

//const authRoutes  = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const cors = require ("cors");
const connectDB = require("./db/connection");
const database = "mongodb+srv://jonajava:69E87YSPqm3lvIix@cluster0.qllezin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const cookieParser = require('cookie-parser');
const Product = require("./routes/Product")
const Brand = require("./routes/Brands")
const Category = require("./routes/Category")
const User = require('./routes/User')
const Auth = require('./routes/Auth')
const Cart = require('./routes/Cart')
const Orders = require('./routes/Order')
const path = require('path')
const authRequired = require("./middlewares/validateToken");

//funciona en toda la aplicacion
//middlewares
app.use(express.json());//convertido a json req.body
app.use(express.static(path.resolve(__dirname,'build')))
app.use(cookieParser());// se utiliza para analizar y manejar las cookies que se envían desde el cliente hasta el servidor.
app.use(cors({
    exposedHeaders:['X-Total-Count'],
    origin: 'http://localhost:3000',//comunicacion entre servidores
    credentials: true
}));
//app.use("/api/user", authRoutes);
app.use("/product", Product); 
 app.use("/brand",Brand);
app.use("/category", Category);
app.use("/user", User);
app.use("/cart", Cart);
 app.use("/orders",Orders);
app.use("/auth", Auth);




require("./Models/userTable")
connectDB(database);//conexion a db 
app.use(bodyParser.json());


app.listen(port,() =>(
    console.log(`servidor corre en ${port}`)
))