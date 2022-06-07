/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  //Creates a new object that get called with the key "gameScene"
  constructor () {
    super({ key: "gameScene" })

    this.background = null
    this.ship = null
  }

  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Game Scene")

    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
  }

  create (data) {
    this.background = this.add.image(0, 0 "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")
  }

  update (time, delta) {
  }
}

export default GameScene