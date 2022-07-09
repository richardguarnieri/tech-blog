<!-- This template was created following The Markdown Guide - https://www.markdownguide.org/ -->

<!-- If you are editing this README.md on VS Code, please highlight and replace the following keywords enclosed in backticks (``) using:
* MacOS: CMD + Shift + L
* Windows: CRTL + Shift + L

GitHub Username: `richardguarnieri`
GitHub Repository: `tech-blog`
Your Name: `Richard Guarnieri`
Email: `richard.gm@outlook.com`
LinkedIn Username: `rguarnieri`
Twitter Username: `ric_guarnieri`
Project Title: `Tech Blog`
Project Description: `A Tech Blog w/ MVC Paradigm, Handlebars.js, Sequelize ORM and Express.js!`
-->

<!-- Please also update the following links -->
[logo]: ./public/img/logo.png
[application-image]: ./public/img/app-image.png
[application-url]: https://richard-tech-blog.herokuapp.com/

<div id="home"><div> 

<!-- Badges / Shields -->
<!-- These were created using https://shields.io/ - feel free to replace / create yours by modifying links below: -->

<div align="center">
    <a href="https://github.com/richardguarnieri/tech-blog/graphs/contributors">
        <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/richardguarnieri/tech-blog?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/tech-blog/network/members">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/richardguarnieri/tech-blog?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/tech-blog/stargazers">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/richardguarnieri/tech-blog?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/tech-blog/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/richardguarnieri/tech-blog?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/tech-blog/blob/main/LICENSE">
        <img alt="GitHub license" src="https://img.shields.io/github/license/richardguarnieri/tech-blog?label=license&style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/tech-blog/commits/main">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/richardguarnieri/tech-blog?style=for-the-badge">
    <a>
    <a href="https://www.linkedin.com/in/rguarnieri/">
        <img alt="LinkedIn shield" src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555">
    <a>
</div>
<br>


<!-- Header -->

<div align="center">
    <a href="https://github.com/richardguarnieri/tech-blog">
        <img src="./public/img/logo.png" alt="Logo" width="300" height="auto">
    </a>
    <h1 align="center">Tech Blog</h1>
    <div>
        A Tech Blog w/ MVC Paradigm, Handlebars.js, Sequelize ORM and Express.js!
        <br>
        <a href="https://github.com/richardguarnieri/tech-blog">
            <strong>Explore Documentation</strong>
        </a>
        <br>
        <br>
        <a href="https://github.com/richardguarnieri/tech-blog">View Demo</a>
        ·
        <a href="https://github.com/richardguarnieri/tech-blog/issues">Report Bug / Request Feature</a>
    </div>
</div>
<br>


<!-- Table of Contents -->
## Table of Contents
* [The Project](#the-project)
    * [Technology Stack](#technology-stack)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [How to Use](#how-to-use)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Miscellaneous](#miscellaneous)
    * [User Story](#user-story)
    * [Acceptance Criteria](#acceptance-criteria)
<br>


<!-- The Project -->
## The Project

[![Application Image][application-image]][application-url]

Blogs give us the great opportunity to translate our views into short, accessible summaries. A lot of people use blogs to openly express themselves, share ideas, communicate directly with customers, among many other things. In this modern era, blogging is an important step into allowing individuals to build and to control their online identity. For this reason, it came an idea to do a fun tech blogging application.

This application is based on Express.js, Sequelize as MySQL's ORM, bcrypt to hash user passwords, express-session to store session data, connect-session-sequelize to store session data on the database and express-handlebars as the templating engine. The web look and design was done using SASS.

The app is deployed on Heroku using clearDB as its database: [https://richard-tech-blog.herokuapp.com/][application-url].

<p align="right"> - <a href="#home">Return to Home</a></p>

### Technology Stack
* [HTML](https://html.spec.whatwg.org/)
* [CSS](https://www.w3.org/TR/CSS/#css)
* [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
* [SASS](https://sass-lang.com/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [express-handlebars](https://www.npmjs.com/package/express-handlebars)
* [express-session](https://www.npmjs.com/package/express-session)
* [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [dotenv](https://www.npmjs.com/package/dotenv)

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Getting Started -->
## Getting Started
Make sure you have an active internet connection. To use the application all you need to do is click Heroku's link: [https://richard-tech-blog.herokuapp.com/][application-url].

<p align="right"> - <a href="#home">Return to Home</a></p>

### Prerequisites
A web brower to run the application.

<p align="right"> - <a href="#home">Return to Home</a></p>

### Installation
Unless you are cloning the repo, nothing to install. Otherwise, you would need all the node packages listed in the [Technology Stack](#technology-stack) section as well as MySQL installed on your local machine.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- How to Use -->
## How to Use
When you open the application, you will be routed to the homepage, which includes existing blog posts if any have been posted as well as comments for each one, navigation links for the homepage, the user dashboard and the option to log in.

To fully access the blog you will need to create an account, this will give you access to the **dashboard** which is where you will see the posts you have created as well as the option to add new posts and modify or delete existing ones.

The **homepage** shows all existing blog posts. When you click on a specific post, the comment section will pop up as well as the option to add a comment (the add comment option only shows up if you are logged in).

_For more examples, please refer to the [Documentation][documentation-url]._

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contribuiting -->
## Contributing
Contributions are much welcomed! If you have suggestions to make this application better, please fork the repo and create a pull request. 

You can also open an issue [here][github-issues-url] and tag it with the **"enhancement"** label.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- License -->
## License
This project is licensed under the terms of the MIT license. 

See `LICENSE` for more information.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contact -->
## Contact
Richard Guarnieri: richard.gm@outlook.com · LinkedIn: [rguarnieri][linkedin-url] · Twitter: [@ric_guarnieri][twitter-url]

Application URL: [https://richard-tech-blog.herokuapp.com/][application-url]

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Miscellaneous -->
## Miscellaneous
### User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

<p align="right"> - <a href="#home">Return to Home</a></p>

### Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- References, Links and Images -->
<!-- Badges / Shields Styles -->
[github-contributors-shield]: https://img.shields.io/github/contributors/richardguarnieri/tech-blog?style=for-the-badge
[github-forks-shield]: https://img.shields.io/github/forks/richardguarnieri/tech-blog?style=for-the-badge
[github-stars-shield]: https://img.shields.io/github/stars/richardguarnieri/tech-blog?style=for-the-badge
[github-issues-shield]: https://img.shields.io/github/issues/richardguarnieri/tech-blog?style=for-the-badge
[github-license-shield]: https://img.shields.io/github/license/richardguarnieri/tech-blog?style=for-the-badge
[github-last-commit-shield]: https://img.shields.io/github/last-commit/richardguarnieri/tech-blog?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- Badges / Shields URL -->
[github-contributors-url]: https://github.com/richardguarnieri/tech-blog/graphs/contributors
[github-forks-url]: https://github.com/richardguarnieri/tech-blog/network/members
[github-stars-url]: https://github.com/richardguarnieri/tech-blog/stargazers
[github-issues-url]: https://github.com/richardguarnieri/tech-blog/issues
[github-license-url]: https://github.com/richardguarnieri/tech-blog/blob/main/LICENSE
[linkedin-url]: https://linkedin.com/in/rguarnieri

<!-- Non Badge / Shield Reference Links -->
[documentation-url]: https://github.com/richardguarnieri/tech-blog
[twitter-url]: https://twitter.com/ric_guarnieri