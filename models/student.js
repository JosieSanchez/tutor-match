module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {

    student_name: DataTypes.STRING,
    subject: DataTypes.STRING,
    location: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: DataTypes.TIMESTAMP

  },
  //   title: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: {
  //       len: [1]
  //     }
  //   },
  //   body: {
  //     type: DataTypes.TEXT,
  //     allowNull: false,
  //     len: [1]
  //   }
  // },
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          Student.hasMany(models.Tutor, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Student;
};
