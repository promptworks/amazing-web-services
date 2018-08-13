# Amazing Web Services
## A PromptWorks mock app

We are building a (fictional) new cloud infrastructure service and calling it Amazing Web Services. With it, users can provision virtual machines to use as web servers.

Think Digital Ocean, except slower.

The back-end has already been implemented and your job is to build (part of) a user interface that allows users to understand our offerings and spin up new servers with ease.

## Start building...

You must have [Git](https://git-scm.com/) and [Yarn](https://yarnpkg.com/en/) installed on your computer.

Clone this repository:
`git clone git@github.com:promptworks/amazing-web-services.git`

Install dependencies:
`yarn install`

Compile and run the app using [Parcel](https://parceljs.org/):
`yarn start`

## The Amazing Web Services API

We've already set up an API call in the app, which fetches all the relevant data you'll need to build the pricing configuration view. You can find the `fetchPrices` method in `src/api.js`. Please note, this is an asynchronous method that returns a Promise, so you'll have to resolve it as such.
