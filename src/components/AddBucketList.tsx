import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from "@fortawesome/free-solid-svg-icons";

interface IAddBucketListProps {
    iAddBucketList: (newBucketListName: string, newBucketListPlace: string) => void;
};

export const AddBucketList = (props: IAddBucketListProps) => {

    const addIcon = faAdd;
    const [newBucketListName, setNewBucketListName] = useState("");
    const [newBucketListPlace, setNewBucketListPlace] = useState("");

    const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewBucketListName(e.target.value);
    };

    const handlePlaceChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewBucketListPlace(e.target.value);
    };

    const handleClick = () => {
        if (newBucketListName.trim() !== "" || newBucketListPlace.trim() !== "") {
            props.iAddBucketList(newBucketListName, newBucketListPlace)
            setNewBucketListName("");
            setNewBucketListPlace("");
        }
    };

    return (
        <>
        <form>
        <input className="addInput" type="text" placeholder="What to do want to do?" onChange={handleNameChange} value={newBucketListName}/>
        <input className="addInput" type="text" placeholder="Where do you need to go?" onChange={handlePlaceChange} value={newBucketListPlace}/>
        <button className="addBtn" onClick={handleClick}><FontAwesomeIcon icon={addIcon} /></button>
        </form>
        </>
    );
};