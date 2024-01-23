import React from "react";
import { useState } from "react";
// import userData from '../../datas/characters.json';
import '../../style/scores.css';
import useCharacterStorage from '../../useComponents/useCharacterStorage';


const CharacterShowComponent = () => {


    const [characters, setCharacters] = useCharacterStorage();

    const handleAddUser = () => {

        const newUser = {
            id: 10,
            name: "Nowy Użytkownik",
            level: 1,
            balance: 0,
            kills: 0,
            deaths: 0,
        };

        setCharacters(prevCharacters => [...prevCharacters, newUser]);
    };

    function showUsers()
    {
        return characters.map(user => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.balance}</td>
                <td>{user.kills}</td>
                <td>{user.deaths}</td>
            </tr>
        ))
    }



    return (
        <div>
            <h1>Highscores:</h1>
            <button onClick={handleAddUser}>Dodaj użytkownika</button>
            <table className="user-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Balance</th>
                    <th>Kills</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                    {showUsers()}
                </tbody>
            </table>
        </div>
    );

};


export default CharacterShowComponent;