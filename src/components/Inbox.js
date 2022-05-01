import Email from "./Email";

const Inbox = ({emails, selectingEmail}) =>
    (<div className={'inbox'}>
        <table>
        <thead>
        <tr>
            <th className={'from'}>From</th>
            <th className={'from'}>Subject</th>
            <th className={'date'}>Date</th>
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