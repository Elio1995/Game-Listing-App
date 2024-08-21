import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameDetails, GamesScreen } from '../features/games/screens';

const Stack = createNativeStackNavigator();



const GameNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='GamesScreen' component={GamesScreen} />
            <Stack.Screen options={{
                headerShown: false
            }} name='GameDetails' component={GameDetails} />
        </Stack.Navigator>
    )
}

export default GameNavigator