import express  from "express";
export const router = express.Router();

router.get("/template", (req, res) => {
  res.render("template", {});
} );

router.get('/html', function(req, res, next){
  res.sendfile('./src/static/html.html');
});
