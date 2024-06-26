namespace SpriteKind {
    export const star = SpriteKind.create()
    export const star2 = SpriteKind.create()
    export const ultimate_star_rainbow = SpriteKind.create()
    export const star3 = SpriteKind.create()
    export const star4 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ultimate_star_rainbow, function (sprite, otherSprite) {
    game.setGameOverMessage(true, "Congrats you finished in " + ("" + game.runtime()) + " ms")
    game.gameOver(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.setAttribute(Render.attribute.fov, 0.95)
    timer.after(20, function () {
        Render.setAttribute(Render.attribute.fov, 0.9)
    })
    timer.after(30, function () {
        Render.setAttribute(Render.attribute.fov, 0.85)
        timer.after(20, function () {
            Render.setAttribute(Render.attribute.fov, 0.8)
        })
        timer.after(30, function () {
            Render.setAttribute(Render.attribute.fov, 0.75)
            timer.after(20, function () {
                Render.setAttribute(Render.attribute.fov, 0.7)
            })
            timer.after(30, function () {
                Render.setAttribute(Render.attribute.fov, 0.65)
                timer.after(20, function () {
                    Render.setAttribute(Render.attribute.fov, 0.6)
                })
                timer.after(30, function () {
                    Render.setAttribute(Render.attribute.fov, 0.55)
                    timer.after(20, function () {
                        Render.setAttribute(Render.attribute.fov, 0.5)
                    })
                    timer.after(30, function () {
                        Render.setAttribute(Render.attribute.fov, 0.45)
                        timer.after(20, function () {
                            Render.setAttribute(Render.attribute.fov, 0.4)
                        })
                        timer.after(30, function () {
                            Render.setAttribute(Render.attribute.fov, 0.35)
                            timer.after(20, function () {
                                Render.setAttribute(Render.attribute.fov, 0.3)
                            })
                            timer.after(30, function () {
                                Render.setAttribute(Render.attribute.fov, 0.25)
                                timer.after(20, function () {
                                    Render.setAttribute(Render.attribute.fov, 0.2)
                                })
                                timer.after(30, function () {
                                    Render.setAttribute(Render.attribute.fov, 0.15)
                                    timer.after(20, function () {
                                        Render.setAttribute(Render.attribute.fov, 0.1)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.move(mySprite, 100, -100)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Render.setAttribute(Render.attribute.fov, 0.2)
    timer.after(30, function () {
        Render.setAttribute(Render.attribute.fov, 0.3)
        timer.after(30, function () {
            Render.setAttribute(Render.attribute.fov, 0.4)
            timer.after(30, function () {
                Render.setAttribute(Render.attribute.fov, 0.5)
                timer.after(30, function () {
                    Render.setAttribute(Render.attribute.fov, 0.6)
                    timer.after(30, function () {
                        Render.setAttribute(Render.attribute.fov, 1)
                    })
                })
            })
        })
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.star, function (sprite4, otherSprite4) {
    sprites.destroy(mySprite2)
    tiles.setCurrentTilemap(tilemap`level3`)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 . . 2 2 2 . . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 . . . . . . 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.star2)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(32, 24))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.star3, function (sprite5, otherSprite5) {
    sprites.destroy(mySprite5)
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 . . 7 7 7 . . . . 
        . . . 7 7 7 . . . . 7 7 7 . . . 
        . . . 7 7 . . . . . . 7 7 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.star4)
    tiles.setCurrentTilemap(tilemap`level19`)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(22, 26))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.star4, function (sprite2, otherSprite2) {
    sprites.destroy(mySprite6)
    tiles.setCurrentTilemap(tilemap`level18`)
    mySprite4 = sprites.create(img`
        ................................
        ................................
        ................4...............
        ...............444..............
        ..............44444.............
        .............2444444............
        ............22444445............
        ............224444555...........
        ...........22444445555..........
        ..........2244444555557.........
        .........22244445555557.........
        ........2224444455555777........
        ......2222444445555577777.......
        ..2222222244445555577777999999..
        ...22222244444555577779999999...
        ....222224444555577779999999....
        ......22444455557777999999......
        .......244445557777999999.......
        ........4445555777799999........
        ..........555577777999..........
        ...........5577779999...........
        ...........5577779999...........
        ...........7777799999...........
        ..........77777..999aa..........
        ..........7777....9aaa..........
        .........7777......aaaa.........
        .........77.........aaa.........
        ........77...........aaa........
        ........7.............aa........
        .......7...............aa.......
        ................................
        ................................
        `, SpriteKind.ultimate_star_rainbow)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(51, 49))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.star2, function (sprite3, otherSprite3) {
    sprites.destroy(mySprite3)
    tiles.setCurrentTilemap(tilemap`level5`)
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 . . 9 9 9 . . . . 
        . . . 9 9 9 . . . . 9 9 9 . . . 
        . . . 9 9 . . . . . . 9 9 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.star3)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(49, 49))
})
let mySprite4: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
Render.setViewMode(ViewMode.tilemapView)
game.showLongText("Welcome to 3D Mazes. Use WASD to move or arrows, press A to jump. B to zoom", DialogLayout.Full)
if (game.ask("Do you want a ", "tutorial")) {
    game.showLongText("The goal of each level is to collect a star. You will find arrows along the way that will guide you in the right direction. ", DialogLayout.Bottom)
}
Render.setViewMode(ViewMode.raycastingView)
mySprite = sprites.create(img`
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
mySprite = Render.getRenderSpriteVariable()
tiles.setCurrentTilemap(tilemap`level2`)
Render.moveWithController(3, 2, 1)
Render.setAttribute(Render.attribute.fov, 1)
Render.setAttribute(Render.attribute.dirX, 10)
Render.setAttribute(Render.attribute.dirY, 10)
Render.setAttribute(Render.attribute.wallZScale, 1.6)
Render.setViewAngleInDegree(0)
Render.setSpriteAttribute(mySprite, RCSpriteAttribute.ZOffset, randint(0, 7))
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 . . 5 5 5 . . . . 
    . . . 5 5 5 . . . . 5 5 5 . . . 
    . . . 5 5 . . . . . . 5 5 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.star)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(60, 3))
game.onUpdateInterval(500, function () {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.Moving))) {
        animation.runImageAnimation(
        mySprite,
        [img`
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
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
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
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        500,
        false
        )
    }
})
