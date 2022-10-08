import { useState, useEffect } from "react";
import "./App.css";
import "./styles/style.scss";

const inicioImage = require("./images/inicio-background.png");
const myPhoto = require("./images/retrait.png");

function App() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY < 66) {
      setNavbar(false);
    } else {
      setNavbar(true);
      console.log(navbar);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <>
      <header className={navbar ? "header-active" : "header"}>
        <nav className="nav">
          <ul className="menu">
            <li className="link">
              <a href="#inicio">Início</a>
            </li>
            <li className="link">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="link">
              <a href="#portfolio">Porfólio</a>
            </li>
            <li className="link">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="inicio">
          <article className="inicio-container">
            <aside className="inicio-content">
              <h1>
                Sophia <span>Verardo</span>
              </h1>
              <p className="subtitle">
                Front-end e Designer, apaixonada por programação e tecnologia
              </p>
              <button className="button-contact" onClick={"#contato"}>
                <p className="subtitle">Entrar em Contato</p>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </aside>
            <aside className="inicio-image">
              <img src={inicioImage} alt="Imagem de fundo" />
            </aside>
          </article>
          <article className="see-more">
            <a className="link" href="#sobre">
              <p>Veja Mais</p>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
          </article>
        </section>
        <section id="sobre">
          <article className="container">
            <aside className="my-photo">
              <img src={myPhoto} alt="Foto de Sophia" />
            </aside>
            <aside className="content">
              <h2 className="subtitle">Sobre</h2>
              <p className="paragraph">
                Designer e Front-End, descobri essa paixão durante o ensino
                médio, quando fiz o ensino médio integrado ao técnico em
                Desenvolvimento de Sistemas, na ETEC Adolpho Berezin. Muito do
                que conheço também veio das minhas experiências com o Symetra,
                empresa fictícia criada para representaro meu grupo de TCC. Além
                do meu projeto de TCC, também colaborei com a criação de um site
                para o município de Mongaguá. Você pode ver mais sobre meus
                projetos clicando{" "}
                <a className="link" href="portfolio">
                  aqui
                </a>
                .
              </p>
              <p className="paragraph">
                Tendo tido aulas de programação mobile, programação web, banco
                de dados, backend, sistemas embarcados, entre outros, eu
                descobri que minha verdadeira área de dar vida às aplicações no
                geral. Sempre fui considerada uma "nerd" pelos meus colegas de
                classe, por tirar boas notas e estudar muito, mas eu sempre
                gostei desse título.
              </p>
              <p className="paragraph">
                Tenho 17 anos, nasci em 13/09/2005. Último ano do Ensino Médio.
                Meus hobbies preferidos são programar ouvindo música e jogar, é
                claro, ouvindo música também. No tempo livre, também pratico
                dança e leio bastante, principalmente os romances e fantasias.
              </p>
              <p className="paragraph">
                Posso dizer que minhas maiores qualidades são a fome por
                aprendizado, minha cooperação e minha capacidade de trabalhar em
                equipe. Mas também tenho meus defeitos, como a competitividade e
                gostar das coisas do meu jeito, mas estou trabalhando em ambos
                aspectos para não deixar que eles afetem meu desempenho nas
                relações sociais, principalmente de trabalho.
              </p>
            </aside>
          </article>
          <article className="technologies-carousel">
            <p className="subtitle">JAVASCRIPT</p>
            <p className="subtitle"><span>REACT</span></p>
            <p className="subtitle">REACT NATIVE</p>
            <p className="subtitle"><span>C#</span></p>
            <p className="subtitle">PHP</p>
          </article>
        </section>
        <section id="portfolio">
          
        </section>
      </main>
    </>
  );
}

export default App;
