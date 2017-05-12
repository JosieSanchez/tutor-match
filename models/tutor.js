module.exports = function(sequelize, DataTypes) {
  var Tutor = sequelize.define("Tutor", {
    // Giving the Author model a name of type STRING
    tutor_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
     subject: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
     dates_avail: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
     time_avail: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
   
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