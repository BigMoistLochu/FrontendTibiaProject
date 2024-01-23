import {useState} from "react";
import characterData from '../datas/characters.json';
export default function useCharacterStorage()
{
    const [value,setValue] = useState(characterData);

    return [value,setValue];
}