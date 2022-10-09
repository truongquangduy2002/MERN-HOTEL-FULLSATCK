import express from "express";
const router = express.Router();

import {
    hotels,
    updateHotels,
    deleteHotels,
    getHotels,
    getAllHotels
} from "../controllers/hotels.js";

//CREATE
router.post('/', hotels);

//UPDATE
router.put('/:id', updateHotels);

//DELETE
router.delete('/:id', deleteHotels);

//GET
router.get('/:id', getHotels);

//GET ALL
router.get('/', getAllHotels);

export default router;