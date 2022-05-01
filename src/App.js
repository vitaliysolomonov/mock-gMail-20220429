import './App.css';

import React, {Component, useEffect, useState} from "react";
import axios from "axios";
import Inbox from "./components/Inbox";
import EmailModal from "./components/EmailModal";
import CreateEmailModal from "./components/CreateEmailModal";

function App() {
    const [emails, setEmails] = useState([])
    const [currentEmail, setCurrentEmail] = useState(null)
    const [isComposingNewEmail, setIsComposingNewEmail] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    // const [foundEmails, setFoundEmails] = useState([])

    const getEmails = async () => {
        const {data} = await axios.get('http://localhost:3001/emails')
        setEmails(data);
    }

    useEffect(() => {
        getEmails();
    }, [searchQuery])

    const selectingEmail = (email) => {
        setCurrentEmail(email);
    }

    const toggleComposeModal = () => {
        setIsComposingNewEmail(!isComposingNewEmail);
    }

    // const findEmails = async (searchQuery) => {
    //     console.log(`http://localhost:3001/search?query=${searchQuery}`)
    //     const {data} = await axios.get(`http://localhost:3001/search?query=${searchQuery}`);
    //     setEmails(data);
    // }


    return (
        <div>
            <h1 className={'title'}>gMail</h1>
            <div><button className={'compose'} onClick={toggleComposeModal}>Compose</button> </div>
            <div className={'searchBar'}>
                <label htmlFor={"search"}>Search: </label>
                <input
                    name={"search"}

                    placeholder={'Search Email'}
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}

                /></div>
            <Inbox emails={searchQuery ?
                emails.filter((email) => {
                    if(JSON.stringify(email).toLowerCase().includes(searchQuery.toLowerCase())) return email;
                })
                : emails}
                   selectingEmail={selectingEmail}/>
            {currentEmail && <EmailModal currentEmail={currentEmail} selectingEmail={selectingEmail}/>}
            {isComposingNewEmail && <CreateEmailModal toggleComposeModal={toggleComposeModal} getEmails={getEmails} />}
        </div>

    )
}

export default App