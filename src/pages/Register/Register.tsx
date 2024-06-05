import { Button, FormDiv, Input, InputDiv, LoginCard, LoginContainer, LogoImg } from "./../Login/Login.style";
import LogoGreyBlue from './../../assets/logo-grey-blue.png';
import { useNavigate } from "react-router-dom";

const Register : React.FC = () => {

    const navigate = useNavigate();

    // const handleHome = () => {
    //     navigate('/home');
    // }

    const handleLogin = () => {
        navigate('/');
    }

    return (
        <>
        <LoginContainer>
            <LoginCard>
                <FormDiv>
                <LogoImg src={LogoGreyBlue} alt="Logo" />
                    <InputDiv>
                        <label>nome:</label>
                        <Input type="text" placeholder="digite seu nome" required />
                    </InputDiv>
                    <InputDiv>
                        <label>cpf:</label>
                        <Input type="text" placeholder="digite seu cpf" required />
                    </InputDiv>
                    <InputDiv>
                        <label>email:</label>
                        <Input type="email" placeholder="digite seu email" required />
                    </InputDiv>
                    <InputDiv>
                        <label>senha:</label>
                        <Input type="password" placeholder="digite sua senha" required />
                    </InputDiv>
                    <Button onClick={handleLogin}>Registrar</Button>
                </FormDiv>
            </LoginCard>
        </LoginContainer>
        </>
    )
}

export default Register;