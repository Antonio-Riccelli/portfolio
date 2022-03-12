import styles from "./index.module.css";


export default function ProjectSection() {


    return (
        <div className={styles.projectSectionWrapper} id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <section id="project-section" className={styles.projectContainer}>

            <section className={styles.projectWrapper}>
                <a href="https://markdown-previewer-reactjs-fcc.netlify.app/" className={styles.projectLink}>
                <span className={styles.projectDescriptionTooltip}>
                This previewer allows the user to input text using markdown syntax and see it rendered in real time. 
                It was created using React and styled with CSS. Additional packages/libraries were Marked, to parse the markdown syntax, and DOMpurify, to protect the HTML from injections of harmful code.
                </span>
                <img src="https://raw.githubusercontent.com/Antonio-Riccelli/react-markdown-previewer/main/demo.gif" alt="Markdown previewer" className={styles.projectImg}></img>
                </a>
                <p className={styles.projectTitle}>Markdown Previewer</p>
                <p className={styles.tags}>#React #CSS #Marked #DOMPurify</p>
            </section>

            <section className={styles.projectWrapper}>
                <a href="https://react-calculatrr.netlify.app/" className={styles.projectLink}>
                <span className={styles.projectDescriptionTooltip}>
                A classic calculator. A staple in every developer's portfolio. Built with React (and some blood, sweat and tears) and styled with CSS. 
                </span>
                <img src="https://i.ibb.co/jGVtVVM/2.gif" alt="React Calculator" className={styles.projectImg}></img></a>
                <p className={styles.projectTitle}>Calculator</p>
                <p className={styles.tags}>#React #CSS </p>
            </section>

            <section className={styles.projectWrapper}>
                <a href="https://antonio-riccelli.github.io/pixel_art_maker/" className={styles.projectLink}>
                <span className={styles.projectDescriptionTooltip}>
                One of my first exercises in modifying the DOM. Built with standard HTML, CSS and JavaScript. <br/>User can pick width and height to generate a board, which can be "painted" using the mouse cursor. <br/>The board is an HTML table created with a For loop. 
                </span>
                <img src="https://raw.githubusercontent.com/Antonio-Riccelli/pixel_art_maker/main/img/demo.gif" alt="Pixel Art Maker" className={styles.projectImg}></img></a>
                <p className={styles.projectTitle}>Pixel Art Maker</p>
                <p className={styles.tags}>#JavaScript #CSS #HTML </p>
            </section>

            <section className={styles.projectWrapper}>
                <a href="https://github.com/Antonio-Riccelli/js-roman-numeral-converter" className={styles.projectLink}>
                <span className={styles.projectDescriptionTooltip}>
                My first full stack project. It allows the user to convert an Arabic numeral to a Roman one, whilst quotes by Roman philosophers are being displayed. <br/>The quotes are stored in a PostgreSQL database and can also be retrieved based on ID or author's name. 
                </span>
                <img src="https://github.com/Antonio-Riccelli/js-roman-numeral-converter/blob/main/public/images/demo4.gif?raw=true" alt="Roman Numeral Converter and Quote Generator" className={styles.projectImg}></img></a>
                <p className={styles.projectTitle}>Roman Numeral Converter & Quote Generator</p>
                <p className={styles.tags}>#JavaScript #Bootstrap #Node.JS #Express.JS #PostgreSQL </p>
            </section>

            <section className={styles.projectWrapper}>
                <a href="https://25-5-reactclock.netlify.app/" className={styles.projectLink}>
                <span className={styles.projectDescriptionTooltip}>
                Another sort of programmer portfolio's staple: a Pomodoro Clock built using React and styled with CSS.<br/>
                It allows the user to select the length of their session and break time, at the end of which an alarm is played.
                </span>
                <img src="https://raw.githubusercontent.com/Antonio-Riccelli/React-25-5-clock/main/demo.gif" alt="25 + 5 Clock" className={styles.projectImg}></img></a>
                <p className={styles.projectTitle}>25 + 5 Clock</p>
                <p className={styles.tags}>#React #CSS</p>
            </section>

                <section className={styles.projectWrapper}>
                <a href="https://fcc-exercise-trackr.herokuapp.com/" className={styles.projectLink}>
                <span className={styles.projectDescriptionTooltip}>
                My first experiment in learning MongoDB and Mongoose. This is allows you to create a new user in the database (upon which the new ID will be returned), input exercises and retrieve an exercise log.<br/>
                Its Frontend is currently made with plain HTML and JavaScript, but I'm working on rewriting it in React.
                </span>
                <img src="https://raw.githubusercontent.com/Antonio-Riccelli/fcc-exercise-tracker/main/demo.gif" alt="Exercise Tracker" className={styles.projectImg}></img></a>
                <p className={styles.projectTitle}>Exercise Tracker</p>
                <p className={styles.tags}>#MongoDB #Mongoose #NodeJS #CSS</p>
            </section>


        </section>
        </div>



    )
}