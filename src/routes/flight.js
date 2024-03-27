import { express } from "express";
import {CREATE_FLIGHT, GET_ALL_FLIGHTS, GET_FLIGHT_BY_ID, DELETE_FLIGHT_BY_ID, UPDATE_FLIGHT_BY_ID} from "../controllers/flight.js"
const router = Express.Router()

router.post("/flights", CREATE_FLIGHT);
router.get("/flights",GET_ALL_FLIGHTS);
router.get("/flight", GET_FLIGHT_BY_ID);
router.delete("/flight", DELETE_FLIGHT_BY_ID);
router.put("/flight", UPDATE_FLIGHT_BY_ID);


export default router;