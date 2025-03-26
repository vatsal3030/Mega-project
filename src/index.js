// require('dotenv').config({path:'./env'});
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: '../.env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`)
            app.on("error", (error) => {
                console.log("error : ", error)
            })
        })
    })
    .catch((err) => {
        console.log("MONGODB connection failed !! ", err);
    })

























