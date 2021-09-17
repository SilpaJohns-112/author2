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


//const findPeopleByName = (personName, done) => {
  var findPeopleByName = function(personName, done) {
    Person.find({name: personName}, function (err, personFound) {
      if (err) return console.log(err);
      done(null, personFound);
    });
  };

  

//const findOneByFood = (food, done) => {
  var findOneByFood = function(food, done) {
    Person.findOne({favoriteFoods: food}, function (err, data) {
      if (err) return console.log(err);
      done(null, data);
    });
  };

  


const findPersonById = (personId, done) => {
    Person.findById(personId, function (err, data) {
      if (err) return console.log(err);
      done(null, data);
    });
  };

  


const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, person) => {
    if(err) return console.log(err); 

  person.favoriteFoods.push(foodToAdd);
  person.save((err, updatedPerson) => {
    if(err) return console.log(err);
    done(null, updatedPerson)
  })
})
};

  


const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
    if(err) return console.log(err);
    done(null, updatedDoc);
  })
};


  


const removeById = (personId, done) => {
    Person.findByIdAndRemove(
      personId,
      (err, removedDoc) => {
        if(err) return console.log(err);
        done(null, removedDoc);
      }
    ); 
  };




const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, response) => {
    if(err) return console.log(err);
    done(null, response);
  })
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
