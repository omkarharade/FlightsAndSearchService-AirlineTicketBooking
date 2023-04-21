# Welcome to Flights service

## project Setup

- clone the project on your local
- Execute `npm install` on the same path as your root directory of the downloaded project
- create a `.env` file in the root directory and add the following environment variable
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

...
{
"development": {
"username": <DB_LOGIN_NAME >,
"password": <DB_PASSWORD>,
"database": "Flights_Search_DB_DEV",
"host": "127.0.0.1",
"dialect": "mysql"
}

}

...
