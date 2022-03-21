/**
 * Log Routes
 *
 * @since 1.0.0
 */

const router = require("express").Router()

const logPostController = require("../../controllers/post/log")

// POST requests
router.post("/victory", logPostController.victory)

module.exports = router
