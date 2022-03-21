/**
 * Guess Routes
 *
 * @since 1.0.0
 */

const router = require("express").Router()

const guessPostController = require("../../controllers/post/guess")

// POST requests
router.post("/get-word", guessPostController.getWord)

module.exports = router
