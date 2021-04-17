const newsCtrl = {};
const News = require ('../models/news')

//metodo get
newsCtrl.getNews = async (req, res) => {
    const news = await News.find();
    res.json(news);
};

//metodo noticia individual GET
newsCtrl.createNews = async (req, res) => {
    const {title, author, cathegory, content, date} = req.body; //recibe los datos para crear una news
    const newNews = new News({
        title: title,
        author: author,
        cathegory: cathegory,
        content: content,
        date: date
    })
    await newNews.save();
    res.json({message:'Noticia guardada'});
};




//metodo update
newsCtrl.updateNews = async (req, res) => {
    const {title, author, cathegory, content, date} = req.body;
    await News.findOneAndUpdate({_id: req.params.id}, {
        title,
        author,
        cathegory,
        content,
        date
    });
    res.json({message:'Noticia actualizada'})
}

//metodo delete
newsCtrl.deleteNews = async (req, res) => {
    await News.findByIdAndDelete(req.params.id);
    res.json({message: 'Noticia eliminada'})
}

module.exports = newsCtrl