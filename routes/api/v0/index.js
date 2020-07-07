import express from "express";
import area from "./area";
import order from "./order";

const router = express.Router();

router.use("/area", area);
router.use("/order", order);

export default router;
