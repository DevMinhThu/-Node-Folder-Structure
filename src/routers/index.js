const express = require("express");
const router = express.Router();

// controller
const Auth = require("../app/controllers/auth");
const Admin = require("../app/controllers/admin");
const User = require("../app/controllers/user");
const Categories = require("../app/controllers/category");
const Product = require("../app/controllers/product");
const Test = require("../app/controllers/test");

// middleware
const uploadMiddleware = require("../app/middlewares/upload");

// === test ===
router.get("/test", Test.test);

/**===========Authentication============= */
router.get("/admin/login", Auth.login);
// res data from method post in form of file auth.js
router.post("/admin/login", Auth.postLogin);

router.get("/admin/logout", Auth.logout);

router.get("/admin", Admin.dashboard);

/**===========Users============= */
router.get("/admin/users", User.index);

router.get("/admin/users/create", User.create);

router.get("/admin/users/edit/:id", User.edit);

router.get("/admin/users/delete/:id", User.delete);

/**===========Categories============= */
router.get("/admin/categories", Categories.index);

router.get("/admin/categories/create", Categories.create);

router.get("/admin/categories/edit/:id", Categories.edit);

router.get("/admin/categories/delete/:id", Categories.delete);

/**===========product============= */
router.get("/admin/products", Product.index);

router.get("/admin/products/create", Product.create);
router.post(
  "/admin/products/store",
  uploadMiddleware.single("thumbnail"), // single: upload 1 file
  Product.store
);

router.get("/admin/products/edit/:id", Product.edit);

router.get("/admin/products/delete/:id", Product.delete);

module.exports = router;
