var models = require('./models');
var Topic = models.Topic;

module.exports = function() {
    console.log('Initialize tags');

    Topic.remove({'hide':true}).exec();

    var topic = new Topic(); topic.in = '华为'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '三星'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '爱立信'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '趋势'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '润和'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '文思海辉'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '诚迈'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '中软'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '网易'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '欧唯特'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '中兴'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '道富'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '阿里巴巴'; topic.hide = true; topic.save();
    topic = new Topic(); topic.in = '恒天'; topic.hide = true; topic.save();

    topic = new Topic(); topic.on = '技术'; topic.hide = true; topic.save();
    topic = new Topic(); topic.on = '聚餐'; topic.hide = true; topic.save();
    topic = new Topic(); topic.on = '电影'; topic.hide = true; topic.save();
    topic = new Topic(); topic.on = '女神'; topic.hide = true; topic.save();
    topic = new Topic(); topic.on = '旅游'; topic.hide = true; topic.save();
    topic = new Topic(); topic.on = '二手'; topic.hide = true; topic.save();
    topic = new Topic(); topic.on = '合租'; topic.hide = true; topic.save();
    topic = new Topic(); topic.on = '搭档'; topic.hide = true; topic.save();
}