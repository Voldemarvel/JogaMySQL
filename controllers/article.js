// import database connection
const con = require('../utils/db')

// show all articles - index page
const getAllArtticles = (req, res) => {
    let query = 'SELECT * FROM article';
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        res.render('index', {
            articles: articles
        })
    })
}

// show article by this slug
const getArticleBySlug = (req, res) => {
    let query = `SELECT 
                    article.name AS name, 
                    article.published AS published, 
                    article.image AS image,
                    article.body AS body,
                    article.author_id AS author_id, 
                    author.name AS author 
                    FROM article INNER JOIN author ON article.author_id=author.id 
                    WHERE slug="${req.params.slug}"`;
    let article
    con.query(query, (err, result) => {
        if (err) throw err;
        article = result
        res.render('article', {
            article: article
        })
    })
}

// author page
const getAuthorPage = (req, res) => {
    let query = `SELECT 
                    article.name AS name, 
                    article.image AS image, 
                    article.slug AS slug, 
                    article.author_id AS author_id, 
                    author.name AS author 
                    FROM article INNER JOIN author ON article.author_id=author.id 
                    WHERE author.id="${req.params.id}"`;
    let articles = []
    let name
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        name = result[0]
        res.render('author', {
            articles: articles,
            name: name
        })
    })
}


// export controller functions
module.exports = {
    getAllArtticles,
    getArticleBySlug,
    getAuthorPage
}