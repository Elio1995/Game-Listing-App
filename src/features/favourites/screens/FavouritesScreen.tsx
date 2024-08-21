import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useGamesStore } from '../../../store';
import { GameCard } from '../../../components';

const FavouritesScreen = () => {
    const { favourites, setFavourite } = useGamesStore();


    return (
        <ScrollView style={styles.container}>
            {
                favourites.length === 0 ?
                    <View>
                        <Text>There are no favourite games yet</Text>
                    </View>
                    :
                    favourites.map((favourite, index) => (
                        <GameCard key={index} game={favourite} />
                    ))
            }
        </ScrollView>
    )
}

export default FavouritesScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})