import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '//jesus-afanador/uploads');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
    public: true,
  }),
});
export const uploads = upload.single('file')

const avatar = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '//jesus-afanador/uploads/icon');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
    public: true,
  }),
});
export const AvatarUploads = avatar.single('file')