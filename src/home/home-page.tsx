import React, { useState } from "react";
import { FlatList, View, StyleSheet, Text, TextInput, Button, TouchableHighlight } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from '@expo/vector-icons';
import UserEntity from "../entity/entity-User";

export default function HomePage({ navigation }) {

    const [searchText, setSearchText] = useState('');

    const [searchResults, setUsers] = useState([]);


    const handleSearch = () => {
        const requestOptions = {
            method: 'GET',
            headers: myHeaders

        };
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "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");



        fetch(`https://api.github.com/users/${searchText}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                    console.log(result)
                setUsers([{
                    id: result.id,
                    name: result.name,
                    avatar: result.avatar_url,
                    repos:result.repos_url,


                }])


            })


            .catch(error => console.log('error', error));
    };




    return (
        <View style={styles.container}>
            <View style={styles.cardPesquiza}>

                <TextInput
                    style={styles.title}
                    onChangeText={setSearchText}
                    value={searchText}
                    placeholder="pesquisar usuário"
                />

                <TouchableHighlight
                    style={styles.botao}
                    onPress={handleSearch}
                >
                    <Ionicons name="ios-search-sharp" size={30} color="black" />
                </TouchableHighlight>
            </View>

            <FlatList
                renderItem={({ item }) => (
                 <TouchableHighlight
                    onPress={() => navigation.navigate('Details',item)}
                    >
                           <View style={styles.card}>
                        <Image style={styles.img} source={{ uri: item.avatar}} />
                        <View style={styles.positionText}>
                            <Text style={styles.testoCard}>{item.name}</Text>
                        </View>
                    </View>
                    </TouchableHighlight>
                )}
                data={searchResults}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(13,17,23)',
        paddingTop: 20,
    },
    card: {
        width: '90%',
        aspectRatio: 5,
        marginTop: 20,
        backgroundColor: '#CFD0D6',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: 10,
        shadowColor: '#000',
        elevation: 15,
        borderRadius: 10,
        marginHorizontal: 20
    },
    cardPesquiza: {
        width: '60%',
        aspectRatio: 8,
        backgroundColor: '#CFD0D6',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: 60,
        shadowColor: '#000',
        elevation: 15,
        borderRadius: 40,
        paddingHorizontal: 40,
        marginHorizontal: 60,
        marginTop: 50,
        alignItems: 'center'
    },
    img: {
        width: 50,
        height: 50,
        marginHorizontal: 20,
        marginRight: 40,
        marginTop: 15,
        borderRadius:25,
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
    },
    testoCard: {
        fontSize: 15,
        fontWeight: '600'
    },
    positionText: {
        marginTop: 25
    },
    botao: {
        marginHorizontal: 60,
        height: 30,
        width: 30,
      
        borderRadius: 40,
        alignItems: 'center',
    }
});

