import React, { useState } from "react";

export default function ContactMe() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    window.Email.send({
      SecureToken: process.env.SECURE_TOKEN,
      To: "richardartist80@Gmail.com",
      From: "richardartist80@Gmail.com",
      Subject: subject,
      Body: email + "\n" + name + message,
    }).then((message) => alert(message));

    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div class="mockup-window border-sky-100 bg-base-300">
        <div class="flex justify-center navbar bg-neutral text-neutral-content">
          <h1 className="lg:text-7xl text-4xl font-bold text-white font-mono">
            Contact&nbsp;<span className="text-sky-100">Me</span>
          </h1>
        </div>
        <div className="divider"></div>
        <section
          id="contactme"
          class="bg-white dark:bg-gray-900 text-gray-600 body-font relative"
        >
          <div class="absolute inset-0 bg-gray-300">
            <iframe
              width="100%"
              title="Map Of Baltimore"
              height="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Baltimore%20City+(My%20Business%20Name)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div class="container px-5 py-24 mx-auto flex font-mono">
            <div class="lg:w-1/3 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 class="mb-4 text-4xl tracking-tight font-mono font-extrabold text-center text-gray-900 dark:text-white">
                Let's Stay In Contact
              </h2>
              <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Wish to stay in contact or hire me? Send me an email and I'll
                get back to you as soon as possible
              </p>
              <form action="#" class="space-y-8" onSubmit={sendEmail}>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Email Subject"
                    required
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    value={subject}
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a message here..."
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-outline btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
