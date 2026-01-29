class YoshiPixie extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.points = pointValue
        this.moveSpeed = game.settings.spaceshipSpeed
        this.startingY = y;
    }

    update(){
        //move spaceship left
        this.x -= this.moveSpeed * 2
        this.y += Math.sin(this.x * 0.02) * 7;  // Add a sine wave movement effect

        //wrap from left to right
        if(this.x <= 0 - this.width){
            this.x = game.config.width
            this.y = this.startingY        }
    }

    reset(){
        this.x = game.config.width
        this.y = this.startingY
    }
}