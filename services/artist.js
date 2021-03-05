const { UpdateArtist } = require('../repositories/artist');
const Artist = require('../repositories/artist');

module.exports = {
    async CreateArtist (req, res) {
        try {
            let notification = await Artist.CreateArtist(req.body);
            res.status(200).json({success: true, notification: notification});
        }
        catch (error){
            res.status(400).json({error});
        }
    },
    async DeleteArtist (req, res) {
        try {
            await Artist.DeleteArtist(req.params.id);
            res.status(200).json({success: true});
        }
        catch(error){
            res.status(400).json(error);
        }
    },
    async UpdateArtist (req, res) {
        try {
            await Artist.UpdateArtist(req.body);
            res.status(200).json({success: true});
        }
        catch(error){
            res.status(400).json(error);
        }
    },
    GetAllArtist(req, res) {
        Artist.GetAllArtist()
            .then(data => res.status(200).json({ success: true, artists: data }))
            .catch(err => res.status(400).json({ err }));
    },
    GetArtistFromID(req, res) {
        let id = req.params.id;
        Artist.GetArtistFromID(id)
            .then(data => res.status(200).json({ success: true, artist: data }))
            .catch(err => res.status(400).json({ err }));
    }
}