const SongServices = require('../services/song');
module.exports = (app) => {
    app.get('/song/getallsong', SongServices.GetAllSong);
    app.get('/song/updatetotalviewofthesong/:id', SongServices.UpdateTotalViewOfTheSong);
    app.get('/song/deletesong/:id', SongServices.DeleteSong);
    app.get('/song/getsongfromid/:id', SongServices.GetSongFromID);
    app.get('/song/getallsongfortableright', SongServices.GetAllSongForTableRight);
    app.get('/song/getsongforcardleft/:id', SongServices.GetSongForCardLeft);
    app.get('/song/getsonginitforcardleft', SongServices.GetSongInitForCardLeft);
    app.post('/song/createsong', (req, res) =>{
        SongServices.CreateSong(req,res);
    });
    app.put('/song/updatesong', (req, res) =>{
        SongServices.UpdateSong(req,res);
    });
};