const { CreateUser } = require('../repositories/user');
const User = require('../repositories/user');


module.exports = {
    async CreateUser(req, res) {
        try {
            User.CreateUser(req.body);
            res.status(200).json({ success: true });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async GetUser(req, res) {
        try {
            let user = await User.GetUser(req.params.social, req.params.socialID);
            res.status(200).json({ success: true, user: user });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async GetUserFromID(req, res) {
        try {
            let user = await User.GetUserFromID(req.params.id);
            res.status(200).json({ success: true, user: user });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async GetTymOfUser(req, res) {
        try {
            let tym = await User.GetTymOfUser(req.params.social, req.params.socialID);
            res.status(200).json({ success: true, tym: tym });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async UpdateTymForUser(req, res) {
        try {
            await User.UpdateTymForUser(req.params.social, req.params.userSocialID, req.params.songID);
            res.status(200).json({success: true});
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    }
}