import { useState } from "react";
import { ShowBucketList } from "./ShowBucketList";
import { BucketList } from "../models/BucketList";
import { AddBucketList } from "./AddBucketList";
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaAsc } from "@fortawesome/free-solid-svg-icons";

export const BucketListApp = () => {

  const sortIcon = faSortAlphaAsc;

  const hardCodedValues = [
    new BucketList(uuidv4(), "Hoppa fallskärm", "Australien", true),
    new BucketList(uuidv4(), "Besöka Machu Picchu", "Peru", false),
    new BucketList(uuidv4(), "Vandra El Camino Frances", "Spanien", false),
    new BucketList(uuidv4(), "Äta mexikansk tacos", "Mexico", false),
    new BucketList(uuidv4(), "Åka tåg mellan Kandy och Ella", "Sri Lanka", true),
  ];

  const [bucketLists, setBucketLists] = useState<BucketList[]>(
    JSON.parse(localStorage.getItem("listStorage") || JSON.stringify(hardCodedValues)));

  const removeBucketListFunction = (id: string) => {
    setBucketLists(bucketLists.filter((bucketList) => bucketList.id !== id));
    localStorage.setItem("listStorage",JSON.stringify(bucketLists.filter((bucketList) => bucketList.id !== id)));
  };

  const addBucketListFunction = (newBucketListName: string, newBucketListPlace: string) => {
    const newId= uuidv4();
    setBucketLists([...bucketLists, new BucketList(newId, newBucketListName, newBucketListPlace, false)]);
    localStorage.setItem("listStorage",JSON.stringify([...bucketLists, new BucketList(newId, newBucketListName, newBucketListPlace, false)]));
  };

  const checkboxFunction = (id: string) => {
    setBucketLists(prevBucketLists => {
        const updatedBucketLists = prevBucketLists.map(bucketlist =>
        bucketlist.id === id ? {...bucketlist, isDone: !bucketlist.isDone} : bucketlist
        );
        localStorage.setItem("listStorage",JSON.stringify(updatedBucketLists));
        return updatedBucketLists;
        });  
  };

  const handleSort = () => {
    setBucketLists([...bucketLists].sort((a, b) => a.place.localeCompare(b.place)));
    localStorage.setItem("listStorage",JSON.stringify([...bucketLists].sort((a, b) => a.place.localeCompare(b.place))));
  };

  return (
    <>
      <div className="container">
       <div className="row">
          <div className="col header">
            <h1>My Awesome Bucket List</h1>
          </div>
       </div>

        <div className="row">
            <div className="col">
              <AddBucketList iAddBucketList={addBucketListFunction} />
            </div>
            <div className="col">
               <div className="row">
                  <ShowBucketList
                     iBucketList={bucketLists}
                     iRemoveBucketList={removeBucketListFunction}
                    iBucketListCheckbox={checkboxFunction}
                   />
                </div> 
                <div className="row">
                   <div className="sortDiv">
                      <button className="sortBtn" onClick={handleSort}><FontAwesomeIcon icon={sortIcon} /></  button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
