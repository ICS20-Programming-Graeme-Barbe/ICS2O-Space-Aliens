/* Global Phaser */

// Graeme All rights reserved
// Created by Graeme Barbe
// Created on June 1 2022
// This is the Instruction Scene

class InstructionScene extends Phaser.Scene {
  constructor () {
    super({ key: 'instructionScene' })
   
    this.instructionSceneBackgroundImage = null
    this.instructionSceneText = null
    this.BackButton = null
    
    
    this.instructionSceneTextStyle = { font: '27px Courier', fill: "#ffffff", align: 'center' }
    
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
   
    console.log('Instruction Scene')
    this.load.image('instructionSceneBackground', './assets/instructionScene.jpg')
    this.load.image('BackButton', './assets/BackButton.png')
  }
  
  create (data) {
   
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(1)
   
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
  
  
    this.instructionSceneBodyText = this.add.text(1350, 400, 'Welcome to Angry Birds in Space!\nThis game is like space invaders, but angry bird themed\nShoot the incoming aliens before they collide with you\nGet a score of 45 the beat the game\nUse the arow keys to move and the space bar to shoot\nGood luck!', this.instructionSceneTextStyle).setOrigin(0.5)
    // create back button
    this.BackButton = this.add.sprite(150, 150, 'BackButton').setScale(0.6)
    // execute clickButtonBack function on button clicked
    this.BackButton.setInteractive({ useHandCursor: true })
    this.BackButton.on('pointerdown', () => this.clickButtonBack())
  }
  
 
  update (time, delta) {
  }
 
  clickButtonBack () {
    this.scene.start('menuScene')
  }
}

export default InstructionScene