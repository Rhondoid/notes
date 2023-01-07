const router = require('express').Router();
const apiRoutes = require ("./apiRoutes")
const htmlRoutes = require ("./htmlRoutes/html.routes")


router.use("/", htmlRoutes);
// router.use("/api", apiRoutes);



module.exports = router;