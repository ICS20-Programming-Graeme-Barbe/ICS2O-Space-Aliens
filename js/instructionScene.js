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
    
    
    this.instructionSceneTextStyle = { font: '40px Verdana', backgroundColor: '#C4A484', fontStyle: 'bold', fill: '#0047AB', align: 'center' }
    
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
   
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(0.8)
   
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
  
    this.instructionSceneTitleText = this.add.text(1920 / 2, 1080 / 2 + -170, 'Instructions', this.instructionSceneTitleTextStyle).setOrigin(0.5)
  
    this.instructionSceneBodyText = this.add.text(1920 / 2, 1080 / 2 + 60, 'Welcome to Angry Birds n Space!\nThis game is like space invaders, but angry bird themed.\nShoot the incoming aliens before they collide with you, ending your game./nUse the arow keys to move and the space bar to shoot/nGood luck!', this.instructionSceneBodyTextStyle).setOrigin(0.5)
    // create back button
    this.BackButton = this.add.sprite(350, (1080 / 6) + 1, 'BackButton').setScale(0.37)
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