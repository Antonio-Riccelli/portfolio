import styles from "./index.module.css";

export default function ProjectSection() {


    return (
        <div className={styles.projectSectionWrapper} id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <section id="project-section" className={styles.projectContainer}>

            <section className={styles.projectWrapper}>
                <a href="https://markdown-previewer-reactjs-fcc.netlify.app/" className={styles.projectLink}><img src="https://raw.githubusercontent.com/Antonio-Riccelli/react-markdown-previewer/main/demo.gif" alt="Markdown previewer" className={styles.projectImg}></img></a>
                <p>Markdown Previewer</p>
                <p></p>
                <span className={styles.tags}>#React #CSS #Marked #DOMPurify</span>
            </section>

            <section className={styles.projectWrapper}>
                <a href="https://react-calculatrr.netlify.app/" className={styles.projectLink}><img src="https://media-exp1.licdn.com/dms/image/sync/C4D27AQF0paLF1XnN6Q/articleshare-shrink_1280_800/0/1645289611947?e=1645380000&v=beta&t=Hw6Qen3f1sbURpLNBVDRG8TCdPg41ZB0SlJaiH5XGPs" alt="Markdown previewer" className={styles.projectImg}></img></a>
                <p>Calculator</p>
                <p></p>
                <span className={styles.tags}>#React #CSS </span>
            </section>

            <section className={styles.projectWrapper}>
                <a href="https://antonio-riccelli.github.io/pixel_art_maker/" className={styles.projectLink}><img src="https://raw.githubusercontent.com/Antonio-Riccelli/pixel_art_maker/main/img/demo.gif" alt="Markdown previewer" className={styles.projectImg}></img></a>
                <p>Pixel Art Maker</p>
                <p></p>
                <span className={styles.tags}>#React #CSS </span>
            </section>

            <section className={styles.projectWrapper}>
                <a href="https://github.com/Antonio-Riccelli/js-roman-numeral-converter" className={styles.projectLink}><img src="https://github.com/Antonio-Riccelli/js-roman-numeral-converter/blob/main/public/images/demo4.gif?raw=true" alt="Markdown previewer" className={styles.projectImg}></img></a>
                <p>Roman Numeral Converter & Quote Generator</p>
                <p></p>
                <span className={styles.tags}>#React #TailwindCSS #Node.JS #Express.JS #PostgreSQL </span>
            </section>


        </section>
        </div>
    )
}