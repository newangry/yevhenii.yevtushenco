import React from "react";

import { SectionWrapper } from "../hoc";
import { profiles } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "./Profile.scss";
import { staggerContainer } from "../utils/motion";

const Profile = ({theme}) => {
  return (
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`} style={{color: theme.project.title}}>
          Profile Section
        </h2>
      </motion.div>
    <div className='my-skills'>
      {profiles.map((profile) => (
        <div className="skill" data-aos="fade-up" data-aos-delay="200">
        <div className="icon-container">
          <a href={profile.link} target="_blank">
            <img src={profile.icon} />
          </a>
        </div>
      </div>
      ))}
    </div>
    </motion.section>
  );
};

export default Profile;