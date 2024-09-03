import express from 'express'
import autoMiddleware from '../middleware/auto.js'
import { listOrders, placeOrder, updateStatus, usersOrder, verifyOrder } from '../controllers/orderController.js'

const orderRouter = express.Router()

orderRouter.post("/place", autoMiddleware, placeOrder)
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders", autoMiddleware, usersOrder)
orderRouter.get('/list', listOrders)
orderRouter.post('/status', updateStatus)

export default orderRouter