const express = require('express');
const router = express.Router();
const camisetaController = require('../controladores/camisetaControlador');
router.get('',camisetaController.obtenerCamisetas);
router.get('/:id', camisetaController.obtenercamisetaxid);
router.post('/', camisetaController.crearCamiseta);
router.put('/:id', camisetaController.modificarCamiseta);
router.delete('/:id', camisetaController.eliminarCamiseta);
module.exports = router;
