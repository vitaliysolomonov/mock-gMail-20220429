import Email from "./Email";

const Inbox = ({emails, selectingEmail}) =>
    (<div className={'inbox'}>
        <table>
        <thead>
        <tr>
            <th>From</th>
            <th>Subject</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {emails.map((email) => (<Email
            email={email}
            key = {email.id}
            selectingEmail = {selectingEmail}
        />))}
        </tbody>
    </table>
    </div>)



export default Inbox;