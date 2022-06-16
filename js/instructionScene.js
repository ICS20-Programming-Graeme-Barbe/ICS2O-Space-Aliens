/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Instruction Scene

class InstructionScene extends Phaser.Scene {
  constructor () {
    //Creates a new object that get called with the key "instructionScene"
    super({ key: 'instructionScene' })

    //Variables to hold different objects
    this.instructionSceneBackgroundImage = null
    this.instructionSceneText = null
    this.BackButton = null
    
    //Text style variable 
    this.instructionSceneTextStyle = { font: '27px Courier', fill: "#ffffff", align: 'center' }
    
  }

  //Sets up the base state of the scene
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  //Loads data before processing / displaying it to the user
  preload () {
    console.log('Instruction Scene')

    //Loads background and back button
    this.load.image('instructionSceneBackground', './images/instructionScene.jpg')
    this.load.image('BackButton', './images/BackButton.png')
  }
  
  create (data) {    
   //Displays background
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(1)
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
  
    //Displays text
    this.instructionSceneBodyText = this.add.text(1350, 400, 'Welcome to Angry Birds in Space!\nThis game is like space invaders, but angry bird themed.\nShoot the incoming aliens before they collide with you.\nGet a score of 45 to beat the game.\nUse the arrow keys to move and the space bar to shoot.\nGood luck!', this.instructionSceneTextStyle).setOrigin(0.5)
    
    //Create back button
    this.BackButton = this.add.sprite(150, 150, 'BackButton').setScale(0.6)
    
    //Allows back button to be clicked 
    this.BackButton.setInteractive({ useHandCursor: true })
    this.BackButton.on('pointerdown', () => this.clickButtonBack())
  }
  
 
  update (time, delta) {
  }

  //Function for back button clicked 
  clickButtonBack () {
    this.scene.start('menuScene')
  }
}

export default InstructionScene