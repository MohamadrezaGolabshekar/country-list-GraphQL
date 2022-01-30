## Live Demo:
[Country list GraphQL demo](https://country-list-reza.herokuapp.com)

---
## Tech

country list app uses a number of open source projects to work properly:

- React 
- GraphQL
- Node.js
- Redis
---
## Installation

Install the dependencies and devDependencies and start the server.

#### Backend
`NOTE`: you need redis to server work properly so before run server please run `redis-server` in the terminal.

```sh
cd server
npm i
npm start
```

#### Frontend
```sh
cd client
npm i
npm start
```
---
## How Backend works?

* There is only one hard coded test user (username is testUser) and with /api/login route I send a JWT token with that user to client. the response will set automatically in client cookie and the cookie will be valid for 24min, and I save it in `redis` too for check rate limit

* There is a /api/check-login route to verify user token and update it in cookie with new 24min validation date

* There is a check login middleware to verify user token from cookie in every GraphQL requests

* There is a check rate limit middleware that I check it before every GraphQL request and get data from `redis` and update count and time in it (user can only send 30 requests per minute for GraphQL routes)

* Because there is some limitation with get currency API (fixer) so I get the rates one time with server run and I added a cron job function that updates the currencies every 8 hours and I put it in `redis` so our GraphQL api for currency will send data from redis (redis will be updated every 8 hours)

---
## How Frontend works?

* To work with app we need valid token from /api/login API in our cookie

* with every refresh I send request to /api/check-login to update the token

---

> The app is hosted by Heroku [https://country-list-reza.herokuapp.com](https://country-list-reza.herokuapp.com)

`Thank you for checking this :) `