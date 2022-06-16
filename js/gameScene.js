/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
//Creates an Alien
  createAlien() {
    const alienYLocation = Math.floor(Math.random() * 1080) + 1
    let alienYVelocity = Math.floor(Math.random() * 50) + 100
    alienYVelocity *= Math.round(Math.random()) ? 1 : -1
    const anAlien = this.physics.add.sprite(1920, alienYLocation, "alien")
    anAlien.body.velocity.x = -250
    anAlien.body.velocity.y = alienYVelocity
    let randNumb = Math.floor(Math.random() * 20) + 1
    if (randNumb > 15) {
      anAlien.body.velocity.y = 0
    }
    this.alienGroup.add(anAlien)
  }
  
  //Creates a new object that get called with the key "gameScene"
  constructor () {
    super({ key: "gameScene" })

    //Variables to hold different objects
    this.background = null
    this.ship = null
    this.fireMissile = null
    this.homeButton = null
    this.score = 0
    this.lives = 3
    this.livesText = ""
    this.scoreText = null
    this.scoreTextStyle = { font: "50px Arial", fill: "#900603", align: "center" }
    this.gameOverTextStyle = { font: "50px Arial", fill: "#900603", align: "center" }
    this.winTextStyle = { font: "50px Arial", fill: "#900603", align: "center" }
    this.livesTextStyle = { font: "50px Arial", fill: "#900603", align: "center" }
  }

  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Game Scene")

    //Loads images for background, ship and missile 
    this.load.image("starBackground", "./images/space.jpg")
    this.load.image("ship", "./images/angryBird.png")
    this.load.image("missile", "./images/missile.webp")
    this.load.image("alien", "./images/pig.png")
    this.load.image("homeButton", "./images/homeButton.png")

    //Loads sounds
    this.load.audio("laser", "./sounds/laser1.wav")
    this.load.audio("explosion", "./sounds/barrelExploding.wav")
    this.load.audio("bomb", "./sounds/bomb.wav")
    this.load.audio("buttonClick", "./sounds/buttonClicks.wav")
    this.load.audio("loseSound", "./sounds/loseSound.mp3")
    this.load.audio("winSound", "./sounds/winSound.wav")
  }

  create (data) {
    //Displays background 
    this.background = this.add.image(0, 0, "starBackground").setScale(2)
    this.background.setOrigin(0, 0)
    
    //Displays score
    this.scoreText = this.add.text(10, 10, "Score: " + this.score.toString(), this.scoreTextStyle)

    this.livesText = this.add.text(700, 10, "Lives: " + this.lives.toString(), this.livesTextStyle)

    //Displays the ship
    this.ship = this.physics.add.sprite(100, 1080 - 100, "ship").setScale(0.6)

    //Displays home button
    this.homeButton = this.add.sprite(1800, 70, "homeButton").setScale(0.3)

    //Allows home button to be used 
    this.homeButton.setInteractive({ useHandCursor: true })
    this.homeButton.on("pointerdown", () => this.clickButton() )

    //Allows the missile to have physics 
    this.missileGroup = this.physics.add.group()

    //Creates a group for the aliens 
    this.alienGroup = this.add.group()
    this.createAlien()

    //Collisions between missiles and alien
    this.physics.add.collider(this.missileGroup, this.alienGroup, function (missileCollide, alienCollide) {
      alienCollide.destroy()
      missileCollide.destroy()
      this.sound.play("explosion")
      this.score = this.score + 1
      this.scoreText.setText("Score: " + this.score.toString())
      this.createAlien()
      this.createAlien()
      //Win condition 
      if (this.score > 45) {
        this.sound.play("winSound")
        this.winText = this.add.text(1920 / 2, 1080 / 2, "You Win! Congratulations\nClick to play again", this.winTextStyle).setOrigin(0.5)
        this.winText.setInteractive({ useHandCursor: true })
        this.winText.on("pointerdown", () => this.scene.start("gameScene"))
        this.physics.pause()
        this.ship.destroy()
        this.score = 0
      }
    }.bind(this))

    //Collision between alien and the ship
    this.physics.add.collider(this.ship, this.alienGroup, function(shipCollide, alienCollide) {
      this.sound.play("bomb")
      alienCollide.destroy()
      this.createAlien()
      this.createAlien()
      shipCollide.body.velocity.x = 0
      shipCollide.body.velocity.y = 0
      this.lives -= 1
      this.livesText.setText('Lives: ' + this.lives.toString(), this.livesTextStyle)
      //Lose condition 
      if (this.lives == 0) {
        this.sound.play("loseSound")
        this.physics.pause()
        alienCollide.destroy()
        shipCollide.destroy()
        this.gameOverText = this.add.text(1920 / 2, 1080 / 2, "Game Over! \nClick to play again", this.gameOverTextStyle).setOrigin(0.5)
        this.gameOverText.setInteractive({ useHandCursor: true})
        this.gameOverText.on("pointerdown", () => this.scene.start("gameScene"))
        this.score = 0
        this.lives = 3
      }
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
        this.ship.x = 1920
      }
    }

    //If statement to move the ship right if right arrow is down
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 0
      }
    }

    //If statement to fire missile if space is pressed and unpressed 
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x + 70, this.ship.y + 10, "missile").setScale(0.8)
        this.missileGroup.add(aNewMissile)
        this.sound.play("laser")
      }
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

    this.alienGroup.children.each(function (item1) {
      if ((item1.x < 0) || (item1.y < 0) || (item1.y > 1080)) {
        item1.x = 2000
        let alienYCoord = Math.floor(Math.random() * 1080) + 1
        item1.y = alienYCoord

        
        let alienYSpeed = Math.floor(Math.random() * 50) + 100
        alienYSpeed *= Math.round(Math.random()) ? 1 : -1
        item1.body.velocity.x = -250
        item1.body.velocity.y = alienYSpeed
        let randNumb = Math.floor(Math.random() * 20) + 1
        if (randNumb > 15) {
          item1.body.velocity.y = 0
        }
      }
    })
  }

  clickButton () {
    this.sound.play("buttonClick")
    this.score = 0
    this.scene.start('menuScene')
  }
}

export default GameScene