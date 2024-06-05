import { Button, FormDiv, Input, InputDiv, LoginCard, LoginContainer, LogoImg, RegisterLink } from "./Login.style";
import LogoGreyBlue from './../../assets/logo-grey-blue.png';
import { useNavigate } from "react-router-dom";

const Login : React.FC = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home');
    }

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <>
        <LoginContainer>
            <LoginCard>
                <FormDiv>
                <LogoImg src={LogoGreyBlue} alt="Logo" />
                    <InputDiv>
                        <label>email:</label>
                        <Input type="email" placeholder="digite seu email" required />
                    </InputDiv>
                    <InputDiv>
                        <label>senha:</label>
                        <Input type="password" placeholder="digite sua senha" required />
                    </InputDiv>
                    <Button onClick={handleHome}>Entrar</Button>
                    <RegisterLink onClick={handleRegister}>Registre-se aqui!</RegisterLink>
                </FormDiv>
            </LoginCard>
        </LoginContainer>
        </>
    )
}

export default Login;