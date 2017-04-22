import * as Phaser from "phaser";
import {TEXTURES} from "../constants";

export default class BalconyBarrierSprite extends Phaser.Sprite {
    constructor(game: Phaser.Game, x:number, y:number, vertical: boolean = false) {
        super(game, x, y, vertical ? TEXTURES.BALCONY_BARRIER_VERTICAL : TEXTURES.BALCONY_BARRIER);
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.immovable = true;
    }
}