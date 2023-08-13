const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProductDetails,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
//Get all products
router.route("/products").get(getAllProducts);

//Create a new product
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

//Get all products
router.route("/product/:id").get(getProductDetails);

module.exports = router;
