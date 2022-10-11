# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding users..."
wendy = User.create(name: "wenday", email: "wyou130@gmail.com", password: "123", location: "Hell's Kitchen, Manhattan, NY")
ethan = User.create(name: "ebb", email: "ebb0202@aol.com", password: "456", location: "Hell's Kitchen, Manhattan, NY")

puts "Seeding carts..."
friends = Cart.create(name: "Friends", street: "E 77th St", avenue: "2nd Ave", landmarks: "TD Bank", accepts_card: false, approximate_hours: "10AM to 2AM", chicken_over_rice: 9, combo_over_rice: 9)
adams = Cart.create(name: "Adam's", street: "E 83rd St", avenue: "2nd Ave", landmarks: "Subway station: 86th St Q train", accepts_card: false, approximate_hours: "10AM to 12AM", chicken_over_rice: 9, combo_over_rice: 9)
midos = Cart.create(name: "Mido's", street: "W 58th St", avenue: "9th Ave", landmarks: "Amore Pizzeria", accepts_card: false, approximate_hours: "11AM to 2AM", chicken_over_rice: 9, combo_over_rice: 9)

puts "Seeding reviews..."
r1 = Review.create(date_visited: "2019-06-10", rating: 5, review: "Best halal in the city", hot_sauce_spice: 5, user_id: ethan.id, cart_id: friends.id)
r2 = Review.create(date_visited: "2020-03-05", rating: 3, review: "What you'd expect for right next to the subway station", hot_sauce_spice: 3, user_id: wendy.id, cart_id: adams.id)
r3 =  Review.create(date_visited: "2021-06-01", rating: 5, review: "Most unique platter I've ever had", hot_sauce_spice: 3, user_id: ethan.id, cart_id: midos.id)
r4 = Review.create(date_visited: "2021-06-01", rating: 4, review: "Good if you like briney", hot_sauce_spice: 4, user_id: wendy.id, cart_id: midos.id)

puts "Seeding comments..."
Comment.create(comment: "AGREED 10000%", review_id: r1.id, user_id: wendy.id)
Comment.create(comment: "Almost as good as Friends", review_id: r4.id, user_id: ethan.id)
Comment.create(comment: "Had a lot of platters?", review_id: r3.id, user_id: wendy.id)

puts "Seeding favorites..."
Favorite.create(user_id: wendy.id, cart_id: friends.id)
Favorite.create(user_id: ethan.id, cart_id: friends.id)
Favorite.create(user_id: ethan.id, cart_id: midos.id)

puts "Done!"