import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jq6stls",
        "template_y3u9f87",
        form.current,
        "DmS7cVQFjycLuSCRA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="bg-[#0a192f] py-32 text-white">
      <h2 className="font-bold text-4xl sm:text-5xl text-center mb-16">
        Contact
      </h2>
      <div className="md:w-10/12 mx-auto flex flex-col md:flex-row gap-12 px-8 md:px-0">
        <div className="md:w-1/2">
          <div className="mb-6">
            <h2 className="text-3xl font-semibold mb-6">Find Me On!</h2>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/monirul80/" target="_blank">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/monirul80/" target="_blank">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/monir3355" target="_blank">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/Dev1Monirul" target="_blank">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold mb-4">Address</h2>
              <p className="flex justify-start items-center gap-2">
                <FaPhoneAlt className="h-5 w-5" />{" "}
                <span className="font-bold">Phone:</span> +8801737368680
              </p>
              <p className="flex justify-start items-center gap-2">
                <HiOutlineMail className="h-6 w-6" />
                <span className="font-bold">Email:</span> monirul8680@gmail.com
              </p>
              <p className="flex justify-start items-center gap-2">
                <ImLocation className="h-6 w-6" />{" "}
                <span className="font-bold">Address:</span> Mirpur-1, Dhaka,
                Bangladesh
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Contact Form</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-2">
            <div>
              <label>Name</label>
              <br />
              <input
                type="text"
                required
                name="user_name"
                className="text-white pl-2 mt-2 bg-gray-400 py-2 w-full rounded-md"
              />
            </div>
            <div>
              <label className="mb-2">Email</label>
              <br />
              <input
                type="email"
                required
                name="user_email"
                className="text-white pl-2 mt-2 bg-gray-400 py-2 w-full rounded-md"
              />
            </div>
            <div>
              <label className="mb-2">Subject</label>
              <br />
              <input
                type="text"
                required
                name="from_subject"
                className="text-white pl-2 mt-2 bg-gray-400 py-2 w-full rounded-md"
              />
            </div>
            <div>
              <label className="mb-2">Message</label>
              <br />
              <textarea
                name="message"
                rows={4}
                className="text-white rounded-md bg-gray-400 mt-2 w-full pt-2 pl-4"
              />
            </div>
            <div>
              <input
                className="text-white group border-2 border-primaryLight2 px-6 py-3 my-2 flex items-center hover:bg-primaryLight2 hover:border-primaryLight2"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
