/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {

    //Creates a new object that get called with the key "menueScene"
    super({ key: "menuScene" })

    //Variables to images
    this.menuSceneBackgroundImage = null
    this.startButton = null;

    //Variable for boolen audio loop 
    this.audioPlaying = false
  }

  
  //Sets up the base state of the scene
  init (data) {

    //Sets color to white 
    this.cameras.main.setBackgroundColor("ffffff")
  }

  
  //Loads data before processing / displaying it to the user
  preload () {

    //Prints menu scene to the console
    console.log("Menu Scene")

    //Loads images for background and buttons
    this.load.image("menuSceneBackgroundImage", "./images/background.jpg")
    this.load.image('playButton', "./images/button.png")
    this.load.image("instructionButton", "./images/instructions.png")

    //Loads sounds
    this.load.audio("gameSceneMusic", "./sounds/gameSceneMusic.mp3")
    this.load.audio("buttonClick", "./sounds/buttonClicks.wav")
  }

  
  create (data) {

    //If statement for audio
    if (this.audioPlaying === false) {

      //Creates varible to play the music 
      var audio = new Audio("./sounds/gameSceneMusic.mp3")

      //Plays the music
      audio.play()

      //Loops the music 
      audio.loop = true

      //Stops the if statement from running again
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

    //Allows button to be used when pressed 
    this.instructionButton.setInteractive({ useHandCursor: true })
    this.instructionButton.on("pointerdown", () => this.instructionsButton() )
  }

  
  update (time, delta) {
  }

  
 //Function to change to next scene when button is pressed 
  clickButton () {

    //Plays sound
    this.sound.play("buttonClick")

    //Starts game scene
    this.scene.start("gameScene")
  }

  //Function to change to next scene when button is pressed 
  instructionsButton () {

    //Plays sound
    this.sound.play("buttonClick")

    //Starts instruction scene
    this.scene.start("instructionScene")
  }
}

export default MenuScene