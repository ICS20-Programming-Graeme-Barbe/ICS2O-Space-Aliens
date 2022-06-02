/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: "titleScene" })
  }

  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload () {
    console.log("Title Scene")
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default TitleScene