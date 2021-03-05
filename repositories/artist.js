const ArtistModel= require('../db/models/artist');

const Artist = {};

Artist.CreateArtist = async (data) => {
    var artist = await ArtistModel.findOne({contact: data.contactArtist});
    if (artist !== null) return false;
    ArtistModel.create({
        name: data.nameArtist,
        age: data.ageArtist,
        contact: data.contactArtist,
        country: data.countryArtist
    });
    return true;
};
Artist.UpdateArtist = async (data) => {
    var artist = await ArtistModel.findById(data.idArtist);
    artist.name = data.nameArtist;
    artist.age = data.ageArtist;
    artist.contact = data.contactArtist;
    artist.country = data.countryArtist;
    await artist.save(); 
};
Artist.DeleteArtist = async (id) => {
    await ArtistModel.deleteOne({_id: id});
};
Artist.GetAllArtist = () => {
    var result = ArtistModel.find();
    return result;
};
Artist.GetArtistFromID = (id) => {
    var result = ArtistModel.findById(id);
    return result;
};
module.exports = Artist;
