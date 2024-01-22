// som en mall som visar hur vår lista/objekt ska visas upp

import { BucketList } from "../models/BucketList";

interface IShowBucketListProps {
  bucketList: BucketList[];
}

export const ShowBucketList = (props: IShowBucketListProps) => {
  return (
    <>
      <h1>My Awesome Bucket List</h1>
      <input type="text" />
      <button>Lägg till</button>
      {props.bucketList.map((bucketList) => (
        <div key={bucketList.id}>
         <input type="checkbox"/>
         <span> {bucketList.name}, {bucketList.place} </span>
         <button >Ta bort</button> 
        </div>
      ))}
    </>
  );
};

// behöver en onClick på knappen, behövs en anonym funktion då? pga parameter?, isf skriva bucketList.id i parametern sen