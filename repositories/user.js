const UserModel = require('../db/models/user');
const User = {};

User.CreateUser = async(data) => {
    var user = await UserModel.findOne({social: data.userSocial, socialID: data.userSocialID});
    if (user === null) {
        console.log('hey');
        await UserModel.create({
            social: data.userSocial, 
            socialID: data.userSocialID,
            tym: [],
            name: data.nameUser,
            permission: data.permissionUser
        });
    }
}
User.GetUser = async(social, socialID) => {
    var user = await UserModel.findOne({social, socialID});
    return user;
}
User.GetUserFromID = async(id) => {
    var user = await UserModel.findOne({_id: id});
    return user;
}
User.GetTymOfUser = async(social, socialID) => {
    var user = await UserModel.findOne({social, socialID});
    return user.tym;
}
User.UpdateTymForUser = async(social, userSocialID, songID) => {
    var user = await UserModel.findOne({social, socialID: userSocialID});
    for (var i = 0; i < user.tym.length; i++){
        if (user.tym[i] === songID) {
            user.tym.splice(i, 1);
            await user.save();
            return;
        }
    }
    user.tym.push(songID);
    await user.save();
}
module.exports = User;
