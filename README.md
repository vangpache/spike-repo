# Spikes Repo
This repository is a collection of spikes I've created in preparation for projects and to explore new tools and technology.

# Built With
- Javascript
- React
- Node.js
- Express
- Redux/Saga
- Material UI
- Moment.js
- a full list of dependencies can be found in `package.json`

# Getting Started
These instructions will get you a copy of the project up and running on your local machine.

## Prerequisites
Before you get started, be sure to have the following software installed on your computer:
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [PostrgeSQL](https://www.postgresql.org/)
- HomeBrew or equivalent
- Create a free [Good Reads](https://www.goodreads.com/api) account and API_KEY
- Create a free [Cloudinary](https://cloudinary.com)

## Spiked Projects:
- [Good Reads API](https://www.goodreads.com/api) to search database for book information
- [Cloudinary](https://cloudinary.com) to store image uploads on the cloud
- [Moment.js](https://momentjs.com) to format dates and time
- [SweetAlert2-React](https://www.npmjs.com/package/sweetalert2-react)

## Installing
1. Download this project.
2. `npm install`
3. Create a `.env` file at the root of the project and paste this line into the file followed by your **Good Reads API KEY**:
    ```
    API_KEY=
    ```
4. In the same `.env` file, on a new line type the following lines followed by your **Cloudinary keys**:
    ```
    CLOUD_NAME=
    APIKEY=
    API_SECRET=
    ```
5. `npm run client`
6. `npm run server`
7. Navigate to `localhost:3000`