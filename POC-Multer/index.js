import express from "express";
import path from "path"
import cors from "cors"
import multer from "multer";


const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({ dest: 'uploads/' });

app.post('/register', upload.single('image'), (req, res) => {
    const { name, email, password, image } = req.body
    res.send({ name, email, password, image })
});

// app.post('/register', (req, res) => {
//     const { name, email, password } = req.body
//     res.send({ name, email, password })
// });




const PORT = 5000

app.listen(PORT, () => {
    console.log("servidor em pé na porta ", PORT)
})