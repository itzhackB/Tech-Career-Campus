const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController")

router.post('/', studentController.addNewStudent);
router.get('/', studentController.getStudent);
router.get('/GetStudentGradeById', studentController.getStudentGradeById);
router.post('/AddStudentTestById', studentController.AddStudentTestById);
router.post('/UpdateStudentTestById/:_id', studentController.UpdateStudentTestById);
router.delete('/DeleteStudentTestById/:_id', studentController.DeleteStudentTestById);
module.exports = router;