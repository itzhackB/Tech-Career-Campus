const StudentModel = require('../models/studentModel')
const Course = require('../models/courseModel')
const mongodb = require('mongodb')

const addNewStudent = async (req, res) => {
  try {
    await StudentModel.insertMany([req.body], (err, result) => {
      if (err) console.log(err);
      res.status(200).json({ massage: "create Student success!", data: result })

    });
  } catch (err) {
    res.status(500).json({ massage: "creat new Student field", error: err });
  }
};

const getStudent = async (req, res) => {
  try {
    await StudentModel.find({}, (err, result) => {
      if (err) console.log(err);
      res.status(200).json({ massage: "get Student success!", data: result })

    });
  } catch (err) {
    res.status(500).json({ massage: "get Student field", error: err });
  }
};

const getStudentGradeById = async (req, res) => {
  try {
    StudentModel.findOne({_id:mongodb.ObjectID(req.body._id)}, (error, result) => {
      if (error) throw error
      res.status(200).json({ massage: "get Student grades by id success!", data: result.tests
    })

    })
  }
  catch (err) {
    res.status(500).json({ massage: "get Student grades by id faild", error: err });
  }
}
const AddStudentTestById = async (req, res) => {
  try {
    StudentModel.updateOne({ _id:mongodb.ObjectID(req.body._id) }, { $push: { "tests": { name: req.body.name, grade: req.body.grade } } }, (error, result) => {
      if (error) throw error
      res.status(200).json({ massage: "add test to a student by name was a success", data: result.tests })

    })
  }
  catch (err) {
    res.status(500).json({ massage: "adding a test to the test array faild", error: err });
  }
}
const UpdateStudentTestById = async (req, res) => {
  try {
    StudentModel.updateOne({ _id:mongodb.ObjectID(req.params._id) , tests: { $elemMatch: { name:req.body.name} } }, { $set: { "tests.$.grade": req.body.grade } }, (error, result) => {
      if (error) throw error
      res.status(200).json({ massage: "updating a student test was a success", data: result.tests })

    })
  }
  catch (err) {
    res.status(500).json({ massage: "updating a student test faild", error: err });
  }
}
const DeleteStudentTestById = async (req, res) => {
  try {
    StudentModel.updateOne({ _id:mongodb.ObjectID(req.params._id) }, { $pull: { tests: { _id:mongodb.ObjectID(req.body._id) } } }, (error, result) => {
      if (error) throw error
      res.status(200).json({ massage: "deleteing a student test was a success", data: result.tests })

    })
  }
  catch (err) {
    res.status(500).json({ massage: "deleteing a student test faild", error: err });
  }
}

module.exports = {
  addNewStudent,
  getStudent,
  getStudentGradeById,
  AddStudentTestById,
  UpdateStudentTestById,
  DeleteStudentTestById
};
