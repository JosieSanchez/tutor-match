module.exports = function(sequelize, DataTypes) {
  var Tutor = sequelize.define("Tutor", {
    // Giving the Tutor model a name of type STRING
    tutor_name: DataTypes.STRING,
    subject: DataTypes.STRING,
    dates_avail:DataTypes.DATE,
    time_avail: DataTypes.TIME,
    location: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    createAt: DataTypes.TIMESTAMP
  },
  
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          // When an Author is deleted, also delete any associated Posts
          Tutor.belongsTo(models.Student, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Tutor;
};

