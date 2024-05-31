import { Button, FormDiv, Input, InputDiv, Label, LoginCard, LoginContainer, LogoImg } from "./Login.style";
import Logo from './../../assets/logo.png';
import { Form } from "react-router-dom";

const Login : React.FC = () => {
    return (
        <LoginContainer>
            <LoginCard>
                <FormDiv>
                <LogoImg src={Logo} alt="Logo" />
                    <InputDiv>
                        <label>email:</label>
                        <Input type="email" placeholder="digite seu email" />
                    </InputDiv>
                    <InputDiv>
                        <label>senha:</label>
                        <Input type="password" placeholder="digite sua senha" />
                    </InputDiv>
                    <Button>Entrar</Button>
                </FormDiv>
            </LoginCard>
        </LoginContainer>
    )
}

export default Login;