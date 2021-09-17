require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

var Schema=mongoose.Schema;
var personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

var  Person = mongoose.model("Person", personSchema);
 var useful=new Person({
  name: "Useful",
  age:24,
  favoriteFoods:["chappathi","appam"]
});

var Person = mongoose.model('Person', personSchema);




const createAndSavePerson = function(done)  {
  var silpaJohns = new Person({name: "Silpa Johns", age: 23, favoriteFoods: ["noodles", "cake", "shake"]});

  silpaJohns.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
  //done(null /*, data*/);
};

const arrayOfPeople = [
  {name: "Christeena", age: 24, favoriteFoods: ["chappati"]},
  {name: "Silpa", age: 23, favoriteFoods: ["shake"]},
  {name: "Philomina", age: 22, favoriteFoods: ["cake"]}
];


const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
      if (err) return console.log(err);
      done(null, people);
    });
  };

  

  //done(null /*, data*/);


const findPeopleByName = function(personName, done)  {
    Person.find({name: personName}, function (err, personFound) {
      if (err) return console.log(err);
      done(null, personFound);
    });
  };

  //done(null /*, data*/);


const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
