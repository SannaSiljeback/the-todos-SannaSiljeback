// grunden för vår app, där funktionaliteten ligger, som en förlängning av App, är vår root komponent

import { useState } from "react";
import { ShowBucketList } from "./ShowBucketList";
import { BucketList } from "../models/BucketList";
import { AddBucketList } from "./AddBucketList";

export const BucketListApp = () => {
  const [bucketLists, setBucketLists] = useState<BucketList[]>([
    new BucketList(1, "Hoppa fallskärm", "Australien", true),
    new BucketList(2, "Besöka Machu Picchu", "Peru", false),
    new BucketList(3, "Vandra El Camino Frances", "Spanien", false),
    new BucketList(4, "Äta mexikansk tacos", "Mexico", false),
    new BucketList(5, "Åka tåg mellan Kandy och Ella", "Sri Lanka", true),
  ]);

  // funktion för att ta bort ett helt objekt ur listan
  const removeBucketListFunction = (id: number) => {
      setBucketLists(bucketLists.filter((bucketList) => bucketList.id !== id));
      
  };

  // funktion för att lägga till ett helt objekt i listan
  const addBucketListFunction = (newBucketListName: string, newBucketListPlace: string) => {
    setBucketLists([...bucketLists, new BucketList(bucketLists.length +1, newBucketListName, newBucketListPlace, false)]);

    //state för local storage:
    // const [bucketListsStorage, setBucketListsStorage] = useState(JSON.parse(localStorage.getItem("bucketLists") || "[]"));


    //localStorage här? vill ju spara värdet från våra inputs? spara ner i localstorage, syntax:
    localStorage.setItem("listStorage", JSON.stringify(bucketLists));
    // vill vi spara ner input.value här ist för bucketLists?

    // hämta information från localstorage, syntax:
    // localStorage.getItem(key:string): string;
    // const listStorage = localStorage.getItem("bucketLists");
    // const listStorageAsObject = JSON.parse(listStorage);

    // går göra på en rad: sätts i use statet då
    // JSON.parse(localStorage.getItem("bucketLists") || "[]")
    // skippa [] och ersätta medsin hårdkodade lista?

  };

  return (
    <>
      <h1>My Awesome Bucket List</h1>

      <AddBucketList iAddBucketList={addBucketListFunction}/>
      <ShowBucketList iBucketList={bucketLists} iRemoveBucketList={removeBucketListFunction}/>

  
    </>
  );
};

// inuti en tagg som vi vill visa upp med: {bucketListStorage[0].name}
