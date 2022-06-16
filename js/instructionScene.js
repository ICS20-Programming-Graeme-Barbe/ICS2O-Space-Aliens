/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Instruction Scene

class InstructionScene extends Phaser.Scene {
  constructor () {
    
    //Creates a new object that get called with the key "instructionScene"
    super({ key: 'instructionScene' })

    //Variables to images
    this.instructionSceneBackgroundImage = null
    this.BackButton = null

    //Variable to hold text and text style 
    this.instructionSceneText = null
    this.instructionSceneTextStyle = { font: '27px Courier', fill: "#ffffff", align: 'center' }
    
  }

  
  //Sets up the base state of the scene
  init (data) {

    //Sets the color to white
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  
  //Loads data before processing / displaying it to the user
  preload () {

    //Prints Instruction Scene to the console 
    console.log('Instruction Scene')

    //Loads background and back button
    this.load.image('instructionSceneBackground', './images/instructionScene.jpg')
    this.load.image('BackButton', './images/BackButton.png')

    //Loads sounds
    this.load.audio("buttonClick", "./sounds/buttonClicks.wav")
  }

  
  create (data) {    
   //Displays background
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(1)
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
  
    //Displays text
    this.instructionSceneBodyText = this.add.text(1350, 400, 'Welcome to Angry Birds in Space!\nThis game is like space invaders, but angry bird themed.\nShoot the incoming aliens before they collide with you.\nGet a score of 45 to beat the game.\nUse the arrow keys to move and the space bar to shoot.\nGood luck!', this.instructionSceneTextStyle).setOrigin(0.5)
    
    //Displays back button
    this.BackButton = this.add.sprite(150, 150, 'BackButton').setScale(0.6)
    
    //Allows back button to be clicked 
    this.BackButton.setInteractive({ useHandCursor: true })
    this.BackButton.on('pointerdown', () => this.clickButtonBack())
  }
  
 
  update (time, delta) {
  }

  
  //Function for back button clicked 
  clickButtonBack () {

    //Plays sound
    this.sound.play("buttonClick")

    //Starts menu Scene 
    this.scene.start('menuScene')
  }
}

export default InstructionScene