/**
 * Log Post Controllers
 *
 * Routes and functions for logging
 *
 * @since 1.0.0
 */

const gamesCollection = require("../../db").db().collection("games")

exports.game = async (req, res) => {
  const data = req.body

  gamesCollection.insertOne(data).then(entry => {
    res.json({
      success: true,
      message: "Log entry created",
      entry: entry
    })
  })
}
