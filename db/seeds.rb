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
justin = User.create(name: "sustin", email: "susgancala@gmail.com", password: "789", location: "Upper East Side, Manhattan, NY")

puts "Seeding carts..."
friends = Cart.create(name: "Friends", street: "E 77th St", avenue: "2nd Ave", landmarks: "TD Bank", accepts_card: false, approximate_hours: "10AM to 2AM", chicken_over_rice: 9, combo_over_rice: 9, latitude: 40.771833, longitude: -73.955891)
adams = Cart.create(name: "Adam's", street: "E 83rd St", avenue: "2nd Ave", landmarks: "Subway station: 86th St Q train", accepts_card: false, approximate_hours: "10AM to 12AM", chicken_over_rice: 9, combo_over_rice: 9, latitude: 40.776112, longitude: -73.952858)
midos = Cart.create(name: "Mido's", street: "W 58th St", avenue: "9th Ave", landmarks: "Amore Pizzeria", accepts_card: false, approximate_hours: "11AM to 2AM", chicken_over_rice: 9, combo_over_rice: 9, latitude: 40.768620, longitude: -73.984971)
usa = Cart.create(name: "USA Best Halal Food", street: "W 60th St", avenue: "Columbus Ave", landmarks: "Fordham University Lincoln Center", accepts_card: true, approximate_hours: "10AM to 1AM", chicken_over_rice: 9, combo_over_rice: 9, latitude: 40.770033, longitude: -73.984452)

puts "Seeding reviews..."
r1 = Review.create(date_visited: "2019-06-10", rating: 5, review: "Best halal in the city", hot_sauce_spice: 5, user_id: ethan.id, cart_id: friends.id)
r2 = Review.create(date_visited: "2020-03-05", rating: 3, review: "What you'd expect for right next to the subway station", hot_sauce_spice: 3, user_id: wendy.id, cart_id: adams.id)
r3 =  Review.create(date_visited: "2021-06-01", rating: 5, review: "Most unique platter I've ever had", hot_sauce_spice: 3, user_id: ethan.id, cart_id: midos.id)
r4 = Review.create(date_visited: "2021-06-01", rating: 4, review: "Good if you like briney", hot_sauce_spice: 4, user_id: wendy.id, cart_id: midos.id)
r5 = Review.create(date_visited: "2022-05-15", rating: 5, review: "Lucky to call this my local spot. Try subbing pita for the rice - it hits", hot_sauce_spice: 5, user_id: justin.id, cart_id: friends.id)
r6 = Review.create(date_visited: "2022-07-20", rating: 3, review: "Not worth the trek but does the job", hot_sauce_spice: 3, user_id: justin.id, cart_id: adams.id)
r7 = Review.create(date_visited: "2021-05-29", rating: 4, review: "Reliable, classic cart style. Sometimes (though rare) you find cardamom in the rice and cilantro in the salad that makes it *chef's kiss*", hot_sauce_spice: 5, user_id: ethan.id, cart_id: usa.id)
r8 = Review.create(date_visited: "2021-05-30", rating: 4, review: "As close to Friends as you can get in the neighborhood and exactly what I want when craving halal", hot_sauce_spice: 5, user_id: wendy.id, cart_id: usa.id)

puts "Seeding comments..."
Comment.create(comment: "AGREED 10000%", review_id: r1.id, user_id: wendy.id)
Comment.create(comment: "Almost as good as Friends", review_id: r4.id, user_id: ethan.id)
Comment.create(comment: "Had a lot of platters?", review_id: r3.id, user_id: wendy.id)
Comment.create(comment: "Forever indebted to you for recommending this cart", review_id: r1.id, user_id: justin.id)
Comment.create(comment: "Convenient but mediocre", review_id: r2.id, user_id: ethan.id)
Comment.create(comment: "UGH please don't remind me that I can't get Friends anymore", review_id: r8.id, user_id: ethan.id)
Comment.create(comment: "One day I'll take that crosstown and uptown bus just for Friends", review_id: r5.id, user_id: ethan.id)

puts "Seeding favorites..."
Favorite.create(user_id: wendy.id, cart_id: friends.id)
Favorite.create(user_id: ethan.id, cart_id: friends.id)
Favorite.create(user_id: ethan.id, cart_id: midos.id)
Favorite.create(user_id: justin.id, cart_id: friends.id)
Favorite.create(user_id: wendy.id, cart_id: usa.id)
Favorite.create(user_id: ethan.id, cart_id: usa.id)

puts "Done!"