# Wildlife-Photography

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)

#### SoftUni - JS Back-end - Exam 2021

The visitors can view the **Home page** and **All posts** for wildlife, they can also **register** with **first**, **last name**, **email**, and **password**, which will allow them to create their **posts**, to **vote on posts** (if the current user is **not** the author of the post). Authors can **edit** or **delete** posts at any time.

## Used in this project:

- Provided HTML & CSS resources 
- You may add attributes (such as class and dataset), but it is forbidden to change existing attributes (such as class and id)
- You may change "href" attributes on links and add/change the method and action attributes of HTML Forms.
- **Express.js** as a back-end framework
- **MongoDB** as a database with **mongoose**
- **Express-handlebars** as a template
- **Bcrypt** for hashing the password
- Application must start from file "index.js" on port 3000
- It is forbidden to use React, Vue, Angular etc.

## Start
- `$ git clone https://github.com/yveette/Wildlife-Photography`
- `npm install`
- `npm run start`
- open http://localhost:3000
- can use the GUI for MongoDB -> [MongoDB Compass](https://www.mongodb.com/products/compass)
- enjoy

## Users

* Users (Logged In) :
    * View **Home page** and all other pages with logged-in navigation
    * View **All posts**
    * **Create** new post [Create post]
    * Access post **details** page [Details]
    * **Voting** on posts (if the current user is not the author on the post)
    * **Delete** or **Edit** post depending on user's authentication (only for the author of the current post)

* Guest (Not Logged In) :
    * Can access **Home** page.
    * Can access the **Login** page and functionality.
    * Can access the **Register** page and functionality.
    * Can access **All posts** (Listed all posts).
    * Can access **Details** page without functionality.

If **Guests** (not logged in) trying to access а page that it should not be able to, you must redirect them to the **Login page**.

If **Users** (logged in) trying to access а page that it should not be able to, you must redirect them to the **Home page**.

## Database Models

The **Database** of the **Wildlife Photography** application needs to support **2** entities :

### User :

- **First Name** - string (required),
- **Last Name** - string (required),
- **Email** - string (required),
- **Password** - string (required),
- **My Posts** – a collection of Post (reference to the Post Model)

*Note: When a user creates a new post, a reference to that post is added to that collection (My Posts).*

### Post :

- **Title** - string (required),
- **Keyword** - string (required),
- **Location** - string (required),
- **Date of creation** - string (required),
- **Image** - string (required),
- **Description** - string (required),
- **Author** - object Id (a reference to the User model),
- **Votes on post** - a collection of Users (a reference to the User model),
- **Rating of post** - number, default value 0

*Note: When a user votes on a given post, their id is added to that collection (Votes on post).*

*Rating of post will store the overall rating of votes. The value is changing depending on the type of vote (positive and negative).*

*Implement the entities with the correct data types.*

## Application Pages

### Home Page (logged out user)

![Home Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/home_page.png)

### Home Page (logged in user)

![Home Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/home_page_1.png)

### Register Page (logged out user)

Register a user inside the database with **first**, **last name**, **email**, and **password**. Password inside the database must be hashed (use **bcrypt**) and both **passwords** must **match**! 

After successful registration redirects to the **Home page**, with an already logged-in user.

![Register Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/register_page.png)

### Login Page (logged out user) 

Logging an already registered user with the correct **email** and **password**. 

After successful login redirects to the **Home page**, with an already logged-in user.

![Login Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/login_page.png)

### Logout Page (logged in user) 

The logout action is available to logged-in users. Upon success, clear any session information and redirect the user to the** Home page**.

### All posts (for logged in users and logged out users)

List of all wildlife posts. Each post should be showing information about the wildlife **image**, **keyword**, **title**, **description**, as well as a page with **details** about the **specific post** (the title, description, and [**Detail**] button will be visible when the **mouse cursor** reaches the image). Like in the picture below:

![Catalog Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/catalog_page.png)

[**Details**] button should be a link to the **details page** for the current post.

If there are **no** wildlife posts in the database, display the following view:

![Catalog Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/catalog_non.png)

### Details Page - (for logged in users and logged out users)

All users should be able to **view details** about the post. Clicking the **Details** button in a **post card** should display the **Details** page. 

If the currently logged-in user is the author of the post, the **Edit** and **Delete** buttons should be displayed, otherwise they should not be available.

Information about the post:

* **Title**
* **Author**
* **Keyword**
* **Location**
* **Date**
* **Wildlife Image**
* **Description**
* **Buttons** (Depending the status of the currently logged in user)
* **Votes** for this post 
    * Total rating of votes
    * If there are people who voted, separate their emails with **comma** and **space** ", "
    * If not, display "*No one has voted yet*".

<details>
    <summary>Details Page (logged out users)</summary>
If there are no logged-in users, no buttons should be displayed.

![Details Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/details_1.png)
</details>

<details>
    <summary>Details Page (logged in user and author of the current post)</summary>

If the currently logged-in user is the author (the user who created the wildlife post), he should see the [Edit] and [Delete] buttons.

![Details Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/details_2.png)
</details>

<details>
    <summary>Details Page (logged in user who did not vote)</summary>

If the currently logged-in user is not the author (the user that is not the creator for that post and has not yet given his vote), he should see the [UpVote +1] and [DownVote -1] buttons.

![Details Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/details_3.png)
</details>

<details>
    <summary>Details Page (logged in and already voted on this post)</summary>

If the currently logged-in user is not the author and has already voted for the current post, he should see the button [Thanks For Voting].

![Details Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/details_4.png)
</details>

### Vote on the post (logged in user who is not the author of the post)

Any registered user who is not the **author** of the wildlife **post** must be able to **vote** (if they have not yet voted).

If he succeeds in voting, his **userId** must be added to the collection of **Votes on post**.

We have two buttons available:

* [**UpVote +1**] button -> The value of the Rating of post should be **increased by 1**, and the changes should be reflected in the Total rating of votes.

* [**DownVote -1**] button -> The value of the Rating of post should be reduced by 1, and the changes should be reflected in the Total rating of votes.

* Then redirect the user to the **details page** of the current wildlife post.

In the list - **People who voted for the post**, the **emails** of the people who voted must be displayed.

If a user has once voted on the post, he should see "*Thanks For Voting*" and in the list - **People who voted for the post**, his email should be displayed.

### Create Post Page (logged in user)

The Create page is available to **logged-in users**. It contains a form for adding new wildlife posts. 

Upon success, redirect the user to the **All Posts page**.

![Create Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/create_page.png)

### Delete Trip (logged in user and creator of the current post) 

**Every author** should be able to click over the [**Delete**] button - deleting the current post from the database and the user should be redirected to the **All post page**.

### Edit Trip (logged in user and creator of the current post)

The **Edit page** is available to logged-in users and it allows authors to **edit** their posts. Clicking the [**Edit**] button of a particular post on the **Details page** should display the Edit page, with all fields filled with the data for the post. It contains a form with input fields for all relevant properties. Upon success, redirect the user to the **Details pag**e for the current post.

![Edit Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/edit_page.png)

### My posts page - Bonus

Each **logged-in user** should be able to view his post by clicking [**Post of {email-of-user}**]. Each own post of user should be showing information about the wildlife **image**, **keyword**, **title**, **author** as well a total rating of votes for the given post. Like in the picture below:

![My Posts Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/my_posts.png)

If there are **no** own wildlife posts in the database, display the following view:

![My Posts Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/my_posts_non.png)

### 404 Page Not Found

If **Guests** (not logged in) trying to access а page that it should not be able to, you must redirect them to the **Login page**.

If **Users** (logged in) trying to access а page that it should not be able to, you must redirect them to the **Home page**.

Use the following view for **invalid paths**:

![404 Page View](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/not_found_page.png)

## Validation and Error Handling

The application should **notify** the users about the result of their actions.

In case of error, you should display div with class "**error-container**".

You can choose to display the first error or all of them. You have complete freedom to choose the content of the error message you will display.

### Login / Register

* The **first name** should be at least **3** characters long and contains only English letters
* The **last name** should be at least **5** characters long and contains only English letters
* The **email** should be in the following format: <name>@<domain>.<extension> 
    * Only **Latin** letters are allowed for any of the parts of the email
    * There must be a **point(.)** after the <domain>
    * Example of a **valid** email - "petar@softuni.bg"
* The **password** should be at least 4 characters long
* The **repeat password** should be equal to the password

![Login Error](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/login_error.png)

![Register Error](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/register_error.png)

### Post

You should make the following validations while creating and editing a post:

* The **Title** and **Keyword** should be at least **6** characters (each).
* The **Location** should be a maximum of **15** characters long.
* The **Date** should be exactly 10 characters - "**02.02.2021**"
* The **Wildlife Image** should start with **http://** or **https://**.
* The **Description** should be a minimum of **8** characters long.

![Create post Error](https://github.com/yveette/Wildlife-Photography/blob/main/readme_files/create_error.png)

## Security Requirements

The Security Requirements are mainly access requirements. Configurations about which users can access specific functionalities and pages.

### Guest (not logged in):

* Can access **Home** page.
* Can access the **Login** page and functionality.
* Can access the **Register** page and functionality.
* Can access **All posts** (Listed all posts).
* Can access **Details** page without functionality.

### Users (logged in):

* Can access the **Home page**.
* Can access **All posts** (Listed all posts).
* Can access the **Details** page and functionality.
* Can access **Create**  Post page and functionality.
* Can access to **Vote** on posts functionality.
* Can access the **Delete** and **Edit** post functionality. (only logged in and author of the current post)
* Can access **Logout** functionality.