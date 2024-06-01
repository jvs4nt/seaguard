import Navbar from "../../components/Navbar/Navbar";
import { HomeContainer } from "./Home.style"

const Home : React.FC = () => {
    return (
        <>
            <HomeContainer>
                <Navbar />
            </HomeContainer>
        </>
    )
}

export default Home;