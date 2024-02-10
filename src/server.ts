import "reflect-metadata"
import  Koa from 'koa'
import logger from 'koa-logger'
import { config } from "./config/index";
import { mainRouter } from "./starters/routes";
import { dbConnect } from "./db";
import { Server }  from 'socket.io'
import jwt from 'jsonwebtoken';
dbConnect()
const { PORT } = config;
const app = new Koa();

mainRouter(app);

let server = app.listen(PORT, () => {
    console.log(`App running on ${PORT} 🚀`)
});

const io = new Server(server, {
    allowEIO3: true,
    cors: {
        origin: true,
        methods: ['GET', 'POST'],
        credentials: true
    }
})

// io.use(async (socket, next) => {
//     // user connect
//     try {
//         if (socket.handshake.query.token) {
//             const token = socket.handshake.query.token;
//             const payload = await jwt.verify(token, config.ACCESS_TOKEN_SECRET);
//             socket.userId = payload.user_id;
//         }
//     }
    
// })

io.on('connection', async (socket) => {
    console.log('connected ', socket);
    socket.on("disconnect", () => { 
        console.log('disconnected', socket)
    });
})

//this is development