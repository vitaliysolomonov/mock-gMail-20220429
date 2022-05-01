import {useState} from "react";
import axios from "axios";

const CreateEmailModal = ({toggleComposeModal, getEmails}) => {
    const sender = "myEmail@gmail.com";
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        const emailObject = {
            sender,
            recipient,
            subject,
            message,
            date: (new Date()).toLocaleDateString('en-US')
        }
        const send = await axios.post('http://localhost:3001/send', emailObject);
        await getEmails()
        toggleComposeModal()
    }

    return (<div className={'modal'}>
        <form>
            <label htmlFor={'to'}>To :</label>
            <input
                name={'to'}
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            /><br/>

            <label htmlFor={'subject'}>Subject: </label>
            <input
                name={'subject'}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            /> <br/>

            <textarea
                name={'message'}
                rows={20}
                value={message}
                onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={sendEmail}>Send</button>
        </form>
    </div>)
}

export default CreateEmailModal