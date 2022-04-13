import {Item} from "../item/item";

export class Inventory {
    private inventory: Item[];

    constructor() {
        this.inventory = [];
    }

    public get getInventory() {
        return this.inventory;
    }
}