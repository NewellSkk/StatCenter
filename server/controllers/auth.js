const User = require("../models/user");
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(200).json({ success: false, message: "Invalid Email" });
    }

    const isMatch = await User.comparePasswords(password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid password" });
    }
    res.json({ success: true, message: "Successful Login",username:user.name,userID:user._id,userRank:user.rank });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
exports.editPassword= async(req,res)=>{
  const {userID,oldPass,newPass}=req.body;
  try {
   const response=await User.editPassword(userID,oldPass,newPass);
    res.json({success:response.success,message:response.message});

  } catch (error) {
    
  }
}
