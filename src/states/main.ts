import * as Phaser from "phaser";
import PlayerEntity from "../entity/player";
import PlayerSprite from "../sprite/player";
import BackgroundSprite from "../sprite/building";
import BalconyBarrierSprite from "../sprite/balconyBarrier";
import PlayerSystem from "../system/player";

export default class MainState extends Phaser.State {
    private playerSystem: PlayerSystem;
    private playerEntity: PlayerEntity;
    private barrierGroup: Phaser.Group;

    create() {
        let backgroundGroup = this.add.group();
        let backgroundSprite = new BackgroundSprite(this.game);
        backgroundGroup.add(backgroundSprite);

        this.barrierGroup = this.add.group();
        this.barrierGroup.enableBody = true;
        this.barrierGroup.add(new BalconyBarrierSprite(this.game, 100, 100));
        this.barrierGroup.add(new BalconyBarrierSprite(this.game, 100, 650));
        this.barrierGroup.add(new BalconyBarrierSprite(this.game, 700, 100, true));
        this.barrierGroup.add(new BalconyBarrierSprite(this.game, 100, 100, true));

        let playerSprite = new PlayerSprite(this.game);
        this.add.existing(playerSprite);

        this.playerEntity = new PlayerEntity(playerSprite);
        let cursors = this.input.keyboard.createCursorKeys();
        this.playerSystem = new PlayerSystem(this.playerEntity, cursors);
    }

    update() {
        this.playerSystem.update();
        this.physics.arcade.collide(this.playerEntity.sprite, this.barrierGroup);
    }
}