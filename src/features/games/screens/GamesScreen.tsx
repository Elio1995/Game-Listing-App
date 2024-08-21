import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import { useGamesStore } from '../../../store'
import { GameCard } from '../../../components';

const GamesScreen = () => {

    const [refreshing, setRefreshing] = useState(false)

    const { games, getAllGames } = useGamesStore();

    useEffect(() => {
        getAllGames()
    }, [])

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        await getAllGames()
        setRefreshing(false)
    }, [])

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={styles.container}
        >
            {
                games.map((game, index) => (
                    <GameCard key={index} game={game} />
                ))
            }
        </ScrollView>
    )
}

export default GamesScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

})
