# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding users..."
wendy = User.create(name: "wenday", email: "wyou130@gmail.com", password: "123", location: "Hell's Kitchen, Manhattan, NY", image: "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjIxMWJhdGNoMTAtbnVub29uLTM3LWZhc3Rmb29kXzIuanBn.jpg")
ethan = User.create(name: "ebb", email: "ebb0202@aol.com", password: "456", location: "Hell's Kitchen, Manhattan, NY")
justin = User.create(name: "sustin", email: "susgancala@gmail.com", password: "789", location: "Upper East Side, Manhattan, NY")
emilio = User.create(name: "mathmilio", email: "mathmilio@gmail.com", password: "101", location: "Astoria, Queens, NY")

puts "Seeding carts..."
friends = Cart.create(name: "Friends", street: "E 77th St", avenue: "2nd Ave", landmarks: "TD Bank", accepts_card: false, approximate_hours: "10AM to 2AM", chicken_over_rice: 8, combo_over_rice: 9, latitude: 40.771833, longitude: -73.955891, image: "../friends.jpg")
adams = Cart.create(name: "Adam's", street: "E 83rd St", avenue: "2nd Ave", landmarks: "Subway station: 86th St Q train", accepts_card: false, approximate_hours: "10AM to 12AM", chicken_over_rice: 8, combo_over_rice: 8, latitude: 40.776112, longitude: -73.952858, image: "https://10619-2.s.cdn12.com/rests/original/108_504798933.jpg")
midos = Cart.create(name: "Mido's", street: "W 58th St", avenue: "9th Ave", landmarks: "Amore Pizzeria", accepts_card: true, approximate_hours: "11AM to 2AM", chicken_over_rice: 9, combo_over_rice: 10, latitude: 40.768620, longitude: -73.984971, image: "https://fastly.4sqi.net/img/general/600x600/3016_i6qh0sDDAf0XW-vHTuCNy-8jYOg7FVtbNFkJGzNgmko.jpg")
usa = Cart.create(name: "USA Best", street: "W 60th St", avenue: "Columbus Ave", landmarks: "Fordham University Lincoln Center", accepts_card: true, approximate_hours: "10AM to 1AM", chicken_over_rice: 9, combo_over_rice: 9, latitude: 40.770033, longitude: -73.984452, image: "../USA.jpg")
mama = Cart.create(name: "Mama", street: "W 50th St", avenue: "9th Ave", landmarks: "Orange Theory", accepts_card: false, approximate_hours: "10AM to 10PM", chicken_over_rice: 8, combo_over_rice: 9, latitude: 40.763315, longitude: -73.988906, image: "../mama.jpg")
king = Cart.create(name: "King of Falafel & Shawarma", street: "31st St", avenue: "Ditmars Blvd", landmarks: "Krispy Kreme", accepts_card: false, approximate_hours: "10AM to 12AM", chicken_over_rice: 12, combo_over_rice: 13, latitude: 40.776240, longitude: -73.910998, image: "https://fastly.4sqi.net/img/general/600x600/13708620_j251vOBiNerxM3kBb2lt7Bv9a5vyrCZGWapV9qekXKk.jpg")
adel = Cart.create(name: "Adel's", street: "W 57th St", avenue: "11th Ave", landmarks: "BMW", accepts_card: false, approximate_hours: "10:30AM to 5:30PM", chicken_over_rice: 8, combo_over_rice: 9, latitude: 40.769835, longitude: -73.989958, image: "https://fastly.4sqi.net/img/general/600x600/3302881_uHXcqlhSpwYJQpQbEHhP-ndFliMyKUMRXX2ONEA-5YQ.jpg")
casbah = Cart.create(name: "The Casbah", street: "W 66th St", avenue: "Columbus Ave", landmarks: "Richard Tucker Park", accepts_card: false, approximate_hours: "10AM to 10PM", chicken_over_rice: 8, combo_over_rice: 9, latitude: 40.773743, longitude: -73.981707, image: "https://fastly.4sqi.net/img/general/600x600/3302881_uHXcqlhSpwYJQpQbEHhP-ndFliMyKUMRXX2ONEA-5YQ.jpg")

puts "Seeding reviews..."
r1 = Review.create(date_visited: "2019-06-10", rating: 5, review: "Best halal in the city", hot_sauce_spice: 5, user_id: ethan.id, cart_id: friends.id)
r2 = Review.create(date_visited: "2020-03-05", rating: 3, review: "What you'd expect for right next to the subway station", hot_sauce_spice: 3, user_id: wendy.id, cart_id: adams.id)
r3 =  Review.create(date_visited: "2021-06-01", rating: 5, review: "Most unique platter I've ever had", hot_sauce_spice: 3, user_id: ethan.id, cart_id: midos.id)
r4 = Review.create(date_visited: "2021-06-01", rating: 4, review: "Good if you like briney", hot_sauce_spice: 4, user_id: wendy.id, cart_id: midos.id)
r5 = Review.create(date_visited: "2022-05-15", rating: 5, review: "Lucky to call this my local spot. Try subbing pita for the rice - it hits", hot_sauce_spice: 5, user_id: justin.id, cart_id: friends.id)
r6 = Review.create(date_visited: "2022-07-20", rating: 3, review: "Not worth the trek but does the job", hot_sauce_spice: 3, user_id: justin.id, cart_id: adams.id)
r7 = Review.create(date_visited: "2021-05-29", rating: 4, review: "Reliable, classic cart style. Sometimes (though rare) you find cardamom in the rice and cilantro in the salad that makes it *chef's kiss*", hot_sauce_spice: 5, user_id: ethan.id, cart_id: usa.id)
r8 = Review.create(date_visited: "2021-05-30", rating: 4, review: "As close to Friends as you can get in the neighborhood and exactly what I want when craving halal", hot_sauce_spice: 5, user_id: wendy.id, cart_id: usa.id)
r9 = Review.create(date_visited: "2021-08-01", rating: 2, review: "Not bad, nothing special", hot_sauce_spice: 3, user_id: ethan.id, cart_id: mama.id)
r10 = Review.create(date_visited: "2021-08-02", rating: 3, review: "Pretty average, could use some more spices to make it stand out", hot_sauce_spice: 3, user_id: wendy.id, cart_id: mama.id)
r11 = Review.create(date_visited: "2019-06-11", rating: 5, review: "High quality platter with pickled veggies and the best tahini. Some days they give you a free falafel while waiting. Truly spectacular falafel.", hot_sauce_spice: 3, user_id: ethan.id, cart_id: king.id)
r12 = Review.create(date_visited: "2019-06-09", rating: 5, review: "Luckily right around the corner from me. I get this almost as much as I get chicken and broccoli. Love the free falafel.", hot_sauce_spice: 4, user_id: emilio.id, cart_id: king.id)
r13 = Review.create(date_visited: "2016-10-13", rating: 4, review: "Great lunch spot, consistently fresh and tasty. The meat is cut into bite-sized pieces and the salad is never wilty", hot_sauce_spice: 4, user_id: wendy.id, cart_id: casbah.id)

puts "Seeding comments..."
Comment.create(comment: "AGREED 10000%", review_id: r1.id, user_id: wendy.id)
Comment.create(comment: "Almost as good as Friends", review_id: r4.id, user_id: ethan.id)
Comment.create(comment: "Had a lot of platters?", review_id: r3.id, user_id: wendy.id)
Comment.create(comment: "Forever indebted to you for recommending this cart", review_id: r1.id, user_id: justin.id)
Comment.create(comment: "Convenient but mediocre", review_id: r2.id, user_id: ethan.id)
Comment.create(comment: "UGH please don't remind me that I can't get Friends anymore", review_id: r8.id, user_id: ethan.id)
Comment.create(comment: "One day I'll take that crosstown and uptown bus just for Friends", review_id: r5.id, user_id: ethan.id)
Comment.create(comment: "Sounds like the Adam's of Hell's Kitchen", review_id: r10.id, user_id: justin.id)
Comment.create(comment: "I can't believe I only had this for the first time last month. Been missing out.", review_id: r12.id, user_id: justin.id)
Comment.create(comment: "Comparing this to chicken and broccoli for you says everything.", review_id: r12.id, user_id: ethan.id)
Comment.create(comment: "Also conveniently near the AMC Lincoln Square. Best post-movie treat", review_id: r13.id, user_id: ethan.id)

puts "Seeding favorites..."
Favorite.create(user_id: wendy.id, cart_id: friends.id)
Favorite.create(user_id: ethan.id, cart_id: friends.id)
Favorite.create(user_id: ethan.id, cart_id: midos.id)
Favorite.create(user_id: justin.id, cart_id: friends.id)
Favorite.create(user_id: wendy.id, cart_id: usa.id)
Favorite.create(user_id: ethan.id, cart_id: usa.id)
Favorite.create(user_id: ethan.id, cart_id: king.id)
Favorite.create(user_id: emilio.id, cart_id: king.id)
Favorite.create(user_id: wendy.id, cart_id: casbah.id)

puts "Seeding likes on reviews..."
LikesReview.create(user_id: wendy.id, review_id: r1.id)
LikesReview.create(user_id: wendy.id, review_id: r5.id)
LikesReview.create(user_id: wendy.id, review_id: r6.id)
LikesReview.create(user_id: wendy.id, review_id: r7.id)
LikesReview.create(user_id: ethan.id, review_id: r2.id)
LikesReview.create(user_id: ethan.id, review_id: r4.id)
LikesReview.create(user_id: ethan.id, review_id: r5.id)
LikesReview.create(user_id: ethan.id, review_id: r10.id)
LikesReview.create(user_id: justin.id, review_id: r1.id)
LikesReview.create(user_id: justin.id, review_id: r2.id)
LikesReview.create(user_id: wendy.id, review_id: r11.id)
LikesReview.create(user_id: justin.id, review_id: r11.id)
LikesReview.create(user_id: wendy.id, review_id: r12.id)
LikesReview.create(user_id: ethan.id, review_id: r12.id)
LikesReview.create(user_id: ethan.id, review_id: r13.id)

puts "Done!"