/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  //Creates a new object that get called with the key "menueScene"
  constructor () {
    super({ key: "menuScene" })

    //Variables to hold different objects
    this.menuSceneBackgroundImage = null
    this.startButton = null;

    this.audioPlaying = false
  }

  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Menu Scene")

    //Loads images for background and buttons
    this.load.image("menuSceneBackgroundImage", "./images/background.jpg")
    this.load.image('playButton', "./images/button.png")
    this.load.image("instructionButton", "./images/instructions.png")

    this.load.audio("gameSceneMusic", "./sounds/gameSceneMusic.mp3")

    this.load.audio("buttonClick", "./sounds/buttonClicks.wav")
  }

  create (data) {
    if (this.audioPlaying === false) {
      var audio = new Audio("./sounds/gameSceneMusic.mp3")
      audio.play()
      audio.loop = true
      this.audioPlaying = true
    }
    //Displays background 
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackgroundImage").setScale(1.5)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    //Displays button
    this.playButton = this.add.sprite((1920 / 2) + 700, (1820 / 2) + 25, "playButton").setScale(0.6)
    this.instructionButton = this.add.sprite(375, 950, "instructionButton").setScale(0.7)

    //Allows button to be used when pressed 
    this.playButton.setInteractive({ useHandCursor: true })
    this.playButton.on("pointerdown", () => this.clickButton() )
    
    this.instructionButton.setInteractive({ useHandCursor: true })
    this.instructionButton.on("pointerdown", () => this.instructionsButton() )
  }

  update (time, delta) {
    
  }
  
 //Function to change to next scene when button is pressed 
  clickButton () {
    this.sound.play("buttonClick")
    this.scene.start("gameScene")
  }

  //Function to change to next scene when button is pressed 
  instructionsButton () {
    this.sound.play("buttonClick")
    this.scene.start("instructionScene")
  }
  
}

export default MenuScene