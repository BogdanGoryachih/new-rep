const Router = require('express')
const router = new Router()

router.post('/',)
router.get('/')
router.get('/brand',(req,res) =>{
    res.json({message:'heelo'})
})
module.exports = router