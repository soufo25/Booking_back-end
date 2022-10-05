import express from "express";
import Hotel from "../schema/Hotels.js"

const router = express.Router();

//Create

router.post("/", async (req ,res) =>{
    const newHotel = new Hotel(req.body)

    try{
        const savedHotel =await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }
})

export default router; 