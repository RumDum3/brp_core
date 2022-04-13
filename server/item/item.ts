export class Item {
    private identifier: string;
    private readonly label: string;
    private slot: number;
    private metadata: {[key: string]: string};

    constructor(identifier: string, label: string, slot: number, metadata: {[key: string]: string}) {
        this.identifier = identifier;
        this.label = label;
        this.slot = slot;
        this.metadata = metadata;
    }

    public get getLabel() {
        return this.label;
    }

    public get getSlot(): number {
        return this.slot;
    }

    public get getMetadata(): {[item: string]: string} {
        return this.metadata;
    }

    public set setSlot(value: number) {
        this.slot = value;
    }

    public setMetadata(key: string, value: string) {
        this.metadata[key] = value;
    }
}