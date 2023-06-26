const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');

router.post('/', nomeMiddleware.validateName,
    sobrenomeMiddleware.validateFamilyName,
    idadeMiddleware.validateAge,
    clienteController.save
);

router.get('/', clienteController.findAll);

router.put('/', clienteController.update);

router.delete('/:id', clienteController.remove);


module.exports = router;
