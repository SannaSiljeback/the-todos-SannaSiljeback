import { BucketList } from "../models/BucketList";
import './ShowBucketList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

interface IShowBucketListProps {
  iBucketList: BucketList[];
  iRemoveBucketList: (id: string) => void;
  iBucketListCheckbox: (id: string) => void;
}

export const ShowBucketList = (props: IShowBucketListProps) => {
  const trashCanIcon = faTrashAlt;

  return (
    <>
    <div className="itemDiv">
      {props.iBucketList.map((bucketList) => (
        <div className="listItems" key={bucketList.id}>
          <input type="checkbox" checked={bucketList.isDone} onChange={() => props.iBucketListCheckbox(bucketList.id)}/>
          <span className={bucketList.isDone ? "done" : ""}>
            {bucketList.name}, {bucketList.place}
          </span>
          <button className="deleteBtn" onClick={() => props.iRemoveBucketList(bucketList.id)}><FontAwesomeIcon icon={trashCanIcon} /></button>
      
        </div>
      ))}
      </div>
    </>
  );
};
