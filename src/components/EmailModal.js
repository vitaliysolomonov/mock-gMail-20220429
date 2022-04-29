const EmailModal =({currentEmail, selectingEmail}) => (
    <div className={'modal'}>
        <div>From: {currentEmail.sender}</div>
        <div>Subject: {currentEmail.subject}</div>
        <div>Date: {(new Date(currentEmail.date)).toLocaleDateString('en-US')}</div>
        <br/>
        <div>{currentEmail.message}</div>
            <button className={'closeButton'} onClick={() => selectingEmail(null)}>X</button>
    </div>
)
export default EmailModal;