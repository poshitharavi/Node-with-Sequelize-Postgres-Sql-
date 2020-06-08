import express from 'express'
import area from './area'

const router = express.Router()

router.use('/area', area)

export default router