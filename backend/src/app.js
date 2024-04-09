import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

import { auth } from "express-openid-connect";

const app = express()

// const jwtCheck = auth({
//   audience: 'http://www.testApi.com',
//   issuerBaseURL: 'https://dev-vishal03.us.auth0.com/',
//   tokenSigningAlg: 'RS256'
// })

// app.use(jwtCheck)

app.use(cors({
    origin: true,
    credentials: true,
}))

app.use(express.json({
    limit: "20kb"
}))

// ye walla url ke liye h
// nested objects ke liye extended
app.use(express.urlencoded({extended: true, limit: "20kb"}))

// agar koi file kuch save krna ho to usko public folder me save krna
app.use(express.static("public"))

// reading or setting cookie in user browser
app.use(cookieParser())


// importing routers
import userRouter from "./routes/user.routes.js";
import blogRouter from "./routes/blog.routes.js"
import commentRouter from "./routes/comment.routes.js"

// declaring routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/blog", blogRouter)
app.use("/api/v1/comment", commentRouter)




export { app }