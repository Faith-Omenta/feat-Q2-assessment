# **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# down from generation to generation. Imagine you're creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.
# pseudo code
# input                  output                         process
# length                 records of oral_stories        create a class-Stories
# moral_lesson                                          Attribute-length,moral_lesson,age_group,title
# age_group                                             Methods-
# title
class Story:
    def __init__(self, name, length, moral_lesson,age_group):
        self.name = name
        self.length = length
        self.moral_lesson = moral_lesson
        self.target_age_group = age_group


class StoryTeller:
    def __init__(self, name, age):
        self.name = name
        self.age = age
       

    def story_telling(self, story):
        print(f"{self.name} is telling a story:")
        print(f"length: {story.length}")
        print(f"Moral Lesson: {story.moral_lesson}")
        print(f"Age Group: {story.age_group}")

story = Story(
    name="Romeo and Juliet",
    length="long",
    moral_lesson="Love one another",
    age_group="youths"
)



# **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# methods.
# input              output                                       process
# ingredients          recipes from different african countries     create a class-Cuisine           
# preparation_time                                                  subclasses-Moroccan_recipes,Ethiopian_recipes,
# cooking_method                                                               Nigerian_recipes
# nutritonal_information                                            attributes- ingredients
#                                                                   methods 

class Cuisine:
    def __init__(self, ingredients, preparation_time, cooking_method, nutritional_information):
        self.ingredients=ingredients  
        self.preparation_time=preparation_time
        self.cooking_method=cooking_method
        self.nutritional_information=nutritional_information  

class  Moroccan_recipe:
    def __init__(self,name,method,nutrition_info):
        self.name=name
        self.method=method
        self.nutritional_info=nutrition_info

    def ingredient_information(self,recipe):
        print(f"{self.name} is cooked in Githeri")
        print(f"It is{self.method}")
        print(f"{self.nutritional_info}")

class  Nigerian_recipe:
    def __init__(self,name,method,nutrition_info):
        self.name=name
        self.method=method
        self.nutritional_info=nutrition_info

    def ingredient(self,recipe):
        print(f"{self.name} is cooked in chicken")
        print(f"It is{self.method}")
        print(f"{self.nutritional_info}")

class  Ethiopian_recipe:
    def __init__(self,name,method,nutrition_info):
        self.name=name
        self.method=method
        self.nutritional_info=nutrition_info

    def ingredient_info(self,recipe):
        print(f"{self.name} is cooked in chapati")
        print(f"It is{self.method}")
        print(f"{self.nutritional_info}")

  



# **Wildlife Preservation:** You're a wildlife conservationist working on a
# program to track different species in a national park. Each species has its own
# characteristics and behaviors, such as its diet, typical lifespan, migration
# patterns, etc. Some species might be predators, others prey. You'll need to
# create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# these classes might relate to each other through inheritance.
class Wildlife:
    def __init__(self, name, diet, lifespan):
        self.name = name
        self.diet = diet
        self.lifespan = lifespan

    def species_information(self):
        print(f"Species: {self.name}")
        print(f"Diet: {self.diet}")
        print(f"Lifespan: {self.lifespan} years")


class Predator(Wildlife):
    def __init__(self, name, diet, lifespan, eating_style):
        super().__init__(name, diet, lifespan)
        self.eating_style = eating_style

    def display_info(self):
        super().display_info()
        print(f"Eating Style: {self.eating_style}")


class Prey(Wildlife):
    def __init__(self, name, diet, lifespan, migration_pattern):
        super().__init__(name, diet, lifespan)
        self.migration_pattern = migration_pattern

    def display_info(self):
        super().display_info()
        print(f"Migration Pattern: {self.migration_pattern}")

Cheater = Predator("Cheater", "Carnivore", 23, "Hunting group")
gazelle = Prey("Gazelle", "Herbivore", 40, "Seasonal migration")

# **African Music Festival:** You're in charge of organizing a Pan-African music
# festival. Many artists from different countries, each with their own musical style
# and instruments, are scheduled to perform. You need to write a program to
# manage the festival lineup, schedule, and stage arrangements. Think about how
# you might model the `Artist`, `Performance`, and `Stage` classes, and consider
# how you might use inheritance if there are different types of performances or
# stages.
class Festival:
    def __init__(self, title, genre, festive_date,arrangement):
        self.title = title
        self.genre = genre
        self.festive_date = festive_date
        self.arrangement=arrangement
        self.schedule_date = []
       

    
    def schedule_days(self, schedule_date):
        self.shooting_schedule.append(schedule_date)

    
# Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values.
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total_value(self):
        return self.price * self.quantity


fruit1 = Product("melon", 1.5, 10)
fruit2 = Product("kiwi", 0.5, 20)
fruit3 = Product("apple", 0.75, 15)


calc_total_value = fruit1.total_value() + fruit2.total_value() + fruit3.total_value()

print("Total value of all fruits:", calc_total_value)


# Implement a class called Student with attributes for name, age, and grades (a
# list of integers). Include methods to calculate the average grade, display the
# student information, and determine if the student has passed (average grade >=
# 60). Create objects for the Student class and demonstrate the usage of these
# methods.

class Student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades

    def calculate_average_grade(self):
        if len(self.grades) == 0:
            return 0
        else:
            total = sum(self.grades)
            return total / len(self.grades)

    def has_passed(self):
        return self.calculate_average_grade() >= 60


# Create a FlightBooking class that represents a flight booking system. Implement
# methods to search for available flights based on destination and date, reserve
# seats for customers, manage passenger information, and generate booking
# confirmations.
class Flight_booking:
    def __init__(self):
        self.flights = []

    def add_flight(self, flight):
        self.flights.append(flight)

    def get_passenger_info(self, flight):
        return flight.passenger_info


class Flight:
    def __init__(self, flight_number, destination, date, total_seats):
        self.flight_number = flight_number
        self.destination = destination
        self.date = date
        self.total_seats = total_seats
        self.available_seats = total_seats
        
    def has_available_seats(self):
        return self.available_seats > 0


flight1 = Flight("ABC123", "France", "2023-12-01", 70)
flight2 = Flight("DEF456", "German", "2023-12-02", 50)


# Create a LibraryCatalog class that handles the cataloging and management of
# books in a library. Implement methods to add new books, search for books by
# title or author, keep track of available copies, and display book details.
class Book:
    def __init__(self, title, author, copies):
        self.title = title
        self.author = author
        self.copies = copies

    def __str__(self):
        return f"Title: {self.title}Author: {self.author}Copies available: {self.copies}"


class Library_catalog:
    def __init__(self):
        self.books = []

    def add_book(self, title, author, copies=1):
        book = Book(title, author, copies)
        self.books.append(book)

    def book_details(self, book):
        print(book)

    def display_books(self):
        if not self.books:
            print("No books ")
        else:
            for book in self.books:
                print(book)
                print()  

catalog = LibraryCatalog()

catalog.add_book("The River and the source", "Ngugi", 1)
catalog.add_book("Caucasian chalk cirle", "WaThiongo", 4)
catalog.add_book("The river between", "Ngudi", 2)


