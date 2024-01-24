import { ChangeEvent, useState } from "react";

interface IAddBucketListProps {
    iAddBucketList: (newBucketListName: string, newBucketListPlace: string) => void;
};

export const AddBucketList = (props: IAddBucketListProps) => {

    const [newBucketListName, setNewBucketListName] = useState("");

    const [newBucketListPlace, setNewBucketListPlace] = useState("");

    const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewBucketListName(e.target.value);
    };

    const handlePlaceChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewBucketListPlace(e.target.value);
    };

    // const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    //     setNewBucketListName(e.target.value);
    //     setNewBucketListPlace(e.target.value);
    // };

    //bara en handlechange, lägga ihop dom? den över går ej, hur?


    //funktion med ifsats för att inte kunna lägga till tomma inputs, även för att nollställa inputs efteråt
    const handleClick = () => {
        if (newBucketListName.trim() !== "" || newBucketListPlace.trim() !== "") {
            props.iAddBucketList(newBucketListName, newBucketListPlace)
            setNewBucketListName("");
            setNewBucketListPlace("");
        }
    };


    return (
        <>
        <input type="text" placeholder="Vad vill du göra?" onChange={handleNameChange} value={newBucketListName}/>
        <input type="text" placeholder="Vart behöver du åka?" onChange={handlePlaceChange} value={newBucketListPlace}/>
        <button onClick={handleClick}>Lägg till</button>
        </>
    );
};