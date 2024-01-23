import { ChangeEvent, useState } from "react";

interface IAddBucketListProps {
    addBucketList: (newBucketList: string) => void;
};

export const AddBucketList = (props: IAddBucketListProps) => {
    const [newBucketList, setNewBucketList] = useState("");

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setNewBucketList(event.target.value);
    };

    return (
        <>
        <input type="text" onChange={handleChange} value={newBucketList} />
        <button onClick={() => props.addBucketList(newBucketList)}>Lägg till</button>
        </>
    );
};

//handleClick på knapp
// onChange på input, även value på input?