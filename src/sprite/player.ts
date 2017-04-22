import * as Phaser from "phaser";
import {TEXTURES} from "../constants";

export default class PlayerSprite extends Phaser.Sprite {
    constructor(game: Phaser.Game) {
        super(game, game.world.width / 2, game.world.height / 2, TEXTURES.PLAYER);
        game.physics.enable(this, Phaser.Physics.ARCADE);
    }
}