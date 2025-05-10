// import React, { useState } from "react";

const Contact: React.FC = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [submissionStatus, setSubmissionStatus] = useState<
  //   "idle" | "loading" | "success" | "error"
  // >("idle");
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setSubmissionStatus("loading");
  //   setErrorMessage("");

  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 1500));

  //     const formData = { name, email, message };
  //     console.log("Form Data:", formData);

  //     setSubmissionStatus("success");
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   } catch (error: any) {
  //     console.error("Form submission error:", error);
  //     setSubmissionStatus("error");
  //     setErrorMessage("Something went wrong. Please try again later.");
  //   }
  // };

  return (
    <section id="contact" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Get In Touch
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <p className="text-lg text-white mb-6">
              I&apos;m always open to new opportunities and collaborations. Feel
              free to reach out via my social media handles to discuss more.
            </p>
            {/* <div className="mb-4">
              <strong className="text-white">Email:</strong>*/}
            {/* <a
                href="mailto:your-email@example.com"
                className="text-blue-500 hover:underline"
              >
                your-email@example.com
              </a> */}
            {/* </div> */}
          </div>
          {/* <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                submissionStatus === "loading"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={submissionStatus === "loading"}
            >
              {submissionStatus === "loading" ? "Sending..." : "Send Message"}
            </button>
            {submissionStatus === "success" && (
              <p className="text-green-500 text-sm mt-2">
                Your message has been sent!
              </p>
            )}
            {submissionStatus === "error" && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
