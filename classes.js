// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to
// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.
class Wildlife {
    constructor() {
      this.lifespan = 0;
      this.prey_migration = false;
      this.carnivore = ["lion", "leopard", "jaguar", "hyena"];
      this.omnivore = ["bear", "raccoon"];
      this.herbivore = ["sheep", "goat", "cow", "giraffe", "gazelle"];
      this.prey = [];
      this.predator = [];
      this.predator_migration = true;
    }
    
    predators_prey(animal_name) {
      if (this.carnivore.includes(animal_name)) {
        this.predator.push(animal_name);
        return `${animal_name} is a predator.`;
      } else {
        this.prey.push(animal_name);
        return `${animal_name} is a prey.`;
      }
    }
    
    animal_lifespan(animal_name) {
      if (this.carnivore.includes(animal_name)) {
        this.lifespan = "0-15";
      } else if (this.omnivore.includes(animal_name)) {
        this.lifespan = "0-25";
      } else if (this.herbivore.includes(animal_name)) {
        this.lifespan = "0-30";
      } else {
        return `${animal_name} is not found.`;
      }
      return this.lifespan;
    }
    
    track_migration(animal_name) {
      if (this.prey.includes(animal_name)) {
        this.prey_migration = true;
        
        if (this.prey_migration) {
          this.predator_migration = true;
          return `${animal_name} is migrating.`;
        } else {
          this.predator_migration = false;
        }
      } else {
        this.predator_migration = false;
        return `${animal_name} is not found.`;
      }
    }
  }
  
  let wildlife = new Wildlife();
  
  console.log(wildlife.predators_prey("lion"));
  console.log(wildlife.predators_prey("deer"));
  console.log(wildlife.animal_lifespan("tiger"));
  console.log(wildlife.track_migration("bear"));
  console.log(wildlife.track_migration("elephant"));
//   **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

class Recipes {
  constructor() {
    this.recipes = [];
    this.ingredients = {};
    this.prepTime = {};
    this.cookingMethod = {};
    this.nutritionalInfo = {};
  }

  addRecipe(nameRecipe, listOfIngredients, prepTime, cookingMethod, nutritionalInfo) {
    if (nameRecipe && listOfIngredients && prepTime && cookingMethod && nutritionalInfo) {
      this.recipes.push(nameRecipe);
      this.ingredients[nameRecipe] = listOfIngredients;
      this.prepTime[nameRecipe] = prepTime;
      this.cookingMethod[nameRecipe] = cookingMethod;
      this.nutritionalInfo[nameRecipe] = nutritionalInfo;
      return "Recipe added successfully";
    } else {
      return "Fill all needed fields";
    }
  }

  getRecipe(nameRecipe) {
    if (this.recipes.includes(nameRecipe)) {
      return `${nameRecipe}\nIngredients:\n${this.ingredients[nameRecipe]}\nPrep Time:\n${this.prepTime[nameRecipe]}\nCooking Method:\n${this.cookingMethod[nameRecipe]}\nNutritional Information:\n${this.nutritionalInfo[nameRecipe]}`;
    } else {
      return `${nameRecipe} not found`;
    }
  }
}

const recipeBook = new Recipes();

console.log(recipeBook.addRecipe(
  "Chocolate Cake",
  ["flour", "sugar", "cocoa powder", "baking powder", "eggs", "milk", "vegetable oil", "vanilla extract"],
  "1 hour",
  "Baking",
  "Calories: 350 per serving"
));

console.log(recipeBook.addRecipe(
  "Spaghetti Carbonara",
  ["spaghetti", "bacon", "eggs", "Parmesan cheese", "black pepper", "salt"],
  "30 minutes",
  "Boiling, frying",
  "Calories: 450 per serving"
));


console.log(recipeBook.getRecipe("Chocolate Cake"));
console.log(recipeBook.getRecipe("Spaghetti Carbonara"));
console.log(recipeBook.getRecipe("Pancakes"));

// **African Music Festival:** You're in charge of organizing a Pan-African music
//  festival. Many artists from different countries, each with their own musical style
//  and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.
    
class MusicFestival {
  constructor() {
    this.artists = [];
    this.genre = ['hiphop', 'reggae', 'R&B', 'acoustic'];
    this.instruments = [];
    this.lineUp = [];
  }
}

class Stage extends MusicFestival {
  constructor() {
    super();
    this.lights = 'white';
    this.instrument = ['Drum', 'microphone'];
  }

  addToLineUp(musicType) {
    if (this.genre.includes(musicType)) {
      this.lineUp.push(musicType);
    } else {
      return 'This music type is not available';
    }
  }

  stageManagement() {
    if (this.genre == 'hip hop') {
      this.lights = 'Blue lights';
      return this.lights;
    } else if (this.genre == 'reggae') {
      this.lights = 'Green lights';
      return this.lights;
    } else if (this.genre == 'R&B') {
      this.lights = 'Bright lights';
      return this.lights;
    } else {
      return this.lights;
    }
  }

  instrumentAssign() {
    if (this.genre == 'hiphop') {
      this.instrument.push('bass');
      return this.instrument;
    } else if (this.genre == 'R&B') {
      this.instrument.push('saxophone');
      return this.instrument;
    } else if (this.genre == 'reggae') {
      this.instrument.push('lead');
      return this.instrument;
    } else {
      return this.instrument;
    }
  }
}

const festival = new MusicFestival();
const stage = new Stage();

stage.addToLineUp('hiphop');
stage.addToLineUp('reggae');
console.log(stage.lineUp);
console.log(stage.stageManagement());
console.log(stage.instrumentAssign());

// #**Ancestral Stories:** In many African cultures, the art of storytelling is passed
//  down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.
class Story {
  constructor(title, genre, length, moralLessons, groupAge, language) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.moralLessons = moralLessons;
    this.groupAge = groupAge;
    this.language = language;
  }

  translate(expectedLanguage) {
    this.expectedLanguage = expectedLanguage;
    if (this.language !== expectedLanguage) {
      console.log(`Translate "${this.title}" into ${this.expectedLanguage}`);
    } else {
      console.log(`The story "${this.title}" is already in ${this.expectedLanguage}`);
    }
  }
}

const story = new Story("Born a crime", "setbook", "1hr", "respecting the elders", 18, "Swahili");
story.translate("English");

class StoryTeller extends Story {
  constructor(title, genre, length, moralLessons, groupAge, language, name, nationality, storytellerAge) {
    super(title, genre, length, moralLessons, groupAge, language);
    this.storytellerAge = storytellerAge;
    this.name = name;
    this.nationality = nationality;
  }

  StoryTellerDetails() {
    console.log(`${this.title} was written by ${this.name} from ${this.nationality} and they are ${this.storytellerAge} years old.`);
  }
}

const storyTeller = new StoryTeller(
  "Decolonize mind",
  "trickster",
  "1hr",
  "being creative",
  21,
  "English",
  "Ngugi wa Thiong'o",
  "Kenyan",
  56
);
storyTeller.StoryTellerDetails();

// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values
class Product{
  constructor(name,price,quantity){
    this.name=name
    this.price=price
    this.quantity=quantity
     
  }
  calculateTotalValue(){
    let totalValue = 0
    if(this.name && this.price && this.quantity){
      totalValue = this.price * this.quantity
      return totalValue
    }
    else {
      return null
    }
  }
}
const product1 = new Product("Apples", 0.5, 10);
const product2 = new Product("Bananas", 0.3, 15);
const product3 = new Product("Oranges", 0.4, 8);


console.log(`Total value of ${product1.name}: $${product1.calculateTotalValue()}`);
console.log(`Total value of ${product2.name}: $${product2.calculateTotalValue()}`);
console.log(`Total value of ${product3.name}: $${product3.calculateTotalValue()}`);

// Implement a class called Student with attributes for name, age, and grades (a
// list of integers). Include methods to calculate the average grade, display the
// student information, and determine if the student has passed (average grade >=
// 60). Create objects for the Student class and demonstrate the usage of these
//  methods.
class Student{
  constructor( name, age, grades){
      this.name = name
      this.age = age
      this. grades = grades
      this.avg_grade = ""
      this.above_avg = {}
      this.below_avg = {}
  }
  average_grade(){
    let total = 0
    for(let i = 0 ; i <= this.grades.length ; i++){
      total += i
    }
      let average = total / this.grades.length
      this.avg_grade = average
      return average
  }
  information(name){
      if( name == this.name){
          return `${name} is ${this.age} and had a mean score of ${this.avg_grade}`}
  }   
  score(){
      if( this.avg_grade >= 60){
          this.above_avg[this.name] = this.avg_grade
          return this.above_avg
      }
  
      else{
        this.below_avg[this.name] = this.average_grade
        return this.below_avg
      }
  }
}
let student1 = new Student("Mary", 22, [22,56,80,87,98])
console.log(student1.average_grade())
console.log(student1.information("Mary"))
console.log(student1.score())

// Create a FlightBooking class that represents a flight booking system. Implement
//  methods to search for available flights based on destination and date, reserve
//  seats for customers, manage passenger information, and generate booking
//  confirmations.
class FlightBooking {
  constructor() {
    this.flights = [];
    this.bookings = {};
  }

  addFlight(flight) {
    this.flights.push(flight);
  }

  searchFlights(destination, date) {
    const availableFlights = [];
    for (const flight of this.flights) {
      if (
        flight.destination === destination &&
        flight.date === date &&
        flight.hasAvailableSeats()
      ) {
        availableFlights.push(flight);
      }
    }
    return availableFlights;
  }

  reserveSeat(flight, passenger) {
    if (flight.hasAvailableSeats()) {
      const seatNumber = flight.reserveSeat();
      if (!this.bookings.hasOwnProperty(flight.flightNumber)) {
        this.bookings[flight.flightNumber] = [];
      }
      this.bookings[flight.flightNumber].push({ passenger, seatNumber });
      return true;
    }
    return false;
  }

  getPassengerInfo(flightNumber) {
    if (this.bookings.hasOwnProperty(flightNumber)) {
      return this.bookings[flightNumber];
    }
    return [];
  }

  generateBookingConfirmation(flightNumber) {
    if (this.bookings.hasOwnProperty(flightNumber)) {
      const bookingInfo = this.bookings[flightNumber];
      let confirmation = "Booking Confirmation:\n";
      confirmation += `Flight Number: ${flightNumber}\n`;
      confirmation += "Passengers:\n";
      for (const { passenger, seatNumber } of bookingInfo) {
        confirmation += `- ${passenger} (Seat: ${seatNumber})\n`;
      }
      return confirmation;
    }
    return "No booking found for the provided flight number.";
  }
}

class Flight {
  constructor(flightNumber, destination, date, totalSeats) {
    this.flightNumber = flightNumber;
    this.destination = destination;
    this.date = date;
    this.totalSeats = totalSeats;
    this.availableSeats = totalSeats;
  }

  hasAvailableSeats() {
    return this.availableSeats > 0;
  }

  reserveSeat() {
    if (this.hasAvailableSeats()) {
      this.availableSeats--;
      return this.totalSeats - this.availableSeats;
    }
    return null;
  }
}


// Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.
class Book {
  constructor(title, author, copies) {
    this.title = title;
    this.author = author;
    this.copies = copies;
  }

  toString() {
    return `${this.title} by ${this.author} - ${this.copies} available`;
  }
}

class LibraryCatalog {
  constructor() {
    this.books = [];
  }

  addBook(title, author, copies) {
    const book = new Book(title, author, copies);
    this.books.push(book);
  }

  searchByTitle(title) {
    return this.books.filter(book => book.title === title);
  }

  searchByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }

  displayBookDetails() {
    this.books.forEach(book => console.log(book.toString()));
  }
}

const catalog = new LibraryCatalog();

catalog.addBook("Python Crash Course", "Eric Matthes", 5);
catalog.addBook("Clean Code", "Robert C. Martin", 3);
catalog.addBook("The Pragmatic Programmer", "Andrew Hunt and David Thomas", 2);

console.log("Search by title: Python Crash Course");
const searchResultsByTitle = catalog.searchByTitle("Python Crash Course");
searchResultsByTitle.forEach(book => console.log(book.toString()));

console.log("Search by author: Robert C. Martin");
const searchResultsByAuthor = catalog.searchByAuthor("Robert C. Martin");
searchResultsByAuthor.forEach(book => console.log(book.toString()));

console.log("All books:");
catalog.displayBookDetails();
