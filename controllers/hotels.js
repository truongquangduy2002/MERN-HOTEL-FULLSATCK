import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE

export const hotels = async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
        const userHotel = await newHotel.save();
        res.status(200).json(userHotel);
    } catch (error) {
        res.status(500).json(err);
    }
}
//UPDATE

export const updateHotels = async (req, res) => {

    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true },
        );
        res.status(200).json(updateHotel);
    } catch (error) {
        res.status(500).json(err);
    }
}
//DELETE

export const deleteHotels = async (req, res) => {

    try {
            await Hotel.findByIdAndDelete(
            req.params.id,
            { $set: req.body },
        );
        res.status(200).json("Hotel has been deleted.");
    } catch (error) {
        res.status(500).json(err);
    }
}
//GET

export const getHotels = async (req, res) => {

    try {
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json(err);
    }
}
//GET ALL

export const getAllHotels = async (req, res) => {

    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json(err);
    }
}