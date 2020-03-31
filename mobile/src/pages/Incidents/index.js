import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import LogoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {

    const navigation = useNavigation();

    function navigationToDetail(){
        navigation.navigate('Detail');
    }
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Image source={LogoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>
                Bem vindo!
            </Text>
            <Text style={styles.description}>
                Escolha um desses casos abaixo e salve o dia
            </Text>

            <FlatList
                style={styles.incidentList}
                data={[1, 2, 3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG: </Text>
                        <Text style={styles.incidentValue}>APAD </Text>

                        <Text style={styles.incidentProperty}>CASO: </Text>
                        <Text style={styles.incidentValue}>Gato atropelado </Text>

                        <Text style={styles.incidentProperty}>VALOR: </Text>
                        <Text style={styles.incidentValue}>R$ 120,00 </Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={navigationToDetail}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes </Text>
                            <Feather name="arrow-right" size={17} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}