import React from "react";
import styles from "./MovieCard.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  let geners = ["Adventure", "Action", "Thriller"];

  return (
    <div className={styles.cardWrapper}>

      {/* poster image */}
      <img className={styles.poster} src={IMAGE_BASE + movie.poster_path} alt="poster image" />

      {/* hover card */}
      <div className={styles.hoverCard}>
        <img className={styles.hoverImage} src={IMAGE_BASE + movie.poster_path} alt="hover image" />

        {/* badge */}
        <div className={styles.badge}>recently added</div>

        {/* button row */}
        <div className={styles.buttonRow}>
          <FaPlayCircle className={styles.circleButton} color="white" size={40} />
          <BsPlusCircle className={styles.circleButton} color="white" size={40} />
          <GoCheckCircleFill className={styles.circleButton} color="white" size={40} />
          <IoIosArrowDropdownCircle className={styles.circleButton} color="white" size={40} />
        </div>

        {/* meta data row */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>
      </div>

      {/* genres */}
      <div className={styles.geners}>
        {geners.map((g, index) => (
          <span key={index}>
            {g}
            {index < geners.length - 1 && <span className={styles.dot}>.</span>}
          </span>
        ))}
      </div>

    </div>
  );
}

export default MovieCard;