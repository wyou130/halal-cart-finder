# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_10_215550) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
    t.string "name"
    t.string "street"
    t.string "avenue"
    t.string "landmarks"
    t.boolean "accepts_card"
    t.integer "chicken_over_rice"
    t.integer "combo_over_rice"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "latitude"
    t.decimal "longitude"
    t.string "image"
    t.integer "opening_hours"
    t.integer "closing_hours"
    t.string "opening_am_pm"
    t.string "closing_am_pm"
  end

  create_table "comments", force: :cascade do |t|
    t.string "comment"
    t.bigint "review_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_comments_on_review_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "cart_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cart_id"], name: "index_favorites_on_cart_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "likes_reviews", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "review_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_likes_reviews_on_review_id"
    t.index ["user_id"], name: "index_likes_reviews_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.date "date_visited"
    t.integer "rating"
    t.string "review"
    t.integer "hot_sauce_spice"
    t.bigint "user_id", null: false
    t.bigint "cart_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cart_id"], name: "index_reviews_on_cart_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "location"
    t.string "image", default: "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTExXzMuanBn.jpg"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
  end

  add_foreign_key "comments", "reviews"
  add_foreign_key "comments", "users"
  add_foreign_key "favorites", "carts"
  add_foreign_key "favorites", "users"
  add_foreign_key "likes_reviews", "reviews"
  add_foreign_key "likes_reviews", "users"
  add_foreign_key "reviews", "carts"
  add_foreign_key "reviews", "users"
end
