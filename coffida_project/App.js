import 'react-native-gesture-handler'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import React, {Component, useEffect, useState} from 'react';

import {Text, View, Button, TextInput, FlatList, ListItem, StyleSheet, Dimensions,TouchableOpacity, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './comps/splashScreen'
import Login from './comps/login'
import SignUp from './comps/signup'

const Stack = createStackNavigator()

export default class App extends Component{
	render(){
		const navigation = this.props.navigation;
		return(
			<SignUp/>

	)}
}

