import React from 'react'

import { View, Text, Image } from 'react-native';
import { ButtonSign } from '../../components/ButtonSign';

import { Fontisto } from '@expo/vector-icons';

import BackgroundAutenticacao from '../../assets/background-autenticacao.png';


import { styles } from './styles'

export function SignIn() {
    return (
        <View style={styles.container}>     
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
                    <ButtonSign iconName="email" title="Entrar com E-mail"></ButtonSign>
                    <ButtonSign iconName="google" title="Entrar com Google"></ButtonSign>
                    <ButtonSign iconName="apple" title="Entrar com Apple"></ButtonSign>
                </View>
            </View>
        </View>
    )
}
