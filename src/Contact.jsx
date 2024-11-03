import Nav from "./Header";

const Contact = () => {
    return (
        <>
            <Nav />
            <div className="contactsPage">
                <h1>Call Me Maybe!</h1>
                <p>
                    Question? Request? Complaint? Let me know, I will handle anything!
                </p>
            </div>
            <div className="numEmail">
                <p><strong>Email: </strong><a href="ubitechy@ubi.tech">ubitechy@ubi.tech</a></p>
                <p><strong>Mobile: </strong>+1 911 911 007</p>
            </div>
        </>
    );
};

export default Contact;