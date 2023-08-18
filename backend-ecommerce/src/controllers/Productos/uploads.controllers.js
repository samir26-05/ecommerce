import { ipFileServer } from "../../libs/constants.js";

export const uploadFile = async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({ message: 'No se ha proporcionado ningún archivo' });
    }
    
    let fileType;
    if (file.mimetype.startsWith('image')) {
      fileType = 'imagen';
    } else if (file.mimetype.startsWith('video')) {
      fileType = 'video';
    } else {
      fileType = 'otro';
    }
    
    return res.status(200).json({
      message: `${fileType} cargado exitosamente`,
      url: `${ipFileServer}/${file.filename}`,
      name: file.filename,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al cargar el archivo', error: error.message });
    console.error(error);
  }
};
