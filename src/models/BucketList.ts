// som en mall för hur objeketen ska se ut

export class BucketList {
  constructor(
    public id: number,
    public name: string,
    public place: string,
    public isDone: boolean
    ) {}
}
