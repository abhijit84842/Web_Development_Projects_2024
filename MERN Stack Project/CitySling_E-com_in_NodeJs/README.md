<h1> CitySling E-com Website for collection of Low to Premium Bags</h1>

<h2> Follow Industrial Base code and Folder Structure </h2>
<div>
<p> Frontend -> EJS</p>
<p>Styling -> Tailwind CSS & BootStrap
<p>Backend -> Node Js</p>
<p>Database -> MongoDB Atlas</p>
 </div>

<div>
<h2>Figma Design </h2>
<a href="https://www.figma.com/design/3FH9gGvqy3SRoLwzIbTwlY/CitySling-Banner?node-id=27-3&t=nwKnXy5aOTgll4A2-0">See Design</a>
</div>

<h3> Package Install </h3>

- express from npm
- nodemon from npm
- EJS from npm => for server side rendring
- mongoose from npm
- cookie-parser from npm
- debug from npm -> print data insted of console.
- config from npm -> its took up the value which enviouremnt is running current(development or production)
- dotenv -> to access the env file
- express-session -> to create session
- connect-flash -> flash message

<h3> Models Create</h3>

- User model
- product model
- Owner/Admin model

<h3>config -> Naming convention follow -> Kabab Case</h3>

- mongoDB connection create..

<h3> Route Create -> Naming convention follow -> Camel Case </h3>

- ownersRouter-> for admin
- productsRouter
- usersRouter
- loginRouter

<h3> Use POSTMAN for API Testing </h3>

<h3>User Authetication & Functionality </h3>
<p>Encrypted the password by bcrypt </p>
<p> Set cookie using JWT </p>
<h3> User Veryfication in login </h3>
