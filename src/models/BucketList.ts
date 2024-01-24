// som en mall för hur objeketen ska se ut

export class BucketList {
  constructor(
    public id: string,
    public name: string,
    public place: string,
    public isDone: boolean
  ) {}
}

// behövs boolean om jag ej ska använda att den redan är checkad?
