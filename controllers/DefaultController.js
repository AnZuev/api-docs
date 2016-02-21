'use strict';

var url = require('url');


var DefaultController = require('./DefaultControllerService');


module.exports.authActivateGET = function authActivateGET (req, res, next) {
  DefaultController.authActivateGET(req.swagger.params, res, next);
};

module.exports.authForgotPasswordPOST = function authForgotPasswordPOST (req, res, next) {
  DefaultController.authForgotPasswordPOST(req.swagger.params, res, next);
};

module.exports.authResendActivationPOST = function authResendActivationPOST (req, res, next) {
  DefaultController.authResendActivationPOST(req.swagger.params, res, next);
};

module.exports.authSetNewPasswordGET = function authSetNewPasswordGET (req, res, next) {
  DefaultController.authSetNewPasswordGET(req.swagger.params, res, next);
};

module.exports.authSignInPOST = function authSignInPOST (req, res, next) {
  DefaultController.authSignInPOST(req.swagger.params, res, next);
};

module.exports.authSignUpPOST = function authSignUpPOST (req, res, next) {
  DefaultController.authSignUpPOST(req.swagger.params, res, next);
};
