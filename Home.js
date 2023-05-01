import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, createRef, useEffect } from "react";

import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Button,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    Modal,
} from "react-native";

import { scale, moderateScale, verticalScale } from './Dimensions';
import { normalize } from './FontResize';
import { Entypo, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Categories from './Categories';

const Tab = createBottomTabNavigator();

function MyTabs() {

    return (
        <Tab.Navigator
            initialRouteName="Categories"
            screenOptions={{
                tabBarLabelStyle: {
                    marginBottom: verticalScale(6),
                    fontSize: normalize(10),
                    letterSpacing: scale(0.4),
                    fontWeight: '400'
                },
                tabBarInactiveTintColor: '#000',
                tabBarActiveTintColor: '#000',
                tabBarLabelPosition: 'below-icon',
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen
                name="Categories"
                component={Categories}
                options={{
                    tabBarLabel: "Categories",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="apps" size={normalize(18)} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Offers"
                component={Categories}
                options={{
                    tabBarLabel: "Offers",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="credit-card" size={normalize(18)} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Categories}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="search" size={normalize(18)} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Video Trail"
                component={Categories}
                options={{
                    tabBarLabel: "Video Trail",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="videocam" size={normalize(18)} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Sign Up"
                component={Categories}
                options={{
                    tabBarLabel: "Sign Up",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-off" size={24} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Home({ navigation }) {

    useEffect(() => {
        // setVisible(false)
        try {
            var address = 'Bangalore';
            navigation.setOptions({
                headerShown: true,
                headerLeft: () => <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        {/* <Ionicons name="ios-location-sharp" size={normalize(17)} color="#D00B0B" /> */}
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                            }}
                            source={{
                                uri: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1615731137134x158871457094188260%2Fsharepal-logo-11.png?w=&h=&auto=compress&dpr=1&fit=max',
                            }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingHorizontal: scale(5)
                    }}>
                        <Text style={{
                            fontSize: normalize(20),
                            fontWeight: '400',
                            letterSpacing: normalize(1.3)
                        }}>SharePal</Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingHorizontal: scale(8)
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{
                                    fontWeight: '300',
                                    fontSize: normalize(15),
                                    letterSpacing: normalize(1.7)
                                }}
                                >{address}</Text>
                            </View>
                            <View style={{ justifyContent: 'center', paddingHorizontal: scale(2) }}>
                                <Entypo name="chevron-small-down" size={normalize(20)} color="black" />
                            </View>
                        </View>
                    </View>
                </View>,
                title: '',
                headerStyle: {
                    backgroundColor: '#fff'
                },
                headerRight: () => (
                    <MaterialIcons name="person" size={normalize(26)} color="#0927eb" />
                ),

            })
        }
        catch (error) {
            // setloading(false)
            console.log(error)

        }
    }, [])

    return (
        <>
            <StatusBar style="dark-content" />
            <SafeAreaView style={styles.container}>
                <NavigationContainer independent={true}>
                    <MyTabs />
                </NavigationContainer>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.touchableOpacityStyle1}>
                    <Image
                        source={{
                            uri:
                                'https://ik.imagekit.io/faskf16pg/Branding/Main/whatapp-sharepal_6GcbqnN5e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657830361133',
                        }}
                        style={styles.floatingButtonStyle1}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.touchableOpacityStyle2}>
                    <Text style={{
                        color: '#fff',
                        fontSize: scale(10),
                        marginTop: scale(1),
                    }}>0</Text>
                    <View style={{
                        marginBottom: scale(4),
                    }}>
                        <MaterialIcons name="shopping-cart" size={normalize(15)} color="#fff" />
                    </View>
                </TouchableOpacity>

            </SafeAreaView>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#307ecc",
        // backgroundColor: '#fff',
        alignContent: "center",
    },
    touchableOpacityStyle1: {
        position: 'absolute',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 80,
    },
    floatingButtonStyle1: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
    },
    touchableOpacityStyle2: {
        position: 'absolute',
        width: 42,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        right: 15,
        bottom: 135,
        borderRadius: scale(40),
        backgroundColor: '#0927eb'
    },
    floatingButtonStyle2: {
        resizeMode: 'contain',
        width: 40,
        height: 40,

    },
});
