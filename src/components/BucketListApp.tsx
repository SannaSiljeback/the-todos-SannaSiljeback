// grunden för vår app, där funktionaliteten ligger, som en förlängning av App, är vår root komponent

import { useState } from "react";
import { ShowBucketList } from "./ShowBucketList";
import { BucketList } from "../models/BucketList";
import { AddBucketList } from "./AddBucketList";
import { v4 as uuidv4 } from 'uuid';

export const BucketListApp = () => {
  // hämta information från localstorage, syntax:
  // localStorage.getItem(key:string): string;
  // const listStorage = localStorage.getItem("bucketLists");
  // const listStorageAsObject = JSON.parse(listStorage);
  const hardCodedValues = [
    new BucketList(uuidv4(), "Hoppa fallskärm", "Australien", true),
    new BucketList(uuidv4(), "Besöka Machu Picchu", "Peru", false),
    new BucketList(uuidv4(), "Vandra El Camino Frances", "Spanien", false),
    new BucketList(uuidv4(), "Äta mexikansk tacos", "Mexico", false),
    new BucketList(uuidv4(), "Åka tåg mellan Kandy och Ella", "Sri Lanka", true),
  ];

  // går göra på en rad: sätts i use statet då
  //state för local storage:
  // const [bucketListsStorage, setBucketListsStorage] = useState(JSON.parse(localStorage.getItem("bucketLists") || "[]"));
  // skippa [] och ersätta medsin hårdkodade lista? blir konstigt när man uppdaterar

  const [bucketLists, setBucketLists] = useState<BucketList[]>(
    JSON.parse(localStorage.getItem("listStorage") || JSON.stringify(hardCodedValues)));


  // funktion för att ta bort ett helt objekt ur listan
  const removeBucketListFunction = (id: string) => {
    setBucketLists(bucketLists.filter((bucketList) => bucketList.id !== id));

  };


  // funktion för att lägga till ett helt objekt i listan
  const addBucketListFunction = (newBucketListName: string, newBucketListPlace: string) => {
    const newId= uuidv4();
    setBucketLists([...bucketLists, new BucketList(newId, newBucketListName, newBucketListPlace, false)]);

    console.log(bucketLists);

  
    //localStorage här? spara ner i localstorage, syntax:
    localStorage.setItem("listStorage",JSON.stringify([...bucketLists, new BucketList(newId, newBucketListName, newBucketListPlace, false)]));
   
  };
  

  return (
    <>
      <h1>My Awesome Bucket List</h1>

      <AddBucketList iAddBucketList={addBucketListFunction} />
      <ShowBucketList
        iBucketList={bucketLists}
        iRemoveBucketList={removeBucketListFunction}
      />
    </>
  );
};

// inuti en tagg som vi vill visa upp med: {bucketListStorage[0].name}
