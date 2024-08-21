import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGamesStore } from '../../../store'

const GameDetails = ({ route, navigation }: any) => {
    const { game } = route.params

    const { setFavourite } = useGamesStore()
    const setAsFavourite = useCallback(() => {
        setFavourite(game);
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/00/88/98/18/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg' }} resizeMode="cover" style={{ height: 200 }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Button
                        title='Back'
                        onPress={() => navigation.goBack()}
                    />
                    {/* I could have done it with svg images because react native vector icons needs a lot of configurations and I don't have time */}
                    {/* <TouchableOpacity>
                        <Image
                            source={require('../../../assets/heart.svg')}
                            style={{ width: 100, height: 100 }}
                        />
                    </TouchableOpacity> 
                     or use react native svg with transformer
                    */}
                    <Button
                        onPress={setAsFavourite}
                        title="<3"
                        color="#841584"
                    />
                </View>
                <Image
                    source={{ uri: game.iconUrl }}
                    style={styles.gameImage}
                />
            </ImageBackground>
            <View style={{ paddingTop: 20, alignItems: 'center' }}>
                <Text style={styles.title}>{game.title}</Text>
                <Text style={styles.rating}>{game.rating}</Text>
            </View>
        </SafeAreaView>
    )
}

export default GameDetails

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    gameImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        alignSelf: "center"
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