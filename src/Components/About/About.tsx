import styles from "./About.module.css";
import data from "../../../data.json"

const About = () => {
    return (
        <div id="about" className={styles.AboutWrapper}>
            <h1>About Us</h1>
            <p>{data.about[0]}</p>
            <p>{data.about[1]}</p>
            <p>{data.about[2]}</p>
            <p>{data.about[3]}</p>
        </div>
    );
};

export default About;
