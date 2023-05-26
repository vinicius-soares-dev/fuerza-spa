import Header from "../../components/Nav";
import Logo from '../../assets/img/fuerzalogo.png'
import * as React from 'react';
import Typewriter from "typewriter-effect";
// import { motion } from "framer-motion";



function Home() {

    
   

    return(
        <>
            <div>
                <Header />
            </div>

            <div className="homePage">
                <div className="main-content">
                    <div className="main-1stchildren">
                        <img src={Logo} className="logo" alt="logofuerza"/>
                    </div>
                    <div className="main-2ndchildren"
                    >
                            <h4> Fuerza E-sports</h4>
                            <p>Organização de equipes e-sports, torneios e eventos relacionados.</p>
                    </div>
                </div>
                <div className="scroll-component">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("Scroll Down")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Developed by Vinicius Soares")
                            .start();
                        }}
                    />
                </div>
            </div>

            <div className="section-vip">
                   <h2>Associados</h2> 
                   <p className="description-tittle">vip</p>
                   <section className="description-vipper">

                    <p className="description-vip">Você pode se tornar um associdado da fuerza e-sports mesmo sem pertencer a guilda.</p>

                    <p className="description-vip">Participar de sorteio de equipamentos: headphone, celular, pc, camisa e financeiros.</p>

                    <p className="description-vip">Uma vaga na guilda principal (opcional).</p>

                    <p className="description-vip">Divulgação em nosso instagram oficial (@fuerza_ofc).</p>

                    <p className="description-vip">Mais de 10 campeonatos financiados por mês para sua line.</p>

                    <p className="description-vip">Desconto de 50% em nossos produtos oficiais sem pagar pelo frete.</p>


                    <section className="button-options">
                        <button className="btn-vip">Plano mensal: R$ 15,90</button>

                        <button className="btn-vip">Plano anual: R$ 159,00</button>

                    </section>

                    <section className="footerFas">
                            <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Se torne um associado")
                                    .pauseFor(1000)
                                    .deleteAll()
                                .typeString("Fuerza e-sports!")
                                .start();
                                                                            }}
                            />
                        </section>

                   </section>

            </div>

            <div className="sponsorship">

                        <h2>Patrocínio</h2>      
                        <p className="sponsorship-description">
                            Por mês iremos disponibilizar mais de 50 campeonatos com valores em premiação variando entre R$ 400,00 a R$ 20.000,00.
                        </p> 

                        <p className="sponsorship-description">
                            Disponibilizamos também x-treinos preparatórios e intensivos com guildas de renome no cenário, para introduzir sua line no auge do cenário competitivo.
                        </p>   

                        <p className="sponsorship-description">
                            Fornecemos também campeonatos diários (não temos informação da quantidade exata, pois varia de acordo com o cronograma de cada line).
                        </p>

                        <p className="sponsorship-description">
                            Disponibilizamos sorteios mensais para membros (acessórios, equipamentos, financeiros etc).
                        </p>   

                        <p className="sponsorship-description">
                            Realizamos torneios internos semanalmente (solo, duo ou squad) com premiações dentro do módulo de jogo.
                        </p>

                        <p className="sponsorship-description">
                            Disponibilizamos descontos de 30% para membros em nossos produtos (camisas oficiais).
                        </p>                                   
            </div>

            
        </>
            
        

       
    )
}

export default Home;