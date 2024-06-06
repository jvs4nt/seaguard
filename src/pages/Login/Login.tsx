import React, { useState } from 'react';
import { Button, FormDiv, Input, InputDiv, LoginCard, LoginContainer, LogoImg, RegisterLink } from "./Login.style";
import LogoGreyBlue from './../../assets/logo-grey-blue.png';
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleHome = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página

        try {
            const response = await fetch(`http://localhost:8080/login/get-login/${email}/${senha}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Login bem-sucedido:", data);
                localStorage.setItem('cpf', data.perfil.cpf); // Salva o CPF no localStorage
                navigate('/home');
            } else {
                const errorData = await response.json();
                console.error("Erro do servidor:", errorData.message);
                setError("Email ou senha incorretos");
            }
        } catch (error) {
            console.error("Erro:", error);
            setError("Erro ao tentar fazer login");
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <>
            <LoginContainer>
                <LoginCard>
                    <FormDiv>
                        <LogoImg src={LogoGreyBlue} alt="Logo" />
                        <InputDiv>
                            <label>email:</label>
                            <Input type="email" placeholder="digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </InputDiv>
                        <InputDiv>
                            <label>senha:</label>
                            <Input type="password" placeholder="digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                        </InputDiv>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Button onClick={handleHome}>Entrar</Button>
                        <RegisterLink onClick={handleRegister}>Registre-se aqui!</RegisterLink>
                    </FormDiv>
                </LoginCard>
            </LoginContainer>
        </>
    );
}

export default Login;
