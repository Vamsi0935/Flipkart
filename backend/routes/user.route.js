import express from "express";
import {
  getProductById,
  getProducts,
} from "../controller/product.controller.js";
import { userSignUp, userLogIn } from "../controller/user.controller.js";

const router = express.Router();

//login & signup
router.post("/register", userSignUp);
router.post("/login", userLogIn);
router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;
