import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

export default function ContactMe() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [emailResult, setEmailResult] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    window.Email.send({
      SecureToken: process.env.REACT_APP_EMAIL_TOKEN,
      To: process.env.REACT_APP_EMAIL,
      From: process.env.REACT_APP_EMAIL,
      Subject: subject,
      Body: email + "\n" + name + "\n" + message,
    }).then((message) => {
      setEmailResult(message);
    });

    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
  }

  return (
    <div className="min-h-screen bg-black py-20 md:px-10 ">
      <div className="mockup-window border-sky-100 bg-base-300">
        <div className="divider"></div>
        <div className="flex flex-col space-y-2 justify-center navbar">
          <h1
            className="lg:text-7xl text-4xl font-thin text-sky-100 italic pb-4"
            style={{ textShadow: "8px 8px 8px black" }}
          >
            CONTACT&nbsp;<span className="text-sky-100">ME</span>
          </h1>
          <h2 className="text-lg">
            <BsTelephoneFill size={24} />
            &nbsp;xxx-xxx-xxxx
          </h2>
          <h2 className="text-lg font-mono">
            <MdEmail size={24} />
            &nbsp;Richardartist80@Gmail.com
          </h2>
          <h2 className="text-lg font-mono">
            <ImLocation2 size={24} />
            &nbsp;Columbia, Maryland United States of America
          </h2>
        </div>
        <div className="divider"></div>
        <section
          id="contactme"
          className="bg-white dark:bg-gray-900 text-gray-600 body-font relative"
        >
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              width="100%"
              title="Map Of Baltimore"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Baltimore%20City+(My%20Business%20Name)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex font-mono">
            <div className="lg:w-1/3 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="mb-4 text-4xl tracking-tight font-mono font-extrabold text-center text-gray-900 dark:text-white">
                Let's Stay In Contact
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Wish to stay in contact or hire me? Send me an email and I'll
                get back to you as soon as possible
              </p>
              <p className="py-2">
                Note: If an error occurs email me directly at ml60379@umbc.edu
                or rich4ever11@protonmail.com :)
              </p>
              <form action="#" className="space-y-8" onSubmit={sendEmail}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="John Doe"
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@domain.com"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Email Subject"
                    required
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    value={subject}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a message here..."
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                  ></textarea>
                </div>
                <button
                  htmlFor="emailResultModal"
                  type="submit"
                  className="btn btn-outline btn-success"
                >
                  Submit
                </button>
              </form>
              {emailResult ? (
                <div className="alert shadow-lg mt-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="stroke-info flex-shrink-0 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>{emailResult}</span>
                  </div>
                  <div className="flex-none">
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => setEmailResult("")}
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
