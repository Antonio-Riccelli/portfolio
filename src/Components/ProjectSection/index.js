import styles from "./index.module.css";


export default function ProjectSection() {


    return (
        <div className={styles.projectSectionWrapper} id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <section id="project-section" className={styles.projectContainer}>

            <section className={styles.projectWrapper}>
                <a href="https://markdown-previewer-reactjs-fcc.netlify.app/" className={styles.projectLink}><img src="https://raw.githubusercontent.com/Antonio-Riccelli/react-markdown-previewer/main/demo.gif" alt="Markdown previewer" className={styles.projectImg}></img></a>
                <p className={styles.projectTitle}>Markdown Previewer</p>
                <span className={styles.tags}>#React #CSS #Marked #DOMPurify</span>
            </section>

            <section className={styles.projectWrapper}>
                <a href="https://react-calculatrr.netlify.app/" className={styles.projectLink}><img src="https://i.ibb.co/jGVtVVM/2.gif" alt="React Calculator" className={styles.projectImg}></img></a>
                <p className={styles.projectTitle}>Calculator</p>
                <span className={styles.tags}>#React #CSS </span>
            </section>

            <section className={styles.projectWrapper}>
                <a href="https://antonio-riccelli.github.io/pixel_art_maker/" className={styles.projectLink}><img src="https://raw.githubusercontent.com/Antonio-Riccelli/pixel_art_maker/main/img/demo.gif" alt="Pixel Art Maker" className={styles.projectImg}></img></a>
                <p className={styles.projectTitle}>Pixel Art Maker</p>
                <span className={styles.tags}>#Javascript #CSS #HTML </span>
            </section>

            <section className={styles.projectWrapper}>
                <a href="https://github.com/Antonio-Riccelli/js-roman-numeral-converter" className={styles.projectLink}><img src="https://github.com/Antonio-Riccelli/js-roman-numeral-converter/blob/main/public/images/demo4.gif?raw=true" alt="Roman Numeral Converter and Quote Generator" className={styles.projectImg}></img></a>
                <p className={styles.projectTitle}>Roman Numeral Converter & Quote Generator</p>
                <span className={styles.tags}>#JavaScript #Bootstrap #Node.JS #Express.JS #PostgreSQL </span>
            </section>

            <section className={styles.projectWrapper}>
                <a href="https://25-5-reactclock.netlify.app/" className={styles.projectLink}><img src="https://raw.githubusercontent.com/Antonio-Riccelli/React-25-5-clock/main/demo.gif" alt="25 + 5 Clock" className={styles.projectImg}></img></a>
                <p className={styles.projectTitle}>25 + 5 Clock</p>
                <span className={styles.tags}>#React #CSS</span>
            </section>

                <section className={styles.projectWrapper}>
                <a href="https://fcc-exercise-trackr.herokuapp.com/" className={styles.projectLink}><img src="https://raw.githubusercontent.com/Antonio-Riccelli/fcc-exercise-tracker/main/demo.gif" alt="Exercise Tracker" className={styles.projectImg}></img></a>
                <p className={styles.projectTitle}>Exercise Tracker</p>
                <span className={styles.tags}>#MongoDB #Mongoose #NodeJS #CSS</span>
            </section>


        </section>
        </div>



    )
}