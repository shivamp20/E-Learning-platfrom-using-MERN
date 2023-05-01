const express = require("express");
const router = express.Router();

const quizData = require('../Controller/quizcontroller');

router.post('/addData',quizData);

module.exports=router;