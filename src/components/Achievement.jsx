import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";
import "./Achievement.scss";

const Achievement = ({theme}) => {
  return (
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
    <div className={`mt-12 rounded-[20px]`} style={{background: theme.archive.bg}}>
      <div
        className={`rounded-2xl ${styles.padding}`}
        style={{background: theme.archive.bg}}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText} style={{color: theme.archive.top_title}}>Some Glimpses on...</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center p-6 ${styles.paddingX} gap-7`}>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {achievements.map((achievement) => (
          <li className='text-white-100 text-[15px] pl-1'>{achievement.title}</li>
        ))}
        </ul>
      </div>
    </div>
    </motion.section>
  );
};

export default Achievement