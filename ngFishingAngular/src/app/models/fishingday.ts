export class Fishingday {
  id: number;
  location: string;
  fishingStyle: string;
  fishingMode: string;
  amountCaught: number;



  constructor(id?: number, location?: string, fishingStyle?: string, fishingMode?: string,
    amountCaught?: number) {
      this.id = id;
      this.location = location;
      this.fishingStyle = fishingStyle;
      this.fishingMode = fishingMode;
      this.amountCaught = amountCaught;
    }
}
