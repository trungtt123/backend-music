const UserServices = require('../services/user');
module.exports = (app) => {
    app.post('/user/createuser', (req, res) => {
        UserServices.CreateUser(req, res)
    });
    app.get('/user/getuser/:social/:socialID', UserServices.GetUser);
    app.get('/user/getuserfromid/:id', UserServices.GetUserFromID);
    app.get('/user/gettymofuser/:social/:socialID', UserServices.GetTymOfUser);
    app.get('/user/updatetymforuser/:social/:userSocialID/:songID', UserServices.UpdateTymForUser);
};