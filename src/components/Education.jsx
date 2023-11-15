import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";
import "./Education.scss";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const FeedbackCard = ({
  index,
  branch,
  marks,
  name,
  degree,
  year,
  image,
  theme
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='p-5 rounded-3xl xs:w-[320px] w-full'
    style={{background: theme.project.item_bg}}
  >
    <div className='mt-7 flex flex-col justify-between items-center gap-1'>
      <img
        src={image}
        alt={`feedback_by-${name}`}
        width="80" height="80"
        className='rounded-full object-cover'
      />
      <div className='mt-3 flex-1 flex flex-col'>
        <p className='text-center text-white font-medium text-[16px]'>
          <span className={`text-center ${theme.education.name}-text-gradient`}>{name}</span>
        </p>
        <p className={`text-center mt-1 text-${theme.education.year} text-[12px]`} >
          {year}
        </p>
      </div>

    </div>

    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className={`text-center text-${theme.education.title_1} tracking-wider text-[18px]`}>{degree}</p>
      <p className={`mt-3 text-center ${theme.education.title_2}-text-gradient`}>{branch}</p>
      <p className={`mt-3 text-center ${theme.education.title_3}-text-gradient`}>{marks}</p>

    </div>
  </motion.div>
);

const Education = ({theme}) => {
  
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div className={`mt-12 rounded-[20px]`} style={{background: theme.education.bg}}>
        <div
          className={`rounded-2xl ${styles.padding} min-h-[300px]`}
          style={{background: theme.education.header_bg}}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText} style={{color: theme.education.detail_color}}>Education Details...</p>
            <h2 className={styles.sectionHeadText}>Education.</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {educations.map((education, index) => (
            <FeedbackCard key={education.name} index={index} {...education} theme={theme}/>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;