/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
//Creates an Alien
  createAlien() {
    const alienYLocation = Math.floor(Math.random() * 1920) + 1
    let alienYVelocity = Math.floor(Math.random() * 50) + 100
    alienYVelocity *= Math.round(Math.random()) ? 1 : -1
    const anAlien = this.physics.add.sprite(1080, alienYLocation, "alien").setScale(1)
    anAlien.body.velocity.x = -200
    anAlien.body.velocity.y = alienYVelocity
    this.alienGroup.add(anAlien)
  }
  
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
    this.load.image("starBackground", "./assets/space.jpg")
    this.load.image("ship", "./assets/angryBird.webp")
    this.load.image("missile", "./assets/missile.webp")
    this.load.image("alien", "./assets/pig.png")

    //Loads sounds
    this.load.audio("laser", "./assets/laser1.wav")
    this.load.audio("explosion", "assets/barrelExploding.wav")
  }

  create (data) {
    //Displays background 
    this.background = this.add.image(0, 0, "starBackground").setScale(2)
    this.background.setOrigin(0, 0)

    //Displays the ship
    this.ship = this.physics.add.sprite(100, 1080 - 100, "ship").setScale(0.6)

    //Allows the missile to have physics 
    this.missileGroup = this.physics.add.group()

    //Creates a group for the missiles 
    this.alienGroup = this.add.group()
    this.createAlien()

    //Collisons between missiles and alien
    this.physics.add.collider(this.missileGroup, this.alienGroup, function (missileCollide, alienCollide) {
      alienCollide.destroy()
      missileCollide.destroy()
      this.sound.play("explosion")
      this.createAlien()
      this.createAlien()
    }.bind(this))
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
      if (this.ship.x < 0) {
        this.ship.x = 0
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
      //if (this.fireMissile === false) {
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x + 70, this.ship.y + 10, "missile").setScale(0.8)
        this.missileGroup.add(aNewMissile)
        this.sound.play("laser")
      //}
    }

    //If statement to fire missile if space is pressed and unpressed 
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    //If statement to move missiles 
    this.missileGroup.children.each(function (item) {
      item.x = item.x + 15
      if (item.x > 1920)
        item.destroy()
    })
  }
}

export default GameScene