import { Helmet } from "react-helmet-async";
import Form from "./Form/Form";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Prographr | Contact</title>
            </Helmet>
            <Form></Form>
        </div>
    );
};

export default Contact;