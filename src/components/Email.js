const Email = ({email, selectingEmail}) => (

    <tr onClick={() => {selectingEmail(email)}}>
        <td>{email.sender}</td>
        <td>{email.subject}</td>
        <td>{(new Date(email.date)).toLocaleDateString('en-US')}</td>
    </tr>
)

export default Email;