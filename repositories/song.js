const SongModel= require('../db/models/song');
const UserModel = require('../db/models/user');
const Song = {};
Song.CreateSong = async(data) => {
    //console.log(data);
    var day = new Date();
    var currentTime = `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}`;
    var user = await UserModel.findOne({social: data.user.social, socialID: data.user.userSocialID});
    await SongModel.create({
        name: data.name, 
        artistID: data.artistID,
        url: data.url,
        userID: user._id,
        totalView: 0,
        timeIsAdded: currentTime
    });
}
Song.UpdateSong = async(data) => {
    var day = new Date();
    var currentTime = `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}`;
    //var user = await UserModel.findOne({social: data.user.social, socialID: data.user.userSocialID});
    var song = await SongModel.findById(data.id);
    song.name = data.name;
    song.artistID = data.artistID;
    song.url = data.url;
    song.timeIsAdded = currentTime;
    song.totalView = 0;
    await song.save();
}
Song.DeleteSong = async(id) => {
    await SongModel.deleteOne({_id: id});
}
Song.UpdateTotalViewOfTheSong = async(id) => {
    var song = await SongModel.findById(id);
    await SongModel.updateOne({ _id: id }, { $set: { totalView: song.totalView + 1 }});
}
Song.GetSongFromID = (id) => {
    var result = SongModel.findById(id);
    return result;
}
Song.GetAllSong = () => {
    var result = SongModel.find().sort({totalView: -1});
    return result;
};

module.exports = Song;
