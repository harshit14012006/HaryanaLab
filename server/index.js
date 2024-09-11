// index.js
const express = require("express");
const cors = require("cors");
const {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
} = require("./controller/userController");
const cashVoucherController = require("./controller/cashVoucherController");
const customerController = require("./controller/customerController");
const analysisController = require("./controller/analysisController");
const { setItem, getItem } = require("./controller/Item");
const path = require("path");
const multer = require("multer");
const { saveImage } = require("./controller/imageController");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
const app = express();
app.use(cors());
const port = 3001;
app.use(express.json());
app.use(express.static("uploads"));
app.get("/api/users", getAllUsers);
app.post("/api/users", addUser);
app.delete("/api/users/:Reportno", deleteUser);
app.put("/api/users/:id", updateUser);
app.post("/api/customers", customerController.createCustomer);
app.get("/api/customers", customerController.getAllCustomers);
app.put("/api/customer/:Partyid", customerController.updateCustomer);
app.delete("/api/customer/:Partyid", customerController.deleteCustomer);
app.post("/api/cashvoucher", cashVoucherController.createCashVoucher);
app.get("/api/cashvouchers", cashVoucherController.getCashVouchers);
app.post("/api/analysis", analysisController.createAnalysis);
app.get("/api/analysis", analysisController.getAnalysisRecords);
app.post("/upload", upload.single("image"), saveImage);
app.get("/api/getItem", getItem);
app.post("/api/setItem", setItem);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
