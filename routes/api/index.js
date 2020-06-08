import express from 'express'
import v0Routes from './v0'


const router = express.Router()
router.use('/v0', v0Routes)

export default router