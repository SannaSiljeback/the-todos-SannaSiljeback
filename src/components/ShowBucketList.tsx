// som en mall som visar hur vår lista/objekt ska visas upp

// import { useState } from "react";
import { BucketList } from "../models/BucketList";

interface IShowBucketListProps {
  bucketList: BucketList[];
  removeBucketList: (id: number) => void;
}

export const ShowBucketList = (props: IShowBucketListProps) => {
  // const [bucketLists, setBucketLists] = useState<BucketList[]>([
  //   new BucketList(1, "Hoppa fallskärm", "Australien", true),
  //   new BucketList(2, "Besöka Machu Picchu", "Peru", false),
  //   new BucketList(3, "Vandra El Camino Frances", "Spanien", false),
  //   new BucketList(4, "Äta mexikansk tacos", "Mexico", false),
  //   new BucketList(5, "Åka tåg mellan Kandy och Ella", "Sri Lanka", true),
  // ]);

  return (
    <>
      <h1>My Awesome Bucket List</h1>
      <input type="text" />
      <button>Lägg till</button>
      {props.bucketList.map((bucketList) => (
        <div key={bucketList.id}>
          <input type="checkbox" />
          <span>
            {bucketList.name}, {bucketList.place}
          </span>
          <button onClick={() => props.removeBucketList(bucketList.id)}>Ta bort</button>
        </div>
      ))}
    </>
  );
};

// behöver en onClick på ta bort knappen, behövs en anonym funktion då? pga parameter?, isf skriva bucketList.id i parametern sen
// behöver onChange på lägg till knappen?
