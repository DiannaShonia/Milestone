import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { newsData } from "@/mockData/news";
import styles from "./styles.module.css";
import { useMediaQuery } from "@mui/material";

const News = ({ data }: any) => {
  const isTablet = useMediaQuery("(max-width: 1023.98px)");

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className={styles.wrapper}
    >
      {isTablet && <h1 className={styles.mainTitle}>ᲡᲘᲐᲮᲚᲔᲔᲑᲘ</h1>}
      <div className={styles.list}>
        {newsData.map((news: any) => {
          console.log(news.slug, "--slug");
          return (
            <Link
              href={`/about-project/${news.slug}`}
              key={news.slug}
              className={styles.item}
            >
              <div className={styles.imageBox}>
                <div className={styles.innerImg}>
                  <Image src={news.src} className={styles.image} alt="" />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <h3 className={styles.title}>{news.title}</h3>
                <p className={styles.date}>{news.date}</p>
              </div>
              <p className={styles.description}>{news.description}</p>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default News;
