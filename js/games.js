/* global Phaser */

// All rights reserved Mr. Coxall - Modified by Graeme
// Created by Graeme Barbe
// Created on June 1 2022
// Phaser 3 config file

//Imports scenes 
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
import GameScene from "./gameScene.js"
import InstructionScene from "./instructionScene.js"

//Create new scenes
const splashScene = new SplashScene //()
const titleScene = new TitleScene //()
const menuScene = new MenuScene //()
const gameScene = new GameScene //()
const instructionScene = new InstructionScene //()

/* Start phaser game */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    // Allows basic arcade type games to work
    default: "arcade",
    arcade: {
      // Shows bounding boxes around objects
      debug: false,
    },
  },
  // Sets background color to black
  backgroundColor: 0xffffff,
  // Makes the game always fit 
  scale: {
    mode: Phaser.Scale.FIT,
    // Centers the game 
    autoCenter: Phaser.Scale.CENTER_BOTH,
  }
}

const game = new Phaser.Game(config)

//Loads scenes
//REMEMBER KEYS ARE GLOBAL AND MUST BE DIFFERENT FOR THE WHOLE GAME
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add("menuScene", menuScene)
game.scene.add("gameScene", gameScene)
game.scene.add("instructionScene", instructionScene)

//Scene program starts with
game.scene.start("splashScene")