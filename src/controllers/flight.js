// 1. Sukurti rest api  skirta kelioniniam skrydžiui (flight);
// 2. Skrydį sudaro: id, kaina, departureCity, destinationCity, destinationCityPhotoUrl, departure time;
// 3. Visi duomenys turi būt saugomi masyvo kintamajam;
// 4. Turi but 5 endpointai, skrydžio įdėjimas, visu skrydžių gavimas, vieno skrydžio gavimas pagal id, skrydžio ištrinimas pagal id bei skrydžio atnaujinimas pagal id;
// 5. Aprašant endpointus naudotis endpointų konvencijomis konvencijomis;
let flights = [];

const CREATE_FLIGHT = (req, res) => {
    const existingFlight = flights.find(flight => flight.id === req.body.id);
    if (existingFlight) {
        return res.status(409).json({status: "Conflict", message: "Movie with this id already exists"})
    }

    const flight = {
        "id": req.body.id.toString(),
        "price": req.body.price,
        "departureCity": req.body.departureCity,
        "destinationCity": req.body.destinationCity,
        "destinationCityPhotoUrl": req.body.destinationCityPhotoUrl,
    }

    flights.push(flight);
    
    console.log("Flight", flight)

    return res.status(200).json({status: "Flight is created"})

}

const GET_ALL_FLIGHTS = (req, res) => {
    if (flights.length === 0) {
        return res.status(200).json({status: "Data does not exist"})
    }
    return res.json({flights: flights})
}

const GET_FLIGHT_BY_ID = (req, res) => {
    const flightById = flights.find((flight) => flight.id === req.params.id);
    if (!flightById) {
        return res.status(404).json({message: "There is no flight with such id"})
    }
    return res.json({flight: flightById})
};

const DELETE_FLIGHT_BY_ID = (req, res) => {
    const doesFlightExist = flights.some((flight) => flight.id === req.params.id);
        if (!doesFlightExist) {
            return res.status(404).json({message: `Flight with id ${req.params.id} does not exist`})
        }
        const remainingFlights = flights.filter((flight) => req.params.id !==flight.id);

        flights = remainingFlights;

        return res.status(200).json({message: `Flight with id ${req.params.id} deleted`});
    };


const UPDATE_FLIGHT_BY_ID = (req, res) => {
    const doesFlightExist = flights.some((flight) => flight.id === req.params.id);
    if (!doesFlightExist) {
        return res.status(404).json({message: `Flight with id ${req.params.id} does not exist`})
    }
    const index = flights.findIndex((flight) => flight.id === req.params.id);

    flights[index] = {...flights[index], ...req.body};

    return res.json({updatedFlight: flights[index]})
}

let isAppCrashed = false;

const WHETHER_APP_IS_CRASHED = (req, res) => {
    if (isAppCrashed) {
        return res.status(500).json({success: false, message: "App is crashed"})
    } else {
        return res.json({success: true, message: "App works"})
    }
}


export {CREATE_FLIGHT, GET_ALL_FLIGHTS, GET_FLIGHT_BY_ID, DELETE_FLIGHT_BY_ID, UPDATE_FLIGHT_BY_ID, WHETHER_APP_IS_CRASHED}

/*
{
    "id": 1,
    "price": 39.85,
    "departureCity": "Vilnius",
    "destinationCity": "Oslo",
    "destinationCityPhotoUrl": "https://www.fjordtours.com/media/10920/froydislehne-instagram-19th-jul-2020-1901-utc.jpeg?anchor=center&mode=crop&width=1120&height=1120&rnd=133208597010000000&slimmage=True"
}

{
    "id": 2,
    "price": 40.30,
    "departureCity": "Vilnius",
    "destinationCity": "Stockholm",
    "destinationCityPhotoUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldcitiescultureforum.com%2Fcity%2Fstockholm%2F&psig=AOvVaw2RVDXETIKCXi1tH2PvsXje&ust=1711616468509000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODx7baKlIUDFQAAAAAdAAAAABAD"
}



*/