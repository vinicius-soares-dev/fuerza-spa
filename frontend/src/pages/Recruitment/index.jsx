import Header from "../../components/Nav";
// import Logo from '../../assets/img/fuerzalogo.png'
import * as React from 'react';


import { Link } from 'react-router-dom';


import Typewriter from "typewriter-effect";

import '../../styles/styleHome.css';
import '../../styles/styleAbout.css';
import '../../styles/styleRecruitment.css';
import '../../styles/styleButton.css';


import Mockup from '../../assets/img/laptopMockup.png';



function Recruitment() {



    return (
        <>
            <div className="header">
                <Header />
            </div>

            <div className="main">
                <div className="chatModel">
                    <img src={Mockup} className="laptopMockup" alt="laptopMockup"/>
                    <div className="chatModel_text">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                .typeString("Olá seja bem-vindo a Fuerza E-sports!")
                                .pauseFor(500)
                                .deleteAll()
                                .typeString("Para entrar na guilda você deve entrar em contato conosco")
                                .pauseFor(500)
                                .deleteAll()
                                .typeString("através do nosso WhatsApp oficial")
                                .pauseFor(500)
                                .deleteAll()
                                .typeString("Clique no botão abaixo:")
                                .start();
                            }}
                        />
                    </div>
                        <Link to={"https://api.whatsapp.com/send?phone=553298440822&text=Ol%C3%A1%20quero%20entrar%20na%20guilda!"}
                            >
                            
                            <button
                                className="buttonAccess"
                                
                            >
                                WhatsApp
                            </button>
                        </Link>
                        
                </div>
            </div>
        </>
    )
};

export default Recruitment;