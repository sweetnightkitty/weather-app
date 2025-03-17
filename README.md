# Weather App

A simple desktop weather application that uses asynchrnous Javascript and gathers weather data from the Visual Crossing API

This was a project completed alongside the ODIN Project assignment Weather App as a means of practicing asynchronous Javascript and working with APIs. A comprehensive list of all skills practiced:

- Asynchronous Javascript
- Handling promises
- Async and await
- webpack javascript bundler
- Working with APIS: specifically fetch and Visual Crossing for weather data
- DOM Manipulation

## Next stages:
- Create a scrolling effect for the hourly weather
- Create a 10 day forecast

## Check out the assignment guidelines:
https://www.theodinproject.com/lessons/node-path-javascript-weather-app#assignment


## Getting Started

Before getting started make sure you have the latest version of npm installed.

I recommend downloading Node Version Manager (NVM) first and then downloading Node.

For quick and easy instructions on how to download nvm and set up node: https://www.theodinproject.com/lessons/foundations-installing-node-js

Then you will need to fork a copy of this repository to your Github account and then you can use the git clone command to clone your forked copy to your local environment and then you will need to download the following dependencies:

### Webpack
```
npm install --save-dev webpack webpack-cli
```

**Webpack Local Server**
```
npm install --save-dev html-loader
```

**HTML Plugin**
```
npm install --save-dev html-webpack-plugin
```

**HTML Loader**
```
npm install --save-dev html-loader
```

**CSS Loader**
```
npm install --save-dev style-loader css-loader
```

For a more detailed guide on installing and working with Webpack see : https://webpack.js.org/guides/installation/

## Local Server

After sucessfully cloning the repository, in order to launch the program locally you will need to run the webpack server using the command

```
npm run serve
```

and then the program will load at http://localhost:8080/



