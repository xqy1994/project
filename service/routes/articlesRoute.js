const Koa = require('koa');
const app = new Koa();
// 引入koa-router并对其实例化
const Router = require('koa-router');
//路由实例化，增加路由前缀
const router = new Router({prefix:'/article'});
const article_controller = require('../controllers/articles.js');

//1-发布文章 2-获取文章列表 3-根据文章id获取文章详情
router.post('/add',article_controller.publishArticle)
      .get('/list',article_controller.articlelist)
      .get('/list/:id',article_controller.getArticleById)
      .get('/type',article_controller.getArticleType)
      .post('/addType',article_controller.addArticleType)

module.exports = router;
