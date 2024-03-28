// 1. Savo product applikacijoje prisijungti prie pakurtos duombazės naudojant mongoose.
// // nemamiršt užsiinstaliuot bibliotekos
import mongoose from "mongoose";

// 3. Apsirašyti filmo duomenų modelį. Visi laukai turi būt required.
const flightSchema = mongoose.Schema({
    price:{type: Number},
    departureCity: {type: String, required: true},
    destinationCity:{type: String, required: true},
    destinationCityPhotoUrl:{type: String, required: true},
})

export default mongoose.model("Flight", flightSchema)