// grunden för vår app, där funktionaliteten ligger, som en längning av App

import { useState } from "react";
import { ShowBucketList } from "./ShowBucketList";
import { BucketList } from "../models/BucketList";

export const BucketListApp = () => {
    const [bucketLists, setBucketLists] = useState<BucketList[]>([
        new BucketList (1, "Hoppa fallskärm", "Australien"),
        new BucketList (2, "Besöka Machu Picchu", "Peru"),
        new BucketList (3, "Vandra El Camino Frances", "Spanien"),
        new BucketList (4, "Äta mexikansk tacos", "Mexico")
    ]);

  return (
    <>
      <ShowBucketList />
    </>
  );
};
