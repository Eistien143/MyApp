/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from '../screen/SearchScreen';
import TicketScreen from '../screen/TicketScreen';
import UserAccount from '../screen/UserAccount';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return <Tab.Navigator screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
            height: 60,
        },
    }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarShowLabel: false,

            tabBarIcon: ({ color, size }) => {
                return <View style={styles.activeTabBackground}>
                    <Icon name="home" color={color} size={size} />
                </View>;
            },
        }}
        />
        <Tab.Screen name="Search" component={SearchScreen} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => {
                return (
                    <View style={styles.activeTabBackground}>
                        <Icon name="search" color={color} size={size} />
                    </View>
                );
            },
        }} />
        <Tab.Screen name="Ticket" component={TicketScreen} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => {
                return <View style={styles.activeTabBackground}>
                    <Icon name="ticket" color={color} size={size} />
                </View>;
            },
        }} />
        <Tab.Screen name="User" component={UserAccount} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => {
                return <View style={styles.activeTabBackground}>
                    <Icon name="user" color={color} size={size} />
                </View>;
            },
        }} />
    </Tab.Navigator>;
};

const styles = StyleSheet.create({
    activeTabBackground: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,

    },
});

export default TabNavigator;
