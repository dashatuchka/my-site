import React from "react";
import Chat from "./Chat.jsx";
import './Chat.css'

function Third() {
    return(
        <>
        <body>
        <main className="allChat">
            <h1 className="h1"> Чат</h1>

            <div className="chat">
                <Chat/>
            </div>
        </main>
        </body>
        </>
    )
}

export default Third