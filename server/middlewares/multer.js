const multer = require('multer');
const path = require('path');
// Multer 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images');
    },
    filename: function (req, file, cb) {
        // image/png
        console.log(file)
        const fileExt = path.extname(file.originalname);
        const filename = file.originalname
                         .replace(fileExt," ")
                         .toLowerCase()
                         .split(" ")
                         .join("-")+"-"+Date.now()
                         
        cb(null, filename+fileExt );
    }
})

const upload = multer({storage:storage})

module.exports = upload;