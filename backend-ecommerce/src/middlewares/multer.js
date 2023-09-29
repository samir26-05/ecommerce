import multer from "multer";

const storageConfig = (destination) => multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destination);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
  public: true,
});

const createMulterUpload = (destination, fieldName) => {
  const storage = storageConfig(destination);
  return multer({ storage }).single(fieldName);
};

export const uploads = createMulterUpload('src/uploads', 'file');
export const AvatarUploads = createMulterUpload('src/uploads/icon', 'file');
