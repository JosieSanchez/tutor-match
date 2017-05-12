module.exports = function(sequelize, DataTypes) {
var Student = sequelize.define("Student", {
student_name: {
type: DataTypes.STRING,
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
allowNull: true,
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
},

},
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