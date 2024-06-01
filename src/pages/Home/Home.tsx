import Navbar from "../../components/Navbar/Navbar";
import { BigCard, BigImg, Div1, HomeContainer } from "./Home.style"
import LogoGreyBlue from './../../assets/logo-grey-blue.png';

const Home : React.FC = () => {
    return (
        <>
            <HomeContainer>
                <Navbar />
                <BigCard>
                    <Div1>
                        <h2>SEJA BEM VINDO AO PROJETO <span>SEAGUARD</span></h2>
                        <p>O objetivo principal do projeto SeaGuard AI é desenvolver uma plataforma avançada de análise de imagens oceânicas utilizando inteligência artificial. Esta plataforma será capaz de identificar manchas de óleo e outros poluentes no mar, alertando automaticamente as equipes de resposta e mitigação ambiental para uma ação rápida e eficaz.</p>
                    </Div1>
                </BigCard>
            </HomeContainer>
        </>
    )
}

export default Home;