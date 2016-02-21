'use strict';

exports.authActivateGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * mail (String)
  * key (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "result" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.authForgotPasswordPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * mail (String)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.authResendActivationPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * mail (String)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.authSetNewPasswordGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * mail (String)
  * key (String)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.authSignInPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * mail (String)
  * password (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "year" : 1.3579000000000001069366817318950779736042022705078125,
  "surname" : "aeiou",
  "university" : "aeiou",
  "name" : "aeiou",
  "photo" : "aeiou",
  "id" : "aeiou",
  "faculty" : "aeiou",
  "group" : 1.3579000000000001069366817318950779736042022705078125
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.authSignUpPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * surname (String)
  * password (String)
  * studNumber (String)
  * year (String)
  * university (Integer)
  * faculty (Integer)
  * group (Integer)
  * mail (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "mail" : "aeiou",
  "name" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

