import express, { json } from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
dotenv.config();

const app = express();
app.use(cors())
app.use(json())

app.post("/sign-up", async (req, res) => {

const user = req.body;

const passwordHash = bcrypt.hashSync(password, 10);

await db.collection('users').insertOne({ ...user, senha: passwordHash }) 

res.sendStatus(201);
});

app.post("/sign-in", async (req, res) => {

    const { email, senha } = req.body;
    const mongoClient = new mongoClient(process.env.MONGO_URI)
    await mongoClient.connect()
    
    const user = await db.collection('users').findOne({ email });

    try
    {
        if(user && bcrypt.compareSync(senha, user.senha)) 
        {
            await db.collection('onlineuser').insertOne(email)
            res.sendStatus(201);
        }
    }
    catch
    {
        res.sendStatus(500);
    }

});

app.listen(5000, () => {
    console.log("Listening on 5000")
});