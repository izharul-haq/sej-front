# sej-front

Frontend-side of SEJ techincal test. For the backend-side, click [here](https://github.com/izharul-haq/sej-back).

## Requirements

1. [Node.JS](https://nodejs.org/en/)

2. [yarn](https://yarnpkg.com/) package manager

## How to Install

Install dependencies with

    yarn install

## How to Configure

1. Copy `.env.example` file and rename it with `.env`.

2. Change `NEXT_PUBLIC_API_URL` value with the correct URL.

## How to Run

0. Make sure all dependencies already installed.

1. Run application in:

   - Development mode with

         yarn dev

   - Production mode with

         yarn build-production && yarn start

2. Open `localhost:8080` on your browser

## How to Use

1. Make sure [backend-side](https://github.com/izharul-haq/sej-back) of this web application is running.

   (**NOTE**: Backend in the given link is only a repeater to bypass CORS. If you can configure the real server, please follow [How to Configure](#how-to-configure))

2. Run this application (follow [How to Run](#how-to-run)).

## Contributors

[![contributors](https://contrib.rocks/image?repo=izharul-haq/sej-front)](https://github.com/izharul-haq/sej-front/graphs/contributors)
