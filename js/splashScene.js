/* global Phaser */

// All rights reserved Mr. Coxall - Modified by Graeme
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {

     //Creates a new object that get called with the key "splashScene"
    super({ key: "splashScene" })
  }

  
  //Sets up the base state of the scene
  init (data) {

    //Sets color to white 
    this.cameras.main.setBackgroundColor("ffffff")
  }

  
  //Loads data before processing / displaying it to the user 
  preload () {

    //Prints splash scene to the console 
    console.log("Splash Scene")

    //Loads image 
    this.load.image("splashSceneBackground", "./images/splashSceneImage.png")
  }


  create (data) {    
    //Displays splash scene
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, "splashSceneBackground")
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  update (time, delta) {
    //If statement to switch to title screen only if enough time has passed
    if (time > 3000) {

      //Switches to the title scene
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene