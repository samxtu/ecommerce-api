<!-- PROJECT LOGO -->
<br />
<h1 align="center">
  <a href="https://github.com/samxtu/ecommerce-api">
    <img src="https://hackernoon.com/hn-images/1*lAR9Uh_gJ7dp23e0vhy5Hg.png" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">Ecommerce API</h3>
</h1>

<h4 align="center">E-commerce API for Talisia built using NodeJS & MongoDB</h4>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#deployed-version">Demo</a>
    </li>
    <li>
      <a href="#key-features">Key Features</a>
    </li>
    <li>
      <a href="#api-usage">API Usage</a>
    </li>
    <li>
      <a href="#deployment">Deployment</a>
    </li>
    <li>
      <a href="#build-with">Build With</a>
    </li>
    <li>
      <a href="#to-do">To Do</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li>
      <a href="#known-bugs">Known Bugs</a>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>

  </ol>
</details>

## Key Features

* Authentication
  * Login [Public]
  * SignUp [Public]
  * Logout [User]
  * Tokens [User]
* Password Management
  * Change Password [User]
  * Forgot Password [Public]
  * Reset Password  [Public]
* Email Management
  * Send Email Verification [User]
* User
  * Create New User [Admin]
  * Get All Users [Public]
  * Get User Data Using It's ID [Public]
  * Update User Details Using It's ID [User]
  * Update User Profile Image Using It's ID [User]
  * Delete My Account [User]
  * Delete User Using It's ID [Admin]
* Vendor
  * Create New Vendor [User] turned [Seller]
  * Get All Vendors [Public]
  * Get Vendor Data Using It's ID [Public]
  * Update Vendor Details Using It's ID [Vendor] or [Admin]
  * Update Vendor Profile Image Using It's ID [Vendor]
  * Delete My Account [Vendor]
  * Delete Vendor Using It's ID [Vendor] turned normal [User]
  * Activate or Deactivate Vendor [Admin]
* Cart Services
  * Add Product To Cart [User]
  * Reduce Product Quantity By One [User]
  * Increase Product Quantity By One [User]
  * Get Cart [User]
  * Delete Cart Item [User]
  * Delete Cart [User]
* Review Services
  * Create New Review [User]
  * Query All Reviews [Public]
  * Query Review Using It's ID [Public]
  * Update Review Using It's ID [User]
  * Delete Review Using It's ID [User]
* Product Services
  * Query products [Public]
  * Query Product Using It's ID [Public]
  * Create new product [Seller]
  * Update Product Details [Seller]
  * Update Product Main Image [Seller]
  * Update Product Images [Seller]
  * Delete Product Using It's ID [User]
  * Get Products Statics [Admin]
  * Top 5 Cheapest Products [Public]
  * Add Product Attribute [Seller]
  * Add Product Specification [Seller]
  * Delete Product Attribute [Seller]
  * Delete Product Specification [Seller]
* Favorite Services
  * Get Favorite Products List [User]
  * Add Product to Favorite List [User]
  * Delete Product From Favorite List [User]
  * Check If Product In Favorite List [User]
* Discount Services
  * Generate Discount Code [Admin]
  * Get Dicount Amount [User]
  * Get All Discount Codes [Admin]
  * Verify Discount Code [User]
  * Delete Discount Code [Admin]
  * Cancel Discount Code [User]
* Order Services
  * Create New Order [User]
  * Query Orders [User]
  * Query Order Using It's ID [User]
  * Cancel Order [User]
  * Update Order Status [Admin]
  * Update Order Payment Status [Admin]
* Category Services
  * Create New Category [User]
  * Create New SubCategory [User]
  * Query Categories with its SubCategories [Public]
  * Query Category Using It's ID with its SubCategories [Public]
  * Update Category Details [Admin]
  * Update Category Image [Admin]
  * Delete Category or SubCategory or Both [Admin]
* Multi-Language Support (English and Swahili for now)

## Deployment

Still thinking for a cheap option, we need it to start working on the mobile app and web version. 

## Built With

List of any major frameworks used to build the project.

* [NodeJS](https://nodejs.org/) - JS runtime environment
* [ExpressJS](https://expressjs.com/) - The NodeJS framework used
* [MongoDB](https://www.mongodb.com/) - NoSQL Database uses JSON-like documents with optional schemas
* [Mongoose](https://mongoosejs.com/) - Object Data Modeling (ODM) library for MongoDB and NodeJS
* [Argon2](https://www.npmjs.com/package/argon2) - Encryption & Decryption Algorithm
* [Cloudinary](https://cloudinary.com/) - Cloud-based service
* [Compression](https://www.npmjs.com/package/compression) - NodeJS compression middleware
* [Cors](https://www.npmjs.com/package/cors) - NodeJS package for providing a Connect/Express middleware that can be used to enable CORS with various options
* [Express Mongo Sanitize](https://www.npmjs.com/package/express-mongo-sanitize) - Express 4.x middleware which sanitizes user-supplied data to prevent MongoDB Operator Injection.
* [Slugify](https://www.npmjs.com/package/slugify) - Slugifies a string
* [Datauri](https://www.npmjs.com/package/datauri) - Create DataURI scheme easily
* [Dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from a . env file into process. env
* [Rate Limiter](https://www.npmjs.com/package/express-rate-limit) - Basic IP rate-limiting middleware for Express
* [Helmet](https://www.npmjs.com/package/helmet) - Secure Express apps by setting various HTTP headers
* [JWT](https://jwt.io/) - Compact URL-safe means of representing claims to be transferred between two parties
* [Method Override](https://www.npmjs.com/package/method-override) - Use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
* [Moment](https://momentjs.com/) - JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way
* [Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for NodeJS
* [Multer](https://www.npmjs.com/package/multer) - NodeJS middleware for handling multipart/form-data
* [Nodemailer](https://www.npmjs.com/package/nodemailer) - Easy as cake e-mail sending from your Node.js applications
* [Validator](https://www.npmjs.com/package/validator) - A library of string validators and sanitizers.
* [Winston](https://www.npmjs.com/package/winston) - A logger for just about everything.
* [XSS Clean](https://www.npmjs.com/package/xss-clean) - Middleware to sanitize user input
* [Stripe](https://www.npmjs.com/package/stripe) - The Stripe Node library provides convenient access to the Stripe API from applications written in server-side JavaScript.
* [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) - Allows you to serve auto-generated swagger-ui generated API docs from express.
* [Express Locale](https://www.npmjs.com/package/express-locale) - Express middleware to determine the locale identifier of the incomming request.
* [Node Polyglot](https://www.npmjs.com/package/node-polyglot) - It provides a simple solution for interpolation and pluralization, based off of Airbnb’s experience adding I18n functionality to its Backbone.js and Node apps.


## Installation

You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the dependencies by running
```
$ yarn install
set your env variables / create accounts where necessary
$ yarn run start
```

### Docker Installation 
You can fork the app or you can git-clone the app into your local machine. 

##### This is not up to date for now, inapoteza my bundle so I stopped using this for now but will come to it near deployment.

*Note:Set the environment variables up to date and you need install docker on your local machine*

```
$ docker-compose up
```

