/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  //Creates a new object that get called with the key "gameScene"
  constructor () {
    super({ key: "gameScene" })

    //Variables to hold different objects
    this.background = null
    this.ship = null
    this.fireMissile = null
  }

  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Game Scene")

    //Loads images for background, ship and missile 
    this.load.image("starBackground", "./assets/playScreen.webp")
    this.load.image("ship", "./assets/angryBird.webp")
    this.load.image("missile", "./assets/missile.webp")
  }

  create (data) {
    //Displays background 
    this.background = this.add.image(0, 0, "starBackground").setScale(4)
    this.background.setOrigin(0, 0)

    //Displays the ship
    this.ship = this.physics.add.sprite(100, 1080 - 100, "ship").setScale(0.6)

    //Allows the missile to have physics 
    this.missileGroup = this.physics.add.group()
  }

  update (time, delta) {
    //Const for key inputs
    const keyUpObj = this.input.keyboard.addKey("UP")
    const keyDownObj = this.input.keyboard.addKey("DOWN")
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    //If statement to move the ship up if up arrow is down
    if (keyUpObj.isDown === true) {
      this.ship.y -= 15
      if (this.ship.y < 0) {
        this.ship.y = 1080
      }
    }

    //If statement to move the ship down if down arrow is down
    if (keyDownObj.isDown === true) {
      this.ship.y += 15
      if (this.ship.y > 1080) {
        this.ship.y = 0
      }
    }

    //If statement to move the ship left if left arrow is down
    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 50) {
        this.ship.x = 50
      }
    }

    //If statement to move the ship right if right arrow is down
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 600) {
        this.ship.x = 600
      }
    }

    //If statement to fire missile if space is pressed and unpressed 
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x + 70, this.ship.y + 10, "missile").setScale(0.8)
        this.missileGroup.add(aNewMissile)
      }
    }

    //If statement to fire missile if space is pressed and unpressed 
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }
  }
}

export default GameScene
