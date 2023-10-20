import React from "react";
import './Chat.css';

function DataPlayers({players}) {
    return(
        <div>
            {players.map((el, index) => {
                const lastname = el.last_name;
                const firstname = el.first_name;
                return <div className="players">
                    {index+1}. {firstname} {lastname}
                </div>
            })}
        </div>
    )
}

export default DataPlayers