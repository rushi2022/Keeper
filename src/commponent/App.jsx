import React from "react";
import ReactDOM from "react-dom";
import Header from "./Heder";
import Footer from "./Footer"
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react/cjs/react.development";


function App() {
    const [notes, setNotes] = useState([]);

    function Addnote(newNote) {
        setNotes((prvNots) => {

            return ([...prvNots, newNote])

        })
    }

    function deleteNote(id) {
        setNotes(prveNots => {
            return prveNots.filter((noteitem, index) => {
                return index !== id;
            })
        })
    }
    return (
        <div>
            <Header />
            <CreateArea
                onAdd={Addnote} />
            {
                notes.map((noteItem,noteID) => {
                    return <Note 
                    key ={noteID}
                    id={noteID}
                    title={noteItem.title} 
                    content={noteItem.content} 
                    onDelete={deleteNote} />
                })
            }

            <Footer />
        </div>

    );
};

export default App;