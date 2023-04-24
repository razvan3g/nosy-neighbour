function initNosyNeibourgh () {
    Nosy_Neibourgh = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
}
let Nosy_Neibourgh: Sprite = null
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dffffffffffffffffffffffffffffffffffffffd................................................................................dffffffffffffffffffffffffffffffffffffffd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dffffffffffffffffffffffffffffffffffffffd................................................................................dffffffffffffffffffffffffffffffffffffffd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dffffffffffffffffffffffffffffffffffffffd................................................................................dffffffffffffffffffffffffffffffffffffffd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................ffffffffffffffffffffffffffffffff.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dffffffffffffffffffffffffffffffffffffffd...................f222222222222222222222222222222f.............................dffffffffffffffffffffffffffffffffffffffd
    dddddddddddddddddddddddddddddddddddddddd...................f222222222222222222222222222222f.............................dddddddddddddddddddddddddddddddddddddddd
    dffffffffffffffffffffffffffffffffffffffd...................f222222222222222222222222222222f.............................dffffffffffffffffffffffffffffffffffffffd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................f222222222222222222222222222222f.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd...................ffffffffffffffffffffffffffffffff.............................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dffffffffffffffffffffffffffffffffffffffd................................................................................dffffffffffffffffffffffffffffffffffffffd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dffffffffffffffffffffffffffffffffffffffd................................................................................dffffffffffffffffffffffffffffffffffffffd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dfddddddddddddddddddddddddddddddddddddfd................................................................................dfddddddddddddddddddddddddddddddddddddfd
    dffffffffffffffffffffffffffffffffffffffd................................................................................dffffffffffffffffffffffffffffffffffffffd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd................................................................................dddddddddddddddddddddddddddddddddddddddd
    `)
game.onUpdateInterval(5000, function () {
	
})
