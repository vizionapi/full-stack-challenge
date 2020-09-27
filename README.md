# Vizion Engineering Take-Home Exercise

👋 Hi there! Welcome to the Vizion take-home coding exercise!

This full-stack exercise involves building a form component in React that makes a request to the Node.js/Express backend. This should take no more than 4 hours to implement the feature, but we'll emphasize here that there's clock ticking on your implementation. Feel free to do this at your own pace, in your own time. If you decide to break it up over multiple coding sessions, that's fine too.

Also keep in mind there is no upper bound on the time you spend on this project, so if you'd like to use this as an opportunity to learn a new library or technology, or just make the project better in general you should definitely feel free to do so!

- [Vizion Engineering Take-Home Exercise](#vizion-engineering-take-home-exercise)
  - [Setting Up](#setting-up)
  - [Technical Notes](#technical-notes)
  - [Minimum Project Requirements](#minimum-project-requirements)
    - [Attention to Detail](#attention-to-detail)
    - [Field Validation](#field-validation)
  - [Above and Beyond!](#above-and-beyond)
    - [Bonus Feature Ideas](#bonus-feature-ideas)
  - [Submitting Your Work](#submitting-your-work)

## Setting Up

This project requires you to have Node.js installed. We recommend the [active LTS release](https://nodejs.org/en/about/releases/).

1. Start by cloning this repository. 
2. Inside the project root directory, run `npm install` to install dependencies.
3. Run `npm run seed` to seed the SQLite database with some starting data. **This command drops existing tables if they exist**. The database is located at `db.sqlite` inside the project root.
4. Run `npm start` which will start the server as well as the React client app.

**‼️ Be sure to commit your changes to the master branch ‼️**

## Technical Notes

- The server is running using [nodemon](https://nodemon.io/) which will automatically restart the app for you when a file changes.
- The client app was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started). No additional external stylesheets or CSS frameworks have been added but you're welcome to use any style solution you prefer.
- The database uses SQLite, which will store data in a file local to your repository called `db.sqlite`. The ORM [Sequelize](http://docs.sequelizejs.com/) is being used to manage data. You should only have to interact with Sequelize.
- The HTTP request library available on the client is [axios](https://github.com/axios/axios). You're more than welcome to replace this with your favorite library if you'd like.
- The server is running on port 5000 and all XHR requests from the frontend will automatically proxy to that endpoint. For instance, you can call `axios.get('/api/shipments')` and it will be proxied to `localhost:5000/api/shipments`. The first call to fetch all shipments is implemented for you in `api.js`.

## Minimum Project Requirements

Below is a list of user stories outlining the project's acceptance criteria.

1. I can click a button/link either above or below the list of shipments that says 'Create Shipment'.

1. Clicking the 'Create Shipment' button displays a form that allows a user to fill out all of my shipment information according to the data model (see `backend/model.js`).

1. Filling out the form will create a new shipment in the database, the UI will show the refreshed list and that list persists on page reload.

1. I can see shipment list items for all of the new shipments I've created.

**Sample input values for the form are available in `sample-inputs.json`.**

### Attention to Detail
As you're working through the exercise and implementing your solutions, be thinking about some of the smaller things: How might you handle errors when a database lookup fails? Maybe some client or server side [validation](#field-validation) would be useful? There's always an opportunity to build a better user experience that keeps them informed.

### Field Validation
  - Learn more about validating container IDs here: [https://www.bic-code.org/identification-number/](https://www.bic-code.org/identification-number/)
  - Learn more about [carrier SCACs (Standard Carrier Alpha Code)](https://en.wikipedia.org/wiki/Standard_Carrier_Alpha_Code#:~:text=The%20Standard%20Carrier%20Alpha%20Code%20(SCAC)%20is%20a%20privately%20controlled,companies%20computerize%20data%20and%20records).

## Above and Beyond!

Given the time expectations of this exercise, we don't expect you to go all out, but if you find yourself with extra time, any extra credit item(s) that showcase your unique strengths would be awesome! 🙌

### Bonus Feature Ideas
- Write tests! (Frontend or Backend). We tend to use [Jest](https://jestjs.io/en/).
- Each shipment has an `isActive` flag. Add a button to each active shipment in the UI and write a backend endpoint that allows the user to mark shipments as inactive.
- Make the shipment list able to be filtered by active status (active vs. inactive shipments)
- Toast notifications in the UI on successful submission of shipments
- Allow shipment list items to be reordered in the UI by making them draggable
- Anything else you can think of!

## Submitting Your Work

When you have finished the exercise, please create a bundle of your work by running `npm run bundle` in the project root.

This will create a bundle file called `take-home-challenge.bundle` based on your local master branch. Send the file to us via email or if you received a submission link from your hiring manager, please upload it there.

Thank you and good luck! 🙏
