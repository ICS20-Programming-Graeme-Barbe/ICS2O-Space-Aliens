/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {

    //Creates a new object that get called with the key "titleScene"
    super({ key: "titleScene" })

    //Variables to images
    this.titleSceneBackgroundImage = null
    this.startButton = null

    //Varibles to hold text and text style
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: "90px Courier", fill: "#900603", align: "center", }
  }

  
  //Sets up the base state of the scene
  init (data) {

    //Sets the color to white 
    this.cameras.main.setBackgroundColor("ffffff")
  }

  
  //Loads data before processing / displaying it to the user
  preload () {

    //Prints title scene to the console 
    console.log("Title Scene")

    //Loads images
    this.load.image("titleSceneBackground", "./images/titleScene.jpg")
    this.load.image("startButton", "./images/startButton.png")

    //Loads audio
    this.load.audio("buttonClick", "./sounds/buttonClicks.wav")
  }

  
  create (data) {
    
    //Displays title scene 
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, "titleSceneBackground").setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    //Displays start button
    this.startButton = this.add.sprite(1920 / 2, 1080 / 2, "startButton")

    //Allows the start button to be clicked
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton() )

    //Displays the title scene text 
    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) - 450, "Angry Birds in Space", this.titleSceneTextStyle).setOrigin(0.5)
  }

  
  update (time, delta) {
  }

  
  //Function when the button is clicked
  clickButton() {

    //Plays sound
    this.sound.play("buttonClick")

    //Starts menu scene
    this.scene.switch("menuScene")
  }
}

export default TitleScene