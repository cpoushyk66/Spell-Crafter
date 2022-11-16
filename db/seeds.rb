# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
#Components

hematite = Component.create(name: "Hematite", planet: "Mars", element: "Earth", notes: "One of the most powerful grounding stones in the mineral kingdom, intended to root your body and mind back to Earth.")
clove = Component.create(name: "Clove", gender: "Masculine", planet: "Jupiter", element: "Fire, Air", parts_used: "Flower Buds", notes: "Cloves are an iconic staple in the kitchen but they also have a rich history of use in protection, luck, and love spells.")
salt = Component.create(name: "Salt", planet: "Venus", element: "Earth", notes: "Test")



u1 = User.create(username: "cpoushyk", password: "test", image: "https://pbs.twimg.com/profile_images/1550536084194578436/_zJmJ1RV_400x400.jpg", email: "charlotte.poushyk@gmail.com", bio: "Baby witch starting out here.", birthday: "2000-06-26")

spell_book1 = SpellBook.create(user_id: u1.id, name: "Starter Spell Book", description: "A fresh spell book to get started.")

spell1 = Spell.create(name: "Protection Spell", spell_book_id: spell_book1.id, description: "Carry for extra protection.", instructions: "Empower the components for your protection.
Place the cloves in the bottle one by one, visualizing the bottle filling with green light. 
Add the hematite, visualizing the silver color of the stone weaving and swirling through the green light.
Add the salt and visualize the silver and green light growing brighter.
Carefully pour the olive oil into the bottle over the contents and fill it almost to the brim.
Cap the bottle tightly. Shake it gently to further blend the ingredients.
Hold the bottle between your hands and channel the idea of protection into it.
Carry the bottle with you in a pocket when you need protection.")
spell_1_clove_ingredient = Ingredient.create(spell_id: spell1.id, component_id: clove.id, quantity: "3 Cloves", purpose: "Uses the latent protection qualities of the cloves.", instructions: "To be placed one by one in jar as green light is visualized filling the jar.")
spell_1_hematite_ingredient = Ingredient.create(spell_id: spell1.id, component_id: hematite.id, quantity: "Small stone", purpose: "Helps the spell ground you to yourself.", instructions: "Placed in jar and visualized weaving and swirling with green light.")
spell_1_salt_ingredient = Ingredient.create(spell_id: spell1.id, component_id: salt.id, quantity: "Pinch", purpose: "Helps the spell ground you to yourself.", instructions: "Added to jar while visualizing green light growing brighter.")



