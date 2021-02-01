import 'react-native-gesture-handler'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import React, {Component, useEffect, useState} from 'react';

import {Text, View, Button, TextInput, FlatList, ListItem, StyleSheet, Dimensions,TouchableOpacity, Image, TabBarIOS} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'

import SplashScreen from './comps/splashScreen'
import Login from './comps/login'
import SignUp from './comps/signup'

const Stack = createStackNavigator()

const OpenAppStack = createStackNavigator()

const Tab = createBottomTabNavigator()

const Drawer = createDrawerNavigator()




// export default class Dashboard extends Component{
// 	render(){
// 		return(
//             <NavigationContainer>
//             <OpenAppStack.Navigator screenOptions={{headerShown: false}}>
//                 <OpenAppStack.Screen name="SplashScreen" component={SplashScreen}/> 
//                 <OpenAppStack.Screen name="Login" component={Login}/> 
//                 <OpenAppStack.Screen name="SignUp" component={SignUp}/>
//                 <OpenAppStack.Screen name="DB" component={DB} options={{headerLeft: false}}/>
//             </OpenAppStack.Navigator>
//             </NavigationContainer>
// 	)}
// }



function Home_Tab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="FeedStack" component={FeedStack}/>
            <Tab.Screen name="Search" component={SearchStack}/>
            <Tab.Screen name="CreatePostStack" component={CreatePostStack}/>
        </Tab.Navigator>
    )
}

export default class DB extends Component{
	render(){
		return(
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home_Tab" component={Home_Tab}/> 
                    <Drawer.Screen name="ProfileStack" component={ProfileStack}/>
                    <Drawer.Screen name="Settings" component={Settings}/>
                    <Drawer.Screen name="LogIn" component={LogIn}/>
                </Drawer.Navigator>
                </NavigationContainer>

	)}
}


class ProfileStack extends Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Profile" component={Profile}/> 
                <Stack.Screen name="Profile_Details" component={Profile_Details}/>
            </Stack.Navigator>

        )
    }
}

class Profile extends Component{
	render(){
        const navigation = this.props.navigation;
		return(
            <View>
            <Text>Profile</Text>
            <Button title="Go to details" onPress={() => navigation.navigate('Profile_Details')}/>
            </View>
	)}
}

class Profile_Details extends Component{
	render(){
		return(
            <View><Text>Profile_Details</Text></View>
	)}
}



class FeedStack extends Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Feed" component={Feed}/> 
                <Stack.Screen name="Feed_Details" component={Feed_Details}/>
            </Stack.Navigator>

        )
    }
}
class Feed extends Component{
	render(){
        const navigation = this.props.navigation;
		return(
            <View><Text>Feed</Text>
            <Button title="Go to details" onPress={() => navigation.navigate('Feed_Details')}/>
            </View>
	)}
}

class Feed_Details extends Component{
	render(){
		return(
            <View><Text>Feed_Details</Text></View>
	)}
}






class SearchStack extends Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Search" component={Search}/> 
                <Stack.Screen name="Search_Details" component={Search_Details}/>
            </Stack.Navigator>

        )
    }
}
class Search extends Component{
	render(){
        const navigation = this.props.navigation;
        return(
            <View>
                <Text>Search</Text>
                <Button title="Go to details" onPress={() => navigation.navigate('Search_Details')}/>

            </View>
	)}
}

class Search_Details extends Component{
	render(){
        const navigation = this.props.navigation;
        return(
            <View>
                <Text>Search_Details</Text>
            </View>
	)}
}







class CreatePostStack extends Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="CreatePost" component={CreatePost}/> 
                <Stack.Screen name="CreatePost_Details" component={CreatePost_Details}/>
            </Stack.Navigator>

        )
    }
}

class CreatePost extends Component{
	render(){
        const navigation = this.props.navigation;
		return(
            <View>
                <Text>CreatePost</Text>
                <Button title="Go to details" onPress={() => navigation.navigate('CreatePost_Details')}/>
            </View>
	)}
}

class CreatePost_Details extends Component{
	render(){
		return(
            <View><Text>CreatePost_Details</Text></View>
	)}
}




class LogIn extends Component{
	render(){
		return(
            <View><Text>LogIn</Text></View>
	)}
}




class Settings extends Component{
	render(){
		return(
            <View><Text>Settings</Text></View>
	)}
}

