/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// Phaser 3 config file

import SplashScene from './splashSceen.js'

// Game scene
const splashScene = new SplashScene()

/*Game scene*/
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    // Allows baisic arcade type games to work
    default: 'arcade',
    arcade: {
      // Shows bounding boxes around objects
      debug: true
    }
  },
  // Sets background color
  backgroundColor: 0x5f6e7a,
  // Makes the game allways fit 
  scale: {
    mode: Phaser.Scale.FIT,
    // Centers the game 
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

//Loads scenes
//REMEBR KEYS ARE GLOBAL AND MUST DIFFRENT FOR THE WHOLE GAME
game.scene.add('splashScene', splashScene)

//Title scene
game.scene.start('splashScene')