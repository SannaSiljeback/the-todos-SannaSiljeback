// som en mall som visar hur vår lista/objekt ska visas upp

import { BucketList } from "../models/BucketList";
import './ShowBucketList.css';

interface IShowBucketListProps {
  iBucketList: BucketList[];
  iRemoveBucketList: (id: string) => void;
  iBucketListCheckbox: (id: string) => void;
}


export const ShowBucketList = (props: IShowBucketListProps) => {
  return (
    <>

      {props.iBucketList.map((bucketList) => (
        <div key={bucketList.id}>
          <input type="checkbox" checked={bucketList.isDone} onChange={() => props.iBucketListCheckbox(bucketList.id)}/>
          <span className={bucketList.isDone ? "done" : ""}>
            {bucketList.name}, {bucketList.place}
          </span>
          <button onClick={() => props.iRemoveBucketList(bucketList.id)}>Ta bort</button>
        </div>
      ))}
    </>
  );
};
