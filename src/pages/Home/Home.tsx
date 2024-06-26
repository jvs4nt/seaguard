import Navbar from "../../components/Navbar/Navbar";
import { BigCard, Circle, CirclesDiv, Div1, Div2, HomeContainer, MediumImg, ObserveDiv, RollDown, SubTitle, Title, TransparentBigCard, VideoCard } from "./Home.style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import satelite1 from "../../assets/satelite1.jpeg";
import satelite2 from "../../assets/satelite2.jpeg";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";

const Home : React.FC = () => {
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const name = localStorage.getItem('nome');
        setUserName(name);
    }, []);

    return (
        <>
        <Navbar />
            <HomeContainer>
                <TransparentBigCard>
                    <h2>Olá {userName}! Seja bem vindo ao projeto...</h2>
                    <Title>SeaGuard AI</Title>
                    <SubTitle>A integração de inteligência artificial para cuidar dos oceanos</SubTitle>
                    <RollDown>saiba mais</RollDown> 
                    <FontAwesomeIcon icon={faArrowDown} />
                </TransparentBigCard>
                <BigCard>
                    <Div1>
                        <h2>CONHEÇA UM POUCO SOBRE O <span>SEAGUARD</span></h2>
                        <p>O objetivo principal do projeto é desenvolver uma plataforma avançada de análise de imagens oceânicas utilizando inteligência artificial. Esta plataforma será capaz de identificar manchas de óleo e outros poluentes no mar.</p>
                        <p>Para melhorar a ajuda, as imagens analisadas serão de satélites de observação dos mares, após as anáises da inteligência artificial, as imagens serão passadas por um especialista para verificar a integridades das manchas e o nível de risco, para em seguida, sinalizar os agentes de tratamento dos oceanos sobre o local.</p>
                        <ObserveDiv>
                            <p>Observe as imagens</p>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </ObserveDiv>
                    </Div1>
                    <Div2>
                        <MediumImg src={satelite1} />
                        <MediumImg src={satelite2} />
                    </Div2>
                </BigCard>
                
                <TransparentBigCard>
                    <SubTitle>POR QUE APOIAR NOSSO PROJETO?</SubTitle>
                    <CirclesDiv>
                        <Circle>
                            <p>Preservação dos animais</p>
                            <FontAwesomeIcon icon={faFish}/>
                        </Circle>
                        <Circle>
                            <p>Cuidar dos oceanos</p>
                            <FontAwesomeIcon icon={faWater}/>
                        </Circle>
                        <Circle>
                            <p>Prevenção de desastres</p>
                            <FontAwesomeIcon icon={faWarning}/>
                        </Circle>
                    </CirclesDiv>
                </TransparentBigCard>

                <VideoCard>
                    <h2>VÍDEO DE APRESENTAÇÃO</h2>
                    <iframe 
                        width="100%" 
                        height="600" 
                        src="https://www.youtube.com/embed/KFheog_oa-g" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </VideoCard> 
            </HomeContainer>
            <Footer />
        </>
    )
}

export default Home;