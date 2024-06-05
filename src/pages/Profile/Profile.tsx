import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { InfoBox, InfoInput, InfoLabel, ProfileBox, ProfileContainer, Title } from "./Profile.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Profile : React.FC = () => {
    return (
        <>
            <Navbar />
            <ProfileContainer>
                <ProfileBox>
                    <Title>Informações do perfil</Title>
                    <FontAwesomeIcon icon={faUserCircle} size="3x" />
                    <InfoBox>
                        <InfoLabel>Nome:</InfoLabel>
                        <InfoInput type="text" value="Nome do usuário" />
                        <InfoLabel>Email:</InfoLabel>
                        <InfoInput type="email" value="Email do usuário" />
                    </InfoBox>
                </ProfileBox>
            </ProfileContainer>
            <Footer />
        </>
    )
}

export default Profile;