var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var models = require('./models');
var Tag = models.Tag;
var TopicTag = models.TopicTag;

module.exports = function() {
    console.log('Do some bootstrap jobs');
//    Tag.remove().exec();
//    var tag = new Tag();
//    tag.name = 'HuaWei';
//    tag.save();
//    tag = new Tag();
//    tag.name = 'Hoperun';
//    tag.save();

//    TopicTag.remove().exec();
//    var topicTag = new TopicTag();
//    topicTag.topic_id = mongoose.Types.ObjectId('5289f94f0e2bbe0816000003');
//    topicTag.tag_id = mongoose.Types.ObjectId("528b2a090fa91a5022000001");
//    topicTag.save();
//    topicTag = new TopicTag();
//    topicTag.topic_id = mongoose.Types.ObjectId('528b163e8559a9ac26000010');
//    topicTag.tag_id = mongoose.Types.ObjectId('528b2a090fa91a5022000002');
//    topicTag.save();
}