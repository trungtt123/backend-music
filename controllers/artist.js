const Artist = require('../repositories/artist');
const ArtistServices = require('../services/artist');

module.exports = (app) => {
    app.post('/artist/createartist', (req, res) => ArtistServices.CreateArtist(req, res));
    app.get('/artist/getallartist', ArtistServices.GetAllArtist);
    app.get('/artist/getartistfromid/:id', ArtistServices.GetArtistFromID);
    app.get('/artist/deleteartistfromid/:id', ArtistServices.DeleteArtist);
    app.post('/artist/updateartist' ,(req, res) => ArtistServices.UpdateArtist(req, res));
};