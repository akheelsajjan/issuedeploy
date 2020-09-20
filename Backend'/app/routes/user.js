const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;


    app.get(`${baseUrl}/view/all`, userController.getAllUser);


    // params: userId.
    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);

    
    // params: firstName, lastName, email, mobileNumber, password, apiKey.
    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertvewpcpojhgfdwertyuVCJ9.734895hsdkfh77jfsdfhh.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "mobileNumber": 8206731080,
                "email": "aksajjan282@mail.com",
                "lastName": "Akheel",
                "firstName": "Sajjan",
                "userId": "E2asIpA8"
            }

        }
    */

    app.post(`${baseUrl}/login`, userController.loginFunction);

    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);

    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);

    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);

    app.get(`${baseUrl}/:userId/userVerification`, userController.userVerification);

    app.post(`${baseUrl}/forgotPassword`, userController.forgotPassword);
    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/forgotPassword Forgot Password.
     *
     * @apiParam {string} UserId UserId of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, data.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User Details Found",
            "status": 200,
            "data": "Password updatePassword successfully"
        }
        
    * @apiErrorExample {json} Error-Response:
    *
    *       
        {
            "error": true,
            "message": "Failed To Find User Details",
            "status": 500,
            "data": null
        }

    * @apiErrorExample {json} Error-Response:
    *
    *       
        {
            "error": true,
            "message": "No User Details Found",
            "status": 404,
            "data": null
        }                    
    * @apiErrorExample {json} Error-Response:
    *
    *       
        {
            "error": true,
            "message": "UserId" parameter is missing",
            "status": 400,
            "data": null
        }
*/

    app.post(`${baseUrl}/resetPassword`, userController.resetPassword);

    /**
       * @apiGroup Users
       * @apiVersion  1.0.0
       * @api {post} /api/v1/users/resetPassword Reset Password .
       *
       * @apiParam {string} Email ID  Email ID of the user. (body params) (required)
       *
       * @apiSuccess {object} myResponse shows error status, message, http status code, data.
       * 
       * @apiSuccessExample {object} Success-Response:
          {
              "error": false,
              "message": "Mail sent Successfully",
              "status": 200,
              "data": "Password reset successful"
          }
          
      * @apiErrorExample {json} Error-Response:
      *
      *       
          {
              "error": true,
              "message": "Failed To Find User Details",
              "status": 500,
              "data": null
          }

      * @apiErrorExample {json} Error-Response:
      *
      *       
          {
              "error": true,
              "message": "No User Details Found",
              "status": 404,
              "data": null
          }
      * @apiErrorExample {json} Error-Response:
      *
      *       
          {
              "error": true,
              "message": "UserId" parameter is missing",
              "status": 400,
              "data": null
          }
  */

}
