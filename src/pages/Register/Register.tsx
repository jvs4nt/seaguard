import React, { useState } from 'react';
import { Button, FormDiv, Input, InputDiv, LoginCard, LoginContainer, LogoImg } from "./../Login/Login.style";
import LogoGreyBlue from './../../assets/logo-grey-blue.png';
import { useNavigate } from "react-router-dom";
import { RegisterCard, RegisterContainer } from "./Register.style";

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");

    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página

        const loginData = {
            login: {
                email: email,
                senha: senha
            },
            perfil: {
                nome: nome,
                idade: idade,
                endereco: endereco,
                telefone: telefone,
                cpf: cpf
            }
        };

        console.log("Dados enviados:", loginData);

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            if (response.ok) {
                const responseData = await response.text();
                console.log("Resposta do servidor:", responseData);
                alert("Login criado com sucesso!");
                navigate('/');
            } else {
                const errorText = await response.text();
                console.error("Erro do servidor:", errorText);
                alert(`Erro ao criar login: ${errorText}`);
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao criar login");
        }
    }

    return (
        <>
            <RegisterContainer>
                <RegisterCard>
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
                        <InputDiv>
                            <label>nome:</label>
                            <Input type="text" placeholder="digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </InputDiv>
                        <InputDiv>
                            <label>idade:</label>
                            <Input type="text" placeholder="digite sua idade" value={idade} onChange={(e) => setIdade(e.target.value)} required />
                        </InputDiv>
                        <InputDiv>
                            <label>endereço:</label>
                            <Input type="text" placeholder="digite seu endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
                        </InputDiv>
                        <InputDiv>
                            <label>telefone:</label>
                            <Input type="text" placeholder="digite seu telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                        </InputDiv>
                        <InputDiv>
                            <label>cpf:</label>
                            <Input type="text" placeholder="digite seu cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                        </InputDiv>
                        <Button onClick={handleRegister}>Registrar</Button>
                    </FormDiv>
                </RegisterCard>
            </RegisterContainer>
        </>
    )
}

export default Register;
