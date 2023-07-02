const express = require("express")
const router = express.Router()
let methodOverride = require('method-override')

router.use(methodOverride('_method'))
const linkController = require("../controllers/linkController")

router.get("/", linkController.allLinks)
router.get("/:title", linkController.redirect)
router.get("/add", (req, res)=> res.render("index"))

router.post("/", express.urlencoded({ extended:true }), linkController.addLink)

router.delete("/:id", linkController.deleteLink)
router.delete("/",  express.urlencoded({ extended:true }), linkController.deleteLink)

module.exports = router