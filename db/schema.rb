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

ActiveRecord::Schema.define(version: 2021_08_12_044614) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "alerts", force: :cascade do |t|
    t.string "contents"
    t.string "job_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "sender_id"
    t.integer "receiver_id"
    t.string "recipient_type"
  end

  create_table "caregivers", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.string "bio"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "status"
    t.string "phone_number"
  end

  create_table "employers", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.string "bio"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "status"
    t.string "phone_number"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.string "category"
    t.string "salary"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "caregiver_id"
    t.integer "employer_id"
    t.string "salary_type"
    t.string "date"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "name"
    t.string "activity_level"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "workouts", force: :cascade do |t|
    t.string "title"
    t.string "activity"
    t.string "minutes"
    t.string "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
