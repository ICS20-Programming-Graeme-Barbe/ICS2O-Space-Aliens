/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  //Creates a new object that get called with the key "titleScene"
  constructor () {
    super({ key: "titleScene" })

    //Variables to hold different objects
    this.titleSceneBackgroundImage = null
    this.startButton = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: "90px Courier", fill: "#900603", align: "center", }
  }

  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Title Scene")
    this.load.image("titleSceneBackground", "./images/titleScene.jpg")
    this.load.image("startButton", "./images/startButton.png")
  }

  create (data) {
    //Displays title scene 
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, "titleSceneBackground").setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2, "startButton")

    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton() )

    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) - 450, "Angry Birds in Space", this.titleSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta) {
  }

  clickButton() {
    this.scene.switch("menuScene")
  }
  
}

export default TitleScene