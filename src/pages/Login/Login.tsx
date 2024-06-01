import { Button, FormDiv, Input, InputDiv, LoginCard, LoginContainer, LogoImg } from "./Login.style";
import LogoGreyBlue from './../../assets/logo-grey-blue.png';

const Login : React.FC = () => {
    return (
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
                    <Button>Entrar</Button>
                </FormDiv>
            </LoginCard>
        </LoginContainer>
    )
}

export default Login;