controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti, randint(100, 600))
})
let mySprite: Sprite = null
scene.setBackgroundColor(2)
game.splash("Hello Person!")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f f f f f f f f f f f f f f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f f f f f f f f f f f f f f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 f f f f 2 2 2 2 f . 
    . f 2 2 2 2 f . . f 2 2 2 2 f . 
    . f 2 2 2 2 f . . f 2 2 2 2 f . 
    . f f f f f f . . f f f f f f . 
    `, SpriteKind.Player)
