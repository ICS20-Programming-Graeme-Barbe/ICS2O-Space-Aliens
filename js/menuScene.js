/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  //Creates a new object that get called with the key "menueScene"
  constructor () {
    super({ key: "menuScene" })
    this.menuSceneBackgroundImage = null
  }

  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Menu Scene")
    this.load.image("menuSceneBackgroundImage", "./assets/aliens_screen_image2.jpg")
    this.load.image('startButton', "./assets/start.png")
  }

  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground").setScale(2.75)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, (1820 / 2) + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton() )
  }

  update (time, delta) {
    clickButton () {
      this.scene.start("gameScene")
    }
  }
}

export default MenuScene