# Frontend Mentor - Tic Tac Toe solution

This is a solution to the [Tic Tac Toe challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- See hover states for all interactive elements on the page
- Play the game either solo vs the computer or multiplayer against another person
- **Bonus 1**: Save the game state in the browser so that it’s preserved if the player refreshes their browser
- **Bonus 2**: Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

### Screenshot

![](./src/assets/screenshot.png)

### Links

- Live Site URL: [Live Site](https://silly-biscochitos-d897d1.netlify.app/)

## My process

I began with the building out the logic and basic gameplay before any type of styling occured. Setting up the board and registering the click events was a bit challenging at first but once I grasped the use of a multi-dimensonal array and using x and y coordinates as my selectors everything feel in place afterwards.

### Built with

- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This was a great projec to tackle after I followed a course on uDemy about functional components in React. Previous projects that I have developed in React were using class components and needed to learn functional components to bring myself up to speed with the industry. This project was great for learning how to pass around states into different components and using functions to set styling.

I was really challenged with styling the selected squares that were part of the win condition. It took me a minute to figure out how to get the background and svg image styled correctly with the right conditional logic to only be applied to the winning squares.

### Continued development

I'm going to focus on refactoring this project using useContext and useEffect to help condense some of the code and assist in passing around the states. I feel this is much to learn about these React items.

## Author

- Website - [Joe Irvine](https://www.joeirvine.com)
- Frontend Mentor - [@TheShonuff](https://www.frontendmentor.io/profile/TheShonuff)
- Twitter - [@TheDevShonuff](https://www.twitter.com/TheDevShonuff)

## Acknowledgments

I would like to give a shoutout to [Anurag Gharat](https://www.twitter.com/anurag_gharat) for helping me with getting the modal to display correctly when the player or cpu wins. I couldn't get the opacity to work correctly to fade the background and he was able to show me the error I was making... It was not setting display: absolute on the wrapper I was using.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
