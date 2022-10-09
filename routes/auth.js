import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, this is a test!");
})

router.get("/register", (req, res) => {
    res.send("Hello, this is auth register a test!");
})

export default router