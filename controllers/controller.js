router.get("/", function(req, res) {
    articles.findAll({}).then(function(data){
        var hbsObject = {
            articles: data};
          console.log(hbsObject);
          res.render("index", hbsObject); 
 
//   });

// //   put in server
// // make sure keys match 
// articleslinksz

// module.exports = function(app) {
//     // Load index page
//     app.get("/", function(req, res) {
//       db.Example.findAll({}).then(function(dbExamples) {
//         res.render("index", {
//           msg: "Welcome!",
//           examples: dbExamples
//         });
//       });
//     });
  
//     router.get("/", function(req, res) {
//         cat.all(function(data) {
//           var hbsObject = {
//             cats: data
//           };
//           console.log(hbsObject);
//           res.render("index", hbsObject);
//         });
//       });