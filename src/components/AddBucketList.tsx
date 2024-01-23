import { ChangeEvent, useState } from "react";

interface IAddBucketListProps {
    iAddBucketList: (newBucketListName: string, newBucketListPlace: string) => void;
};

export const AddBucketList = (props: IAddBucketListProps) => {
    const [newBucketListName, setNewBucketListName] = useState("");

    const [newBucketListPlace, setNewBucketListPlace] = useState("");

    const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
        // setNewBucketListName("");
        setNewBucketListName(e.target.value);
    };

    const handlePlaceChange = (e:ChangeEvent<HTMLInputElement>) => {
        // setNewBucketListPlace("");
        setNewBucketListPlace(e.target.value);
    };

    //bara en handlechange, lägga ihop dom

    return (
        <>
        <input type="text" placeholder="Vad vill du göra?" onChange={handleNameChange} value={newBucketListName} />
        <input type="text" placeholder="Vart behöver du åka?" onChange={handlePlaceChange} value={newBucketListPlace} />
        <button onClick={() => props.iAddBucketList(newBucketListName, newBucketListPlace)}>Lägg till</button>
        </>
    );
};

//handleClick på knapp
// onChange på input, även value på input?