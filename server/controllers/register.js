const User = require("../models/user");
exports.user = async (req, res) => {
  const { name, email } = req.body;
try {
  const record=await User.createUser(email,name,'Admin','1234');
  if(record){
    return res
    .status(200)
    .json({ success: true, message: `${email} saved successfully` });
  }else{
    return res
    .status(409)
    .json({success:false,message:`${email} already exists!`})
  }
} catch (error) {
  console.log(error);
}

};
