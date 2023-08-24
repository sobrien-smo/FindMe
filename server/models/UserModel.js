// const mongoose = require("mongoose");
// const jwt = require ('jsonwebtoken');
// const Joi  = require ('joi');
// const passwordComplexity = require ("joi-password-complexity");

// //new mongoose?
// const userSchema = mongoose.Schema({
// 	firstName: { 
// 		type: String, 
// 		required: true 
// 	},
// 	lastName: { 
// 		type: String, 
// 		required: true 
// 	},
// 	topic: {
// 		type: String
// 	},
// 	posts:[],
// 	followers: [],
// 	following: [],
// 	topicsFollowing: [],
// 	bio: String,
// 	education: [],
// 	experience: [],
// 	currentPosition: String,
// 	currentEmployers: String
	
// });


// const UserModel = mongoose.models.Users || mongoose.model("Users", userSchema);



// // userSchema.methods.joiValidate = function(obj) {
// // 	var Joi = require('joi');
// // 	var schema = {
// // 		first_name: Joi.types.String().required(),
// // 		last_name: Joi.types.String().required(),
// // 		email: Joi.types.String().email().required(),
// // 		password: Joi.types.String().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
	
// // 	}
// // 	return Joi.validate(obj, schema);
// // }
// // // mongoose.models = {};
// // const UserModel = mongoose.models.Users || mongoose.model("Users", userSchema);
// // export default UserModel;