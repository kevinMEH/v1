import React, { useState } from "react";

import Title from "./subcomponents/Title";

const Contact = () => {
    // TODO:
    // const [status, setStatus] = useState("Submit");
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setStatus("Sending...");
    //     const { email, header, message } = e.target.elements;
    //     let details = {
    //         email: email.value,
    //         header: header.value,
    //         message: message.value,
    //     };
    //     let response = await fetch("TODO:", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8"
    //         },
    //         body: JSON.stringify(details);
    //     });
    //     let result = await response.json();
    //     setStatus("Submitted! (Status: " + result.status + ")");
    // }
    
    return (
        <div className="flex-col w-full my-32">
            <Title text="Lets start working!" color="text-pink-500" />
            <p className="text-gray-500 text-sm my-4 text-justify">
                I'm always looking for opportunities to work on new projects. If you'd like to work with me, press the button below and I'll get back to you as soon as possible!
            </p>
            {/* TODO:
            <form onSubmit={handleSubmit}>
            </form> */}
            <div className="flex justify-center">
                <a 
                    href="mailto:hello@liao.gg" rel="noopener noreferrer" target="_blank"
                    className="text-pink-500 bg-pink-50 hover:bg-pink-100 font-medium py-3 px-6 rounded-md inline-block">
                    Email Me!
                </a>
            </div>
        </div>
    );
}

export default Contact;