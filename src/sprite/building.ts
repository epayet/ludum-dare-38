import * as Phaser from "phaser";
import {TEXTURES} from "../constants";

export default class BackgroundSprite extends Phaser.Sprite {
    constructor(game: Phaser.Game) {
        super(game, 0, 0, TEXTURES.BACKGROUND);
    }
}