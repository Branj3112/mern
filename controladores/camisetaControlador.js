
const Camiseta = require('../modelos/camisetaEsquema'); 
exports.obtenerCamisetas = async (req, res) => {
    try {
      const camisetas = await Camiseta.find();    // Busca todos los documentos de usuarios en la BD
      res.json(Camiseta);                       // Responde con la lista en formato JSON
    } catch (error) {
      res.status(500).json({ error: 'Error del servidor' }); // Error genérico en caso de fallo
    }
  };
  
  // Obtener un usuario por ID
  exports.obtenercamisetaxid = async (req, res) => {
    try {
      const camiseta = await Camiseta.findById(req.params.id); // Busca usuario por el ID proporcionado
      if (!camiseta) {
        return res.status(404).json({ error: 'Camiseta no encontrada' }); // Si no existe, 404
      }
      res.json(camiseta); // Si existe, lo devolvemos en JSON
    } catch (error) {
      res.status(500).json({ error: 'Error del servidor' });
    }
  };
  
  // Crear un nuevo usuario
  exports.crearCamiseta = async (req, res) => {
    try {

    const nuevoCamiseta = new Camiseta(req.body);
      const camisetaGuardada = await nuevoCamiseta.save();      // Guardamos en la base de datos
      res.status(201).json(camisetaGuardada);    // Devolvemos el usuario creado con código 201 (Creado)
    } catch (error) {
        console. log(error);
      res.status(500).json({ error: 'Error al crear camiste' }); // Posibles errores de validación
    }
  };
  
  // Actualizar un usuario existente
  exports.modificarCamiseta = async (req, res) => {
    try {
      const datosActualizados = req.body;
      const camisetaActualizada = await Camiseta.findByIdAndUpdate(
        req.params.id,
        datosActualizados,
        { new: true } // opción new:true para obtener el documento actualizado
      );
      if (!camisetaActualizada) {
        return res.status(404).json({ error: 'camiseta no encontrada' });
      }
      res.json(camisetaActualizada);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar camiseta' });
    }
  };
  
  // Eliminar un usuario
  exports.eliminarCamiseta = async (req, res) => {
    try {
      const camisetaEliminada = await Camiseta.findByIdAndDelete(req.params.id);
      if (!camisetaEliminada) {
        return res.status(404).json({ error: 'camiseta no encontrada' });
      }
      res.json({ message: 'Camiseta eliminada' });
    } catch (error) {
      res.status(500).json({ error: 'Error del servidor' });
    }
  };


  