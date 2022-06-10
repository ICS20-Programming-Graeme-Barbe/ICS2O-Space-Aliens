/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Instruction Scene

class InstructionScene extends Phaser.Scene {
  //Creates a new object that get called with the key "instructionScene"
  constructor () {
    super({ key: "instructionScene" })
  }

  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  //Loads data before processing / displaying it to the user
  preload () {
    console.log("Instruction Scene")
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default InstructionScene