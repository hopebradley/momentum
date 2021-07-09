# MOMENTUM

## Description

Momentum is an app for logging workouts and sharing them with others.

## Requirements

- Ruby 2.7.3
- NodeJS (v14 or higher), and npm
- Postgresql

## Installation

After forking and cloning this repository, run:

### `bundle install`
### `rails db:create`
### `npm install --prefix client`
```

## Running the App

To start the backend on [https://localhost:3000], run:
### `rails s`

To start the frontend on [https://localhost:4000], run:
### `npm start --prefix client`

Running 
### `rails start` 
will run the frontend and backend together with one command.


## Environment Setup

### Ruby

Ensure you are running the
[latest Ruby release supported by Heroku][heroku ruby]. At the time of writing,
that's `2.7.3`. You can verify with:

```sh
ruby -v
```

If you don't see `2.7.3`, you can install it and set it as the default version:

```sh
rvm install 2.7.3
rvm --default use 2.7.3
```

You should also install the latest versions of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

[heroku ruby]: https://devcenter.heroku.com/articles/ruby-support#supported-runtimes

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is less than 14, update it with:

```sh
nvm install node
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install the Heroku CLI

Follow this guide to install Heroku CLI (if you don't already have it):

- [https://devcenter.heroku.com/articles/heroku-cli#download-and-install](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

### Install Postgresql

Heroku requires that you use Postgresql for your database instead of SQLite.
Postgresql (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

To install Postgres for WSL, follow this guide:

- [https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql][postgresql wsl]

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```

[awesome readmes]: https://github.com/matiassingers/awesome-readme
[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql


