import React, { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { InfoBox, InfoInput, InfoLabel, ProfileBox, ProfileContainer, Title } from "./Profile.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const Profile: React.FC = () => {
    const [perfil, setPerfil] = useState({ nome: '', idade: '', endereco: '', telefone: '', cpf: '' });
    const [error, setError] = useState('');

    // Supondo que o CPF é obtido dos parâmetros da rota
    const { cpf } = useParams<{ cpf: string }>();

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const response = await fetch(`http://localhost:8080/perfil/get-perfil/${cpf}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setPerfil(data);
                } else {
                    const errorData = await response.json();
                    console.error("Erro do servidor:", errorData.message);
                    setError("Perfil não encontrado");
                }
            } catch (error) {
                console.error("Erro:", error);
                setError("Erro ao buscar perfil");
            }
        };

        fetchPerfil();
    }, [cpf]);

    return (
        <>
            <Navbar />
            <ProfileContainer>
                <ProfileBox>
                    <Title>Informações do perfil</Title>
                    <FontAwesomeIcon icon={faUserCircle} size="3x" />
                    <InfoBox>
                        <InfoLabel>Nome:</InfoLabel>
                        <InfoInput type="text" value={perfil.nome} readOnly />
                        <InfoLabel>Idade:</InfoLabel>
                        <InfoInput type="text" value={perfil.idade} readOnly />
                        <InfoLabel>Endereço:</InfoLabel>
                        <InfoInput type="text" value={perfil.endereco} readOnly />
                        <InfoLabel>Telefone:</InfoLabel>
                        <InfoInput type="text" value={perfil.telefone} readOnly />
                        <InfoLabel>CPF:</InfoLabel>
                        <InfoInput type="text" value={perfil.cpf} readOnly />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </InfoBox>
                </ProfileBox>
            </ProfileContainer>
            <Footer />
        </>
    )
}

export default Profile;
