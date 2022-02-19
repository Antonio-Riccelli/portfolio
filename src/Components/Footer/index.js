

export default function Footer(){
    const year = new Date().getFullYear();

    return (
        <footer>
            <p className="motto">Amor Sola Lex</p>
            <p className="copyright">ANTONIO RICCELLI &copy; <span id="year" title="I am dynamically updated 😎">{year}</span></p>
        </footer>
    )
}