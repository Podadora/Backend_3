// mocks/mocks.router.js
import { Router } from "express";
import { generateMockUser, generateMockProduct } from "./mocks.generator.js";
import User from "../models/user.js";
import Product from "../models/product.js";
import { createHash } from "../utils/hash.js";

const router = Router();

// POST /api/mocks/:users/:products
router.post("/:users/:products", async (req, res) => {
    const userCount = parseInt(req.params.users) || 0;
    const productCount = parseInt(req.params.products) || 0;

    const mockUsers = [];
    const mockProducts = [];

    // Generar y guardar usuarios
    for (let i = 0; i < userCount; i++) {
        const mock = generateMockUser();
        mock.password = createHash(mock.password); // Encriptar
        mockUsers.push(mock);
    }
    await User.insertMany(mockUsers);

    // Generar y guardar productos
    for (let i = 0; i < productCount; i++) {
        mockProducts.push(generateMockProduct());
    }
    await Product.insertMany(mockProducts);

    res.json({
        message: "Mocking completado",
        users: mockUsers.length,
        products: mockProducts.length
    });
});

export default router;