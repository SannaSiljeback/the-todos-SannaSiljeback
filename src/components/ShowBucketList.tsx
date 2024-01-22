// som en mall som visar hur vår lista/objekt ska visas upp

import { BucketList } from "../models/BucketList";

interface IShowBucketListProps {
  bucketList: BucketList[];
}

export const ShowBucketList = (props: IShowBucketListProps) => {
  return (
    <>
      <h1>My awesome bucket list</h1>
      {props.bucketList.map((bucketList) => (
        <ul key={bucketList.id}>
          <li>
            {bucketList.name}, {bucketList.place}
          </li>
        </ul>
      ))}
    </>
  );
};
