import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavouritesScreen } from '../features/favourites/screens';
import GameNavigator from './game-navigator';


const Tab = createBottomTabNavigator();
const RootNavigator = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen
                options={{
                    headerShown: false
                }}
                name="Games"
                component={GameNavigator} />
            <Tab.Screen name="Favourites" component={FavouritesScreen} />
        </Tab.Navigator>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})