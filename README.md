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
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- See hover states for all interactive elements on the page
- Play the game either solo vs the computer or multiplayer against another person
- **Bonus 1**: Save the game state in the browser so that it’s preserved if the player refreshes their browser
- **Bonus 2**: Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

### Screenshot

![](/public/images/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/tic-tac-toe-game](https://github.com/traez/tic-tac-toe-game)
- Live Site URL: [https://tic-tac-toe-game-traez.vercel.app](https://tic-tac-toe-game-traez.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

The learnings were massive with this one.

- ::backdrop CSS pseudo-element is not currently supported in Chrome/Next.js, so learnt to implement a dialog hack in using 2 Divs (backdrop and modal).
- One way to resolve bugs is to forget your assumptions and stop asking questions around it. It's likely holding you back from a quick resolution. best you start on a blank slate and just ask ChatGPT to show you a simple implementation of a solution. You can then copy as need be.
- Software architecture. That shit is key. Very necessary to ensure your code is modular, maintainable, and extensible. Wasted much time mid-way on this project rewriting code because I ignored it.
- Definitely in months to come as my proficiency increases, I will write code like this much faster. This will probably be my last game app for a while, As in the immediate I'm looking to start contributing to Open source projects, as well as starting Technical writing.
- npm run build kept throwing up errors. Eventually had to turn off an eslint rule from my .eslintrc.json file, and escape an apostrophe character in my Article component.

### Continued development

- 2 fresh Next.js Projects, then Open Source and Technical Writing.

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Trae Zeeofor](https://github.com/traez)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

Dedicated to the Super Falcons. Keep making us proud at The Women's WorldCup 2023!
