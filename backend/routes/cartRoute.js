import express from 'express'
import { addToCart, removeFromCart, getCart } from '../controllers/cartContriller.js'
import autoMiddleware from '../middleware/auto.js'

const cartRouter = express.Router()

cartRouter.post("/add",autoMiddleware, addToCart)
cartRouter.post("/remove",autoMiddleware, removeFromCart)
cartRouter.post("/get",autoMiddleware, getCart)

export default cartRouter