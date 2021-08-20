import React from 'react'

import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';

import BackgroundAutenticacao from '../../assets/background-autenticacao.png';

import { ButtonSign } from '../../components/ButtonSign';

import { useAuth } from '../../hooks/auth';


import { styles } from './styles'

export function SignIn() {
    const {loading, signIn } = useAuth();

    const handleSignIn = (type: string) => {
        signIn();
    }

    return (
        <View style={loading ? styles.container : styles.containerLoading}>  
            <View style={styles.contentMessage}>     
                <Text style={styles.message}>Divida contas com seus amigos</Text>
                <Text style={styles.subMessage}>Simples,</Text>
                <Text style={styles.subMessage}>rápido e fácil.</Text>
                <Fontisto name="arrow-down-l" size={24} style={styles.icon}/>
                <Image source={BackgroundAutenticacao}  resizeMode="stretch" style={styles.image} />
            </View>
            <View style={styles.signIn}>     
                <View style={styles.containerTitle}>
                    <Text style={styles.title} >Faça seu login</Text>
                    <Text style={styles.subtitle} >com uma das contas abaixo</Text>
                </View>
                <View style={styles.containerButtons}>  
                    <View>
                        <ButtonSign onPress={()=> handleSignIn('email')} iconName="email" title="Entrar com E-mail"></ButtonSign>
                        <ButtonSign onPress={()=> handleSignIn('google')} iconName="google" title="Entrar com Google"></ButtonSign>
                        <ButtonSign onPress={()=> handleSignIn('apple')} iconName="apple" title="Entrar com Apple"></ButtonSign>
                    </View>
                </View>
            </View>
        </View>
    )
}
