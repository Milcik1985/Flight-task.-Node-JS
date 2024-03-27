import express from "express";
import {CREATE_FLIGHT, 
    GET_ALL_FLIGHTS, 
    GET_FLIGHT_BY_ID, 
    DELETE_FLIGHT_BY_ID, 
    UPDATE_FLIGHT_BY_ID,
    WHETHER_APP_IS_CRASHED} from "../controllers/flight.js";
const router = express.Router();

router.post("/flights", CREATE_FLIGHT);
router.get("/flights",GET_ALL_FLIGHTS);
router.get("/flights/:id", GET_FLIGHT_BY_ID);
router.delete("/flights/:id", DELETE_FLIGHT_BY_ID);
router.put("/flights/:id", UPDATE_FLIGHT_BY_ID);
router.get("/checkAppStatus", WHETHER_APP_IS_CRASHED);


export default router;