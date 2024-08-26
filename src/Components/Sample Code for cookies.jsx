import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const FormComponent = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const formSubmitted = Cookies.get('formSubmitted');
        if (formSubmitted) {
            setIsSubmitted(true);
        }
    }, []);

    const onFinish = (values) => {
        fetch('https://script.google.com/macros/s/AKfycbzqFS74KxW7AL9uFqacIGBqe35_4Q_tXIbLL0HHRLiiv-kAZlSloiUvveOYgzZahQRa/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            Cookies.set('formSubmitted', 'true', { expires: 1/24 }); // Set cookie to expire in 1 hour
            setIsSubmitted(true);
            message.info('Submission Success!');
        })
        .catch((error) => {
            console.error('Error:', error);
            message.error('Submission Failed!');
        });

        onReset();
    };

    if (isSubmitted) {
        return <AnotherComponent />;
    }

    return (
        <form onSubmit={onFinish}>
            {/* Your form fields here */}
            <button type="submit">Submit</button>
        </form>
    );
};

const AnotherComponent = () => {
    return <div>Thank you for your submission! Please wait for 1 hour before submitting again.</div>;
};

export default FormComponent;
