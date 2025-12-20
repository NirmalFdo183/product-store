import express from 'express';
import mongoose from 'mongoose';

import Product from "../models/product.model.js";

import { getProducts } from '../controller/product.controller.js';
import { createProduct } from '../controller/product.controller.js';
import { deleteProduct } from '../controller/product.controller.js';
import { updateProduct } from '../controller/product.controller.js';

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;