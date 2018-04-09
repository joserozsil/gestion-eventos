export class Chronology {
    type: string;
    date: string;
    supervisions: any [];
    isDelete?: string

    constructor(chronology:any) {
        this.type = chronology.type;
        this.date = chronology.date;
        this.supervisions = chronology.supervisions;
        this.isDelete = chronology.isDelete;
    }
}