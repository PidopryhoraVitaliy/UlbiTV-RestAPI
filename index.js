import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from 'express-fileupload'

const PORT = 5000
const DB_URL = 'mongodb+srv://pvv:5N_d5!_akRZ-Be5@cluster0.kjx3w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startApp()