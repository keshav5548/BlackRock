const express = require("express");
const {
  registerUser,
  loginUser,
  logout,

  getUserDetails,
} = require("../controllers/userController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);

module.exports = router;
