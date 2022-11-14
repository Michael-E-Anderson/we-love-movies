// const Router = require("express").Router({ mergeParams = true })
const { Router } = require("express")
const controller = require("./theaters.controller")
const router = Router({ mergeParams: true })
const methodNotAllowed = require("../errors/methodNotAllowed")


router.route("/").get(controller.list).all(methodNotAllowed)

module.exports = router