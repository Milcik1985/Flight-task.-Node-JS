import express from 'express';
import cors from 'cors';
import flightRouter from "./src/routes/flight.js";
import 'dotenv/config'

const app = express()

app.use(cors())

app.use(express.json())

app.use(flightRouter)

app.use((req, res) => {
    return res.status(404).json({status: "Endpoint does not exist"}) 
});

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
});

// 5. Aprašant endpointus naudotis endpointų konvencijomis konvencijomis;
// 6. Parašyti endpointą kuris indikuotu ar applikacija yra nulūžus ar ne, jei applikacija nėra nulūžus sekmės json žinutė turi būt gražinta;
// 7. Padaryt endpointą kuris priimą gražinamų rezultatų sakičių ir puslapio skaičių. Endpointas gražina reikalaujamą skaičių skrydžių;
// // pagination