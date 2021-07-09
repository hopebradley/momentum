# MOMENTUM

## Description

Momentum is an app for logging workouts and sharing them with others.
<!-- 
## Requirements

- Ruby 2.7.3
- NodeJS (v14 or higher), and npm
- Postgresql -->

## Installation

After forking and cloning this repository, run:

### `bundle install`
### `rails db:migrate`
### `npm install --prefix client`

Seeding the database is optional. If you would like to see example users and workouts upon starting the app, run:

### `rails db:seed`

If you skip this step, you can sign up users and create workouts of your choosing to see the app in action.

## Running the App

To start the backend on [https://localhost:3000], run:
### `rails s`

To start the frontend on [https://localhost:4000], run:
### `npm start --prefix client`

Running 
### `rails start` 
will run the frontend and backend together with one command.

## Use

When you start the app, you will be brought to a login page. On your first time opening Momentum you won't have an account, so click the button to sign up instead. Once you're signed in, you can go to the community page to view others' workouts (if you didn't seed the database, this will be blank until you manually create more users and workouts). To log your own workout, click the 'log a workout' link in the navigation bar and fill out the form with the information you want. When you go to your profile, you can see your user information along with any workouts you have logged. Workouts you've created can be edited and deleted. If you want to delete your account, click the 'delete account' button and your account along with all your workouts will be deleted from the database.

## Contact Me:

Hope Bradley
<br>
Email: hope.e.bradley@gmail.com
<br>
LinkedIn: https://www.linkedin.com/in/hopebradl3y/
<br>
Blog: <a href="https://hopebradley.com">hopebradley.com</a



