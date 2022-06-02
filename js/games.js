/* global Phaser */

// All rights reserved Mr. Coxall - Modified by Graeme
// Created by Graeme Barbe
// Created on June 1 2022
// Phaser 3 config file

//Imports scenes 
import SplashScene from "./splashSceen.js"
import TitleScene from "./titleSceen.js"

// Create new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()

/* Start phaser game */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    // Allows baisic arcade type games to work
    default: "arcade",
    arcade: {
      // Shows bounding boxes around objects
      debug: true,
    },
  },
  // Sets background color to white
  backgroundColor: 0xffffff,
  // Makes the game allways fit 
  scale: {
    mode: Phaser.Scale.FIT,
    // Centers the game 
    autoCenter: Phaser.Scale.CENTER_BOTH,
  }
}

const game = new Phaser.Game(config)

//Loads scenes
//REMEBR KEYS ARE GLOBAL AND MUST DIFFRENT FOR THE WHOLE GAME
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)

//Title scene
game.scene.start("splashScene")