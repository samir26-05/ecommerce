import multer from 'multer';
import { extname } from 'path';
import { urlArchivos } from '../libs/constants.js';

export const multerUpload = multer({
  storage: multer.diskStorage({
    destination: urlArchivos,
    filename(req, file, callback) {
      const extension = extname(file.originalname);
      const name = file.originalname.split(extension)[0];
      callback(null, `${name}-${Date.now()}${extension}`);
    },
  }),
  limits: {
    fileSize: 50*1024*5000,
  },
  fileFilter(req, file, callback) {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'video/mp4'];
    if (allowedMimeTypes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Tipo de archivo no admitido'));
    }
  },
});
