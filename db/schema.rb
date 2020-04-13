# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_13_001841) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "amenities", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.boolean "potable_water", null: false
    t.boolean "kitchen", null: false
    t.boolean "showers", null: false
    t.boolean "wifi", null: false
    t.boolean "bins", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_amenities_on_spot_id"
  end

  create_table "areas", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.integer "num_sites", null: false
    t.integer "max_guests", null: false
    t.boolean "lodging_provided", null: false
    t.string "lodging"
    t.boolean "parking", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_areas_on_spot_id"
  end

  create_table "details", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.string "checkin_time", null: false
    t.string "checkout_time", null: false
    t.string "cancellation_policy", null: false
    t.string "on_arrival", null: false
    t.integer "min_nights", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_details_on_spot_id"
  end

  create_table "essentials", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.boolean "campfires", null: false
    t.boolean "toilet", null: false
    t.boolean "pets", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_essentials_on_spot_id"
  end

  create_table "spots", force: :cascade do |t|
    t.string "name", null: false
    t.integer "host_id", null: false
    t.integer "price", null: false
    t.string "location", null: false
    t.string "country", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.string "activities", default: [], array: true
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "rating", null: false
    t.index ["host_id"], name: "index_spots_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
