import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.get("/home",(req,res)=>{
    return res.status(200).json({
        message:"I am Arnav Sawant",
        success:true
    })
});


//middleware?
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http//localhost:5173',
    crendentials:true
}
app.use(cors(corsOptions));

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})