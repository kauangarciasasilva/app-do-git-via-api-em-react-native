import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ReposEntity from "../entity/entity-Repos";

export default function ReposPage({ route, navigation }) {
    const repos: ReposEntity = route.params;

    const resultado = true;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{repos.name}</Text>
            <View style={styles.positionText}>
                <Text style={styles.texto}>HTTPS: {repos.gitUrl}</Text>
                <Text style={styles.texto}>Data de criação: {repos.createdAt}</Text>
                <Text style={styles.texto}>Visualização: {repos.watchers}</Text>
                <Text style={styles.texto}>Forks: {repos.forks}</Text>
                <Text style={styles.texto}>Linguagem: {repos.language}</Text>
                <Text style={styles.texto}>Branch padrão: {repos.defaultBranch}</Text>
                <Text style={styles.texto}>Description: {repos.description}</Text>
                <Text style={styles.texto}>
                    Resultado: {resultado ? "Public" : "Private"}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "rgb(52,53,65)",
        paddingTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        marginTop: 20,
        margin: 60,
    },
    texto: {
        fontSize: 15,
        fontWeight: "600",
        marginHorizontal: 10,
        padding: 10,
    },
    positionText: {
        marginTop: 25,
    },
});
