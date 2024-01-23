// som en mall som visar hur vår lista/objekt ska visas upp

import { BucketList } from "../models/BucketList";

interface IShowBucketListProps {
  iBucketList: BucketList[];
  iRemoveBucketList: (id: number) => void;
}

export const ShowBucketList = (props: IShowBucketListProps) => {
  return (
    <>

      {props.iBucketList.map((bucketList) => (
        <div key={bucketList.id}>
          <input type="checkbox" />
          <span>
            {bucketList.name}, {bucketList.place}
          </span>
          <button onClick={() => props.iRemoveBucketList(bucketList.id)}>Ta bort</button>
        </div>
      ))}
    </>
  );
};

// behöver en onClick på ta bort knappen, behövs en anonym funktion då? pga parameter?, isf skriva bucketList.id i parametern sen
// behöver onChange på lägg till knappen?
