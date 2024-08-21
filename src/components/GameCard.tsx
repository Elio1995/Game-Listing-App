import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { useGamesStore } from '../store'
import { Game } from '../types/game-store.interface'
import { useNavigation } from '@react-navigation/native'

type GameCardProps = {
    game: Game
}

const GameCard = ({ game }: GameCardProps) => {

    const navigate = useNavigation()

    const { setFavourite } = useGamesStore()
    const setAsFavourite = useCallback(() => {
        setFavourite(game)
    }, [])

    const openGameDetails = () => {
        navigate.navigate('GameDetails', { game })
    }
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Image
                    source={{ uri: game.iconUrl }}
                    style={styles.gameImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{game.title}</Text>
                    <Text style={styles.rating}>{game.rating}</Text>
                </View>
                <Button
                    onPress={setAsFavourite}
                    title="<3"
                    color="#841584"
                />
            </View>
            <Button
                onPress={openGameDetails}
                title="Open Game"
                color="#841584"
            />
        </View>
    )
}

export default GameCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    gameImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    rating: {
        fontSize: 16,
        color: '#888',
    },
})