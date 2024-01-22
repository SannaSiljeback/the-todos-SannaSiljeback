// grunden för vår app, där funktionaliteten ligger, som en längning av App

import { useState } from "react";
import { ShowBucketList } from "./ShowBucketList";
import { BucketList } from "../models/BucketList";

export const BucketListApp = () => {
  const [bucketLists, setBucketLists] = useState<BucketList[]>([
    new BucketList(1, "Hoppa fallskärm", "Australien", true),
    new BucketList(2, "Besöka Machu Picchu", "Peru", false),
    new BucketList(3, "Vandra El Camino Frances", "Spanien", false),
    new BucketList(4, "Äta mexikansk tacos", "Mexico", false),
    new BucketList(5, "Åka tåg mellan Kandy och Ella", "Sri Lanka", true),
  ]);

  return (
    <>
      <ShowBucketList bucketList={bucketLists} />
    </>
  );
};
