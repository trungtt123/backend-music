const Song = require('../repositories/song');
const Artist = require('../repositories/artist');
const User = require('../repositories/user');

module.exports = {
    async CreateSong(req, res){
        try {
            await Song.CreateSong(req.body);
            res.status(200).json({success: true});
        }
        catch(error){
            res.status(400).json({error: error});
        }
    },
    async DeleteSong(req, res){
        try {
            await Song.DeleteSong(req.params.id);
            res.status(200).json({success: true});
        }
        catch(error){
            res.status(400).json({error: error});
        }
    },
    async UpdateSong(req, res){
        try {
            await Song.UpdateSong(req.body);
            res.status(200).json({success: true});
        }
        catch(error){
            res.status(400).json({error: error});
        }
    },
    async UpdateTotalViewOfTheSong(req, res) {
        try {
            Song.UpdateTotalViewOfTheSong(req.params.id);
            res.status(200).json({ success: true });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async GetSongFromID(req, res) {
        try {
            let song = await Song.GetSongFromID(req.params.id);
            res.status(200).json({ success: true, song: song });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async GetAllSong(req, res) {
        songs = await Song.GetAllSong();
        res.status(200).json({ success: true, songs: songs });
    },
    async GetAllSongForTableRight(req, res) {
        try {
            songs = await Song.GetAllSong();
            let data = [];
            for (let i = 0; i < songs.length; i++) {
                let songtableright = {};
                let song = songs[i];
                songtableright.id = song._id;
                songtableright.top = i + 1;
                songtableright.totalView = song.totalView;
                let artist = await Artist.GetArtistFromID(song.artistID);
                let user = await User.GetUserFromID(song.userID);
                songtableright.nameArtistAndNameSong = song.name + ' - ' + artist.name;
                songtableright.timeIsAdded = song.timeIsAdded;
                songtableright.user = user.name;
                songtableright.userID = song.userID;
                data[i] = songtableright;
            };
            res.status(200).json({ success: true, songs: data });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async GetSongForCardLeft(req, res) {
        try {
            song = await Song.GetSongFromID(req.params.id);
            let songcardleft = {}
            let artist = await Artist.GetArtistFromID(song.artistID);
            songcardleft.artist = artist;
            songcardleft.id = song._id;
            songcardleft.name = song.name;
            songcardleft.url = song.url;
            res.status(200).json({ success: true, song: songcardleft });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async GetSongInitForCardLeft(req, res) {
        try {
            song = await Song.GetAllSong();
            song = song[0];
            let songcardleft = {}
            let artist = await Artist.GetArtistFromID(song.artistID);
            songcardleft.artist = artist;
            songcardleft.id = song._id;
            songcardleft.name = song.name;
            songcardleft.url = song.url;
            res.status(200).json({ success: true, song: songcardleft });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    }
}