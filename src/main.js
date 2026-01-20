/* Robert Stager
*  Rocket Patrol: Earths Final Defence
*  Time for completion: ~
*  Mods choses from the list below 
    * 1. New spaceship type (w/ new artwork) (5)
    * 2. Implement a new timing/scoring mechanism that adds 
         time to the clock for successful hits and subtracts time for misses (5)
    * 3 Implement mouse control for player movement and mouse click to fire (5)
    * 4. Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (5)
*/
     let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config)

//reserve keyboard bindings 
let keyFIRE, keyRESET, keyLEFT, keyRIGHT
//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3



/* TO DO / NOTES
+ I have changed the way firing and moving works so 
    there is some code that it no longer used but
    I still have it commented out in case I want to revert
- add mouse control instructions to menu screen
- add particle explosion on hit
- Add new spaceshit type
- add time increase/decrease on hit/miss
- Figure out phaser emitter for particle effects
*/
