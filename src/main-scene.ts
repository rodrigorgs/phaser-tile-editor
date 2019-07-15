import "phaser";

import { Mushroom } from "./mushroom";

export class MainScene extends Phaser.Scene {
  private mushroom: Mushroom;

  constructor() {
    super({ key: "MainScene" });
  }

  preload(): void {
    this.load.image("mushroom", "assets/images/mushroom2.png");
  }

  create(): void {
    this.mushroom = new Mushroom(this, 50, 80, "mushroom");

    this.add.existing(this.mushroom);
  }
}