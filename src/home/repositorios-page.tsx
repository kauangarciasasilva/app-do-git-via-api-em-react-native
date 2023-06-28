import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text, TextInput, TouchableHighlight } from "react-native";
import { Image } from "expo-image";
import ReposEntity from "../entity/entity-Repos";

export default function RepositoriosPage({ route, navigation }) {

    const [searchRepos, setSearchRepos] = useState('');

    const [team, setTeam] = useState<ReposEntity[]>([]);

    const [filteredTeam, setFilteredTeam] = useState<ReposEntity[]>([]);


    const { id, name, avatar, repos } = route.params;


    const handleSearch = () => {
        // Faz a busca na lista de repositórios
        const filteredRepos = team.filter(item => item.name.includes(searchRepos));
        setFilteredTeam(filteredRepos);
    };

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "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");
        var teamList: ReposEntity[] = [];

        fetch(repos, requestOptions)
            .then(response => response.json())
            .then(result => {
                result.map((item) => {
                    teamList.push({
                        id: item.id,
                        name: item.name,
                        private: item.private,
                        fullName: item.full_name,
                        watchers: item.watchers,
                        gitUrl: item.git_url,
                        forks: item.forks,
                        language: item.language,
                        defaultBranch: item.default_branch,
                        createdAt: item.created_at,
                        description:item.description,
                    });
                });
                setTeam(teamList);
                setFilteredTeam(teamList); // Atualiza a lista filtrada com a lista completa inicialmente
            })
            .catch(error => console.log('error', error));
    }, []);

    useEffect(() => {
        // Atualiza a lista filtrada sempre que a pesquisa for alterada
        const filteredRepos = team.filter(item => item.name.includes(searchRepos));
        setFilteredTeam(filteredRepos);
    }, [searchRepos]);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.img} source={avatar} />
                <View style={styles.positionText}>
                    <Text style={styles.testoCard}>{name}</Text>
                </View>
            </View>

            <View style={styles.cardPesquiza}>
                <TextInput
                    style={styles.title}
                    onChangeText={setSearchRepos}
                    value={searchRepos}
                    placeholder="pesquisar usuário"
                />

          
            </View>

            <FlatList
                renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => {
                            console.log(item);
                         
                            navigation.navigate('repos', item);
                        }
                        }
                    >
                        <View style={styles.card}>

                            <View style={styles.positionText}>
                                <Text style={styles.testoCard}>{item.name}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                )}
                data={filteredTeam} // Usar a lista filtrada como fonte de dados para a FlatList
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
        flexDirection: 'row',
        margin: 20,
        shadowColor: '#000',
        elevation: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'flex-start',


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
        borderRadius: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
    },
    testoCard: {
        fontSize: 15,
        fontWeight: '600',
        marginHorizontal: 60,


    },
    testo: {
        fontSize: 15,
        fontWeight: '600',
        marginHorizontal: 60,



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
    },
  
});

