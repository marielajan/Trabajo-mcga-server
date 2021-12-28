const Personal = require('../models/personal');

// Agregar nuevo Personal
exports.addNewPersonal = async (req, res) => {
  try {
    const body = req.body;
    const personal = new Personal(body);

    if (!personal) return res.status(400).json('Error al agregar personal.');

    await personal.save();
    return res.status(200).json(personal);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar Personal
exports.updatePersonal = async (req, res) => {
  try {
    const body = req.body;

    if (!body._id)
      return res.status(400).json('No existe personal con ese Id.');

    const personal = await Personal.findByIdAndUpdate(body._id, body, {
      new: true,
    });

    if (!personal) return res.status(400).json('Error al actualizar el personal.');

    return res.status(200).json(personal);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar personal
exports.deletePersonal = async (req, res) => {
  try {
    const { personalId } = req.params;
    const personal = await Personal.findByIdAndDelete(personalId);

    if (!personal) return res.status(400).json('Error al eliminar personal.');

    return res.status(200).json('El personal ha sido eliminado correctamente.');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Listar todo el Personal
exports.getAllPersonal = async (req, res) => {
  try {
    const personal = await Personal.find();

    if (personal.length === 0)
      return res.status(400).json('No se ha encontrado  personal.');

    return res.status(200).json(personal);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Obtener Personal por Id.
exports.getPersonalById = async (req, res) => {
  try {
    const { personalId } = req.params;
    const personal = await Personal.findById(personalId);

    if (!personal) return res.status(400).json('No existe personal con ese Id.');

    return res.status(200).json(personal);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

