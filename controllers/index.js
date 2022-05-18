module.exports = {
  auth: {
    login: require("./auth/login"),
    logout: require("./auth/logout"),
    signup: require("./auth/signup"),
  },
  student: {
    getStudentByRegNo: require("./student/getStudentByRegNo"),
    getStudents: require("./student/getStudents"),
    getStudentStatus: require("./student/getStudentStatus"),
    updateStudentStatus: require("./student/updateStudentStatus"),
    deleteStudent: require("./student/deleteStudent"),
  },
  college: {
    getCollegeById: require("./college/getCollegeById"),
  },
  admin: {
    createCenterIncharge: require("./admin/createCenterIncharge"),
    deleteCenterIncharge: require("./admin/deleteCenterIncharge"),
    getCenterIncharge: require("./admin/getCenterIncharge"),
    updateCenterIncharge: require("./admin/updateCenterIncharge"),
    createVerifyingOfficer: require("./admin/createVerifyingOfficer"),
    deleteVerifyingOfficer: require("./admin/deleteVerifyingOfficer"),
    getVerifyingOfficer: require("./admin/getVerifyingOfficer"),
    getVerifyingOfficerByEmail: require("./admin/getVerifyingOfficerByEmail"),
    getVerifyingOfficerByCollegeId: require("./admin/getVerifyingOfficerByCollegeId"),
    updateVerifyingOfficer: require("./admin/updateVerifyingOfficer"),
  },
  result: {
    getResult: require("./result/getResult"),
    getStudentResult: require("./result/getStudentResult"),
  },
};
