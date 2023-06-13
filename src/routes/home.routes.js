const {Router} = require("express");

const router = Router();

router.get("/", (req, res)=>{
    res.render('links/home.hbs');
})
module.exports = router;