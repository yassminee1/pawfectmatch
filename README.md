# PawfectMatch ~ *Where Tail-Wagging Connections Begin!*

![PawfectMatch Logo](https://github.com/yassminee00/pawfectmatch/assets/142147424/caab3a8a-70cb-446e-b8b8-ba22657af39d)


# Introduction

## The Project
Every dog owner knows the struggle of moving to a new place and not knowing anyone else with a dog. However, dogs need to socialize too! This is why I created **PawfectMatch**.

[**PawfectMatch**](https://pawfectmatch.best/) is a dating site for dogs! Dog owners can create a profile for their pup, and start swiping through other dogs in their area. If they want to meet a dog, they can "like" their profile, and if that dog likes them back, it's a match! From there, the two users can decide to contact each other and organize a playdate for their dogs. If they don't like that dog, they can just "pass" it.

Other features include: editing the dog's profile, modifying the user settings, and a "previous" button to see the previous profile again.

## The Context
This project is my Portfolio Project, concluding my Foundations Year at ALX.

## The Team
I'm Yassmine, the creative mind and solo developer behind PawfectMatch. From envisioning the concept to coding every line, I am fully immersed in the journey of bringing this unique dog dating app to life. Wearing multiple hats, I handle everything from design intricacies to marketing strategies. My passion drives me to create a fun and meaningful platform where dog owners can connect, bringing joy and companionship to our furry friends. PawfectMatch is not just a project; it's a labor of love, and I'm excited to share it with fellow dog enthusiasts.

## Blog posts
After the development phase, I wrote a blog post to reflect on the PawfectMatch journey.

* My article: [PawfectMatch](https://medium.com/@yassmine.elghalbzouri129/unleashing-happiness-pawfectmatch-the-dating-app-for-dogs-f7fc6997f095)

# Tutorial

## Take a tour of the deployed version at pawfectmatch.best
-> [**PawfectMatch**](https://pawfectmatch.best/)

Here is a little preview of the main feature, the swiping through other dogs' profiles:

![swiping](./public/icons/browse_no_text.png)

Here is a simple flow for the user experience on PawfectMatch:

![User Experience on PawfectMatch](https://github.com/yassminee00/pawfectmatch/assets/142147424/5bb006bf-9606-4bfe-b85f-e845649d5e41)

## Run PawfectMatch with Vue-CLI
Installing the programs necessary to view this project is pretty simple!

I'll be using [`npm`](https://www.npmjs.com/get-npm) to install Vue and Vue-CLI. First, clone this repo, then navigate to the root and [install Vue](https://vuejs.org/v2/guide/installation.html) by executing this command:
`pawfectmatch$ npm install vue`

Once that has finished, [install Vue-CLI](https://cli.vuejs.org/guide/installation.html) with this command:
`pawfectmatch$ npm install -g @vue/cli`

In case there are any missing dependencies, please execute `pawfectmatch$ npm install` to get them. If there's an error, it should return the specific command you need to enter.

Once this is all done you're ready to run **PawfectMatch*! Still in the root of this directory, simply execute `pawfectmatch$ npm run serve` and give it a few seconds to get started. Once it's up, you can open your web browser and enter `localhost:8080`. This will allow you to try out **PawfectMatch**!

When you are finished simply go back to your terminal and hit `ctrl + c` to quit the program.

## Known issues
* Some transitions are not as fluid as expected, and due to API calls lag can be a bit off.
* Issue when viewing on mobile. Many of the assets become squished vertically.

# Architecture

## Overview
My web app is a single-page app, coded mainly in Javascript. **PawfectMatch** is front-end heavy, meaning that I focused all my time and energy on developing a simple but easy-to-use and fun app. I designed most of the User Interface, using plain CSS and some native Vue transitions and animations. I also incorporated some BootstrapVue elements which offered a simple solution for some features like image uploading.

![Infrastructure of PawfectMatch](https://github.com/yassminee00/pawfectmatch/assets/142147424/ef401d42-e1f9-4acc-8dd0-19660f0c791b)

## Vue.js
For this project, I decided to focus on learning a new front-end framework. Following the advice of mentors and professionals, I chose to learn and use Vue.js.

Every different section of the app is a Vue component, and all the components can be found in the directory [src/components/](./src/components/). The main component "App" is defined in [App.vue](./src/App.vue), and is the entry point of the app.

All the components are linked together thanks to a VueRouter instance, defined in [index.js](./routes/index.js). Each component is linked to a route, which path is appended automatically at the end of our URL.

The [main.js](./src/main.js) file contains the instanciation of the Vue for the entire app, as well as the config options, database session, and authentication session.

Another interesting point about Vue.js is that it allowed me to use a store, defined in [store.js](./src/store.js). This store is a front-end store that keeps track of the state of components and data throughout the app. This is where the data from my database requests is stored and updated before going back into the database. This store also allows to not pass props from each component to all its children components and to access data from anywhere without having to use an event bus.

### List of components

These components make up what a user experiences when they check out **PawfectMatch**. Each component contains the code for a specific page of the app. These components can be located in [src/components](./src/components).

| Component | Description |
|-----------|-------------|
| [Landing.vue](./src/components/Landing.vue) | The landing page a user sees when they navigate to **PawfectMatch**. |
| [Login.vue](./src/components/Login.vue)   | The login page. There's a link to go to the Signup page if a user hasn't signed up. |
| [Matches.vue](./src/components/Matches.vue) | Page where users can see the other users they've matched with. A match occurs when two users have liked each other. |
| [Navbar.vue](./src/components/Navbar.vue) | The navigation bar that appears at the top of almost every other component |
| [Settings.vue](./src/components/Settings.vue) | Users can change their email address, display name, city, and zip code on this page. |
| [Signup.vue](./src/components/Signup.vue) | Signup page for users who do not have an account. It asks for a valid email address and for them to make and confirm a password. |
| [Swiping.vue](./src/components/Swiping.vue) | The main page of **PawfectMatch** where users can see another user's profile and choose whether to 'like' or 'pass.' |
| [UserProfile.vue](./src/components/UserProfile.vue) | Similar to Settings.vue, on this page, the user can change their dog's information including likes, dislikes, and fun facts. |

## Firebase
I decided to go with Firebase for the backend/database as it provides all the functionality I need to develop this project such as authentication, database storage, and cloud storage. As a non-relational database, it made calling any required information simple.

Firebase was incredibly helpful while I was testing as it allowed me to look through each user's collection of information. This was helpful while I was implementing the logic for user likes and matches.

### Firestore
Since my app requires frequent and numerous database calls, Firestore provides a reliable and responsive solution to achieve a seamless experience. Practically all user information, such as display name, dog info, and even their like/match lists are kept in the Firestore. This lets me quickly populate each vue with relevant information.

For instance, when a user logs in they'll be taken to the main [Swiping](./src/components/Swiping.vue) component where another user's image, dog name, age, and location will be displayed. They can choose to 'like' or 'pass' the dog, which will immediately populate with another dog's information. Firebase's quick database calls populate this information and help keep this functionality snappy.

Images are kept in the Firestore as a link to where they're held in cloud storage. 

### Authentication
As my app connects people and their dogs, authentication is a necessity. Firebase provides a straightforward and easy-to-implement solution so I can focus on designing an accessible app. Users simply sign up with an existing email address and a password of their choice. Firebase Authentication does the heavy lifting to make sure users are authentic.

### Cloud Firestore
The obvious choice for storing users' dog photos. It provides a straightforward implementation for users to upload their photos and a relatively quick way to call and display these images for users to sift through.

# Acknowledgments

* Holberton School staff - For the help, advice, and resources they provided me with during this project and the curriculum.

* Cohort 16 and all Holberton students - For your friendship, invaluable support, and insight not only for this project but over the previous projects.

* My dogs, and also my friends' dogs - For the inspiration, courage, and love they brought me when I was working hard and tired.

* YOU - For reading this documentation and testing out **PawfectMatch**. I hope you enjoyed the ride!

# Related projects

* [AirBnB clone](https://github.com/yassminee00/AirBnB_clone_v3): a simple web app made in Python, Flask, and JQuery.

* [javascript warm up](https://github.com/yassminee00/alx-higher_level_programming/0x12-javascript-warm_up): Introduction to Javascript and how to use it.

# License

MIT License
