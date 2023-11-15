import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.scss";
import { staggerContainer } from "../utils/motion";

const Contact = ({theme, selColor}) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        '',
        '',
        {
          from_name: form.name,
          to_name: "Strong Rabbit",
          from_email: form.email,
          to_email: "strongrabbit@gmail.com",
          message: form.message,
        },
        'FMQ4a1hK5NSAkumfj',
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      <motion.div whileInView={{ opacity: 1 , transform : 'none'}}
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.75]  p-8 rounded-2xl'
        style={{background: theme.contract.bg}}
      >
        <p className={styles.sectionSubText} >Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-3 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`py-3 px-3 placeholder:text-${theme.contract.input_color} text-white rounded-lg border-none font-medium`}
              style={{background: theme.contract.input_bg}}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={`py-3 px-3 placeholder:text-${theme.contract.input_color} text-white rounded-lg border-none font-medium`}
              style={{background: theme.contract.input_bg}}

            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`py-3 px-3 placeholder:text-${theme.contract.input_color} text-white rounded-lg border-none font-medium`}
              style={{background: theme.contract.input_bg}}
            />
          </label>          
          <button
            type='submit'
            className='bg-tertiary py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="mt-5 contact__options">
          <article className="contact__option">
            <MdEmail />
            <a href="mailto:strongrabbit@gmail.com" target="_blank" className={`${selColor == "blue"?'pink':'blue'}-text-gradient`}>strongrabbit@gmail.com</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <a href="https://api.whatsapp.com/send/?phone=&text&app_absent=0&lang=en" target="_blank"  className={`${selColor == "blue"?'pink':'blue'}-text-gradient`}>
              +12345678
            </a>
          </article>
        </div>
      </motion.div>
    </div>
    </motion.section>
  );
};

export default Contact;