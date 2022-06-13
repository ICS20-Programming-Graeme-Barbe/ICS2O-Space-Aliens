/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Instruction Scene

class InstructionScene extends Phaser.Scene {
  //Creates a new object that get called with the key "instructionScene"
  constructor () {
    super({ key: "instructionScene" })

    this.instructionSceneBackgroundImage = null
  }

  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Instruction Scene")

    //Loads images for background and button
    this.load.image("instructionSceneBackgroundImage", "./assets/instructionScene.jpg")

  }

  create (data) {
    //Displays background 
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, "instructionSceneBackgroundImage")
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
  }

  update (time, delta) {
  }
}

export default InstructionScene