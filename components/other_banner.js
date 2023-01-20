import styles from "@/styles/Home.module.css";
const Other_banner = (props) => {
  return (
    <div className={styles.cover_bloc}>
      <p>
        <span className={styles.cover_bloc_title}> {props.title}</span>
        <br />
        {props.subtitle} <br />
        <br />
        <button type="submit" className={styles.vers_Nos_prix}>
          {props.action} →
        </button>
      </p>
    </div>
  );
};
export default Other_banner;
