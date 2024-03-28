import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import flightRouter from "./src/routes/flight.js";
import 'dotenv/config'

const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect(process.env.MONGO_CONNECTION)
.then(() => console.log("Connected to DB"))
.catch((err) => {
    console.log("err", err)
})

app.use(flightRouter)

app.use((req, res) => {
    return res.status(404).json({status: "Endpoint does not exist"}) 
});

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
});

// 6. Parašyti endpointą kuris indikuotu ar applikacija yra nulūžus ar ne, jei applikacija nėra nulūžus sekmės json žinutė turi būt gražinta;
// 7. Padaryt endpointą kuris priimą gražinamų rezultatų sakičių ir puslapio skaičių. Endpointas gražina reikalaujamą skaičių skrydžių;
// // pagination


// 4. Controller faile sukuriant product įdėti jį į duombazę.
// 6. Prisijungus prie DB connect linką iškelti į .env failą;+
// 7. Parašytas fn apjuosti try / catch;