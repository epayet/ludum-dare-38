import * as Phaser from "phaser";

export default class PlayerEntity {
    public sprite: Phaser.Sprite;

    constructor (sprite: Phaser.Sprite) {
        this.sprite = sprite;
    }
}