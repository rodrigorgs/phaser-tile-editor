import "phaser";

import { Mushroom } from "./mushroom";

export class MainScene extends Phaser.Scene {
  private mushroom: Mushroom;
  private layer: Phaser.Tilemaps.DynamicTilemapLayer;
  private marker: Phaser.GameObjects.Graphics;

  constructor() {
    super({ key: "MainScene" });
  }

  preload(): void {
    this.load.image("mushroom", "assets/images/mushroom2.png");
    this.load.image("spritesheet", "assets/images/spritesheet.png");
  }

  create(): void {
    this.createTileset();
    this.createMarker();

    this.mushroom = new Mushroom(this, 300, 80, "mushroom");
    this.add.existing(this.mushroom);
  }

  createMarker() {
    this.marker = this.add.graphics();
    this.marker.lineStyle(5, 0xffffff, 1);
    this.marker.strokeRect(0, 0, 16, 16);
    this.marker.lineStyle(3, 0xff4f78, 1);
    this.marker.strokeRect(0, 0, 16, 16);
  }

  createTileset() {
    const level = [
      [  0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0 ],
      [ -1,   1,   2,   3,  -1,  -1,  -1,   1,   2,   3,  -1 ],
      [ -1,   5,   6,   7,  -1,  -1,  -1,   5,   6,   7,  -1 ],
      [ -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
      [ -1,  -1,  -1,  14,  13,  14,  -1,  -1,  -1,  -1,  -1 ],
      [ -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
      [ -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
      [ -1,  -1,  14,  14,  14,  14,  14,  -1,  -1,  -1,  15 ],
      [ -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  15,  15 ],
      [ -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  15,  15,  15 ],
      [  0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0 ]
    ];
  
    const tilemap = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    const tileset = tilemap.addTilesetImage("spritesheet");
    this.layer = tilemap.createDynamicLayer(0, tileset, 0, 0);
  }

  update(time: number, delta: number) {
    const worldXY = this.input.activePointer.positionToCamera(this.cameras.main) as Phaser.Math.Vector2;

    const tileXY = this.layer.worldToTileXY(worldXY.x, worldXY.y);
    const snappedWorldXY = this.layer.tileToWorldXY(tileXY.x, tileXY.y);
    this.marker.setPosition(snappedWorldXY.x, snappedWorldXY.y);

    if (this.input.manager.activePointer.isDown) {
      this.layer.putTileAtWorldXY(0, worldXY.x, worldXY.y);
    }
  }
  
}