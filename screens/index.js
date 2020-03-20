import React from 'react'
import HomeScreen from './HomeScreen'

export const ProfileScreen = ({navigation}) => <HomeScreen navigation={navigation} name="Profile" />
export const MessagesScreen = ({navigation}) => <HomeScreen navigation={navigation} name="Messages" />
export const ActivityScreen = ({navigation}) => <HomeScreen navigation={navigation} name="Activity" />

