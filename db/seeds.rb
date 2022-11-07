# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

u1 = User.create(username: "cpoushyk", password: "test", image: "https://pbs.twimg.com/profile_images/1550536084194578436/_zJmJ1RV_400x400.jpg", email: "charlotte.poushyk@gmail.com", bio: "Baby witch starting out here.", birthday: "2000-06-26")

spell_book1 = SpellBook.create(user_id: u1.id, name: "Starter Spell Book", description: "A fresh spell book to get started.")

spell1 = Spell.create(name: "Protection Spell", spell_book_id: spell_book1.id, description: "Carry for extra protection.")




#Components

hematite = Component.create(planet: "Mars", element: "Earth", notes: "One of the most powerful grounding stones in the mineral kingdom, intended to root your body and mind back to Earth.")
