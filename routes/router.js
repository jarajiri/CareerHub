const express = require("express");
const router = express.Router();
const mainCtr = require("../controller/Cmain");
// const jobsCtr = require("../controller/Cjobs");
// const likeCtr = require("../controller/Clike");
// const reviewCtr = require("../controller/Creview");

/* ========main routing========= */
router.get("/", mainCtr.index);
router.get("/main", mainCtr.main);
router.get("/register", mainCtr.register);
router.post("/register", mainCtr.createUser);
router.get("/login", mainCtr.login);
router.post("/login", mainCtr.findOneUsers);
// router.get("/mypage", mainCtr.selectOneUser);
// router.put("/mypage", mainCtr.updateUser);
// router.delete("/mypage", mainCtr.deleteUser);

/*  ========jobs routing========= 

*/

/*  ========like routing========= 

*/

/*  ========review routing========= 

*/

module.exports = router;
