const produtosController = require ('../controllers/produtosController');

router.get('/', produtosController.index);


/* 
router.get('/', (req, res)=>{
    res.send('Index de produtos');
});  esse era o modo antigo de fazer agora com o MVC desenvolvemos como acima*/