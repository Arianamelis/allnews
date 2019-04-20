router.get("/", function(req, res) {
    article.all(function(data) {
      var hbsObject = {
        articles: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

//   put in server
// make sure keys match 
articleslinksz