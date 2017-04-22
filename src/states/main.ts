import * as Phaser from "phaser";
import PlayerEntity from "../entity/player";
import PlayerSprite from "../sprite/player";

export default class MainState extends Phaser.State {

    create() {
        let playerSprite = new PlayerSprite(this.game);
        // let playerEntity = new PlayerEntity(playerSprite);
        this.add.existing(playerSprite);
    }

    update() {

    }
}