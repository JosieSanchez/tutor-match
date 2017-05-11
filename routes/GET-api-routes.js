var db = require("../models");

module.exports = function(app) {
  app.get("/api/tutors", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Tutor.findAll({
      include: [db.Post]
    }).then(function(dbTutor) {
      res.json(dbTutor);
    });
  });

  app.get("/api/tutors/:subject", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Tutor.findOne({
      where: {
        subject: req.params.subject
      },
      include: [db.Post]
    }).then(function(dbTutor) {
      res.json(dbTutor);
    });
  });

  app.post("/api/tutors", function(req, res) {
    db.Tutor.create(req.body).then(function(dbTutor) {
      res.json(dbTutor);
    });
  });

  app.delete("/api/tutors/:subject", function(req, res) {
    db.Tutor.destroy({
      where: {
        subject: req.params.subject
      }
    }).then(function(dbTutor) {
      res.json(dbTutor);
    });
  });

};
