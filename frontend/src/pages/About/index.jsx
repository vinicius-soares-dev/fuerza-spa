import Header from "../../components/Nav";

import '../../styles/styleHome.css';
import '../../styles/styleAbout.css';
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";

function Sobre() {

    return(
        <>
            <div className="header">
                <Header />
            </div>

            <div className="content-Main">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter  
                            .typeString("Saiba mais")
                            .pauseFor(1000)
                            .deleteAll()
                        .typeString("Sobre a Fuerza")
                        .start();
                    }}
                    />
                </motion.div>

                <div>
                    <p className="about-pt1">
                        Trabalhamos a mais de 4 anos no cenário competitivo para proporcionar a melhor experiência para você e sua line.
                    </p>

                    <p className="about-pt2">
                        Trabalhamos de forma solene todos os dias, estudando maneiras de se atualizar conforme o cenário for se moldando.
                    </p>

                </div>

                <div className="typewriter">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter  
                            .typeString("Faça parte")
                            .pauseFor(1000)
                            .deleteAll()
                        .typeString("da família FZ!")
                        .start();
                    }}
                    />
                </div>

            </div>

            <div className="staff-section">

                <h3 className="tittle-staff">Staff</h3>

                <p className="description-staff">A guilda conta com um staff de primeira para ajudar na organização, consultas e desempenho de nossos membros.</p>

                <p className="description-staff">Contamos com profissionais do ramo como coach, analista de desempenho, designer e etc.</p>

                <p className="description-staff">Fornecemos uma experiência agradável para todos os nossos membros.</p>
            </div>

            <div className="rules-section">
                    <h3 className="tittle-rules">Regras da </h3>

                    <p className="subtittle-rules">organização</p>

                    <p  className="description-rules">Ao entrar na Fuerza saiba que será cobrado intensamente por responsabilidade e respeito com nosso staff.</p>

                    <p  className="description-rules">Não toleramos desrespeito entre os membros e muito menos com alguém de nosso staff.</p>

                    <p  className="description-rules">Toda semana iremos dar metas a cada line que deverá ser cumprida.</p>

                    <p  className="description-rules">Caso a line se sinta pressionada, e não dê conta dos termos sinta-se a vontade para se retirar da organização a qualquer momento.</p>

            </div>

            <div className="timeline">
                    <h3 className="tittle-timeline">Cronograma</h3>
                    <p className="description-timeline">
                        Cada line terá seul próprio cronograma semanal, onde estará disponível a disputa de x-treinos internos, externos, campeonatos diários, 4x4 e semanais.
                    </p>
                    <p className="description-timeline">
                        Algum evento pode ser adiado ou cancelado se entrar em conflito de data e horário com campeonatos semanais em que a line esteja escalada.
                    </p>
            </div>

            <div className="lineup">
                        <h3 className="tittle-lineup">Escalações</h3>
                        <p className="description-tittlelineup">Para Campeonatos</p>
                        <p className="description-lineup">
                            As lines que se destacarem nos x-treinos e camps diários ganham vagas em camps semanais escolhidos pelo staff da guilda.
                        </p>
                        <p className="description-lineup">
                            Em caso de insucesso recorrente de alguma line em campeonatos, suspenderemos a line do competitivo e avaliaremos se a line terá as condições ideais de continuar representando a fuerza.
                        </p>

            </div>
        </>
    )
}  

export default Sobre;
