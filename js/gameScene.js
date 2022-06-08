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
    this.fireMissile = null
  }

  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Game Scene")

    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/angryBird.webp")
    this.load.image("missile", "./assets/missile.webp")
  }

  create (data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(100, 1080 - 100, "ship").setScale(0.6)

    this.missileGroup = this.physics.add.group()
  }

  update (time, delta) {
    const keyUpObj = this.input.keyboard.addKey("UP")
    const keyDownObj = this.input.keyboard.addKey("DOWN")
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    if (keyUpObj.isDown === true) {
      this.ship.y -= 15
      if (this.ship.y < 0) {
        this.ship.y = 1080
      }
    }

    if (keyDownObj.isDown === true) {
      this.ship.y += 15
      if (this.ship.y > 1080) {
        this.ship.y = 0
      }
    }

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 50) {
        this.ship.x = 50
      }
    }

    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 600) {
        this.ship.x = 600
      }
    }

    if (keySpaceObj.isDown === true) {
      //if (this.fireMissile === false) {
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x + 70, this.ship.y + 10, "missile").setScale(0.8)
        this.missileGroup.add(aNewMissile)
      }
    //}

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }
  }
}

export default GameScene
