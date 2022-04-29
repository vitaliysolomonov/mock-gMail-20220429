import './App.css';
import Emails from "./Emails";
import React, {Component, useEffect, useState} from "react";
import axios from "axios";
import Inbox from "./components/Inbox";
import EmailModal from "./components/EmailModal";

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {allEmails: []};
//     }
//    async componentDidMount() {
//         const url = "http://localhost:3001/emails";
//         const response = await fetch(url);
//         const JSONresponse = await response.json();
//         console.log(JSONresponse);
//         this.setState({allEmails: JSONresponse});
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>GMail</h1>
//                 <div className={'menu'}>menu
//                     <div className={'searchBar'}>search bar</div>
//                 </div>
//                 <Emails allEmails = {this.state.allEmails}/>
//             </div>
//         );
//
//     }
// }

function App () {
    const[emails, setEmails] = useState([])
    const[currentEmail, setCurrentEmail] = useState(null)

    useEffect(() => {

        const getEmails = async () => {
            const {data} = await axios.get('http://localhost:3001/emails')
            setEmails(data);
        }
        getEmails();
    }, [])

    const selectingEmail = (email) => {
        setCurrentEmail(email);
    }

    return (
        <div>
            <h1 className={'title'}>gMail</h1>
            <Inbox emails={emails} selectingEmail = {selectingEmail}/>
            {console.log(currentEmail)}
            {currentEmail && <EmailModal currentEmail = {currentEmail} selectingEmail = {selectingEmail}/>}
        </div>

    )
}

export default App