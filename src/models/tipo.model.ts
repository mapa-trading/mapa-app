

export interface ITipo {
    name: string;
    label: string;
  }

export class MTipo implements ITipo {
    public name!: string;
    public label!: string;

    constructor() {
    }
}