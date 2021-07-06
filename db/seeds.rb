# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create!(name: "john", username: "john01", activity_level: "low", password: "1111", password_confirmation: "1111");
user2 = User.create!(name: "nicky", username: "nickybikes", activity_level: "intense", password: "1111", password_confirmation: "1111");
user3 = User.create!(name: "lauren", username: "laurenthebest", activity_level: "moderate", password: "1111", password_confirmation: "1111");

user1.workouts.create!(title: "baseball with the bros", activity: "team sports", minutes: "113");

user2.workouts.create!(title: "longest ride ever!", activity: "cycling", minutes: "231");

user3.workouts.create!(title: "relaxing walk", activity: "walking", minutes: "46");


