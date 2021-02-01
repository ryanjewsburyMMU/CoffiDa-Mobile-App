import React, {Component, useEffect, useState} from 'react';

import {Text, View, Button, TextInput, FlatList, ListItem, StyleSheet, Dimensions,TouchableOpacity, Alert,} from 'react-native';

export default class App extends Component{

	constructor(props){
		super(props)
		this.state = {
			email: "",
			password: "",
			id:"",
			token:""
		}
	}

	emptyFunc = () =>{
		console.log("Email:   " + this.state.email)
		console.log("Password:    "+ this.state.password)
	}


	post_login = () =>{
		console.log("Post Request Made For Login")
		return fetch("http://10.0.2.2:3333/api/1.0.0/user/login",
			{
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email,
					password: this.state.password
				})
			})
			.then((response)=> {
				if (parseInt(response.status) == 200)
				{
					console.log("Login Success - Code: " + response.status)
					Alert.alert("Login Successful (" +response.status+")", "Test")
					return response.json();					
				}
				if (parseInt(response.status) == 400)
				{
					console.log("Login Unsucesful - Code: " + response.status)		
					Alert.alert("Incorrect Details (" +response.status+")", "Please ensure your email and password are correct, if the problem persits please contact our team for more support.")
	
				}
				if (parseInt(response.status) == 500)
				{
					console.log("Server Error, Please try again soon.  " + response.status)	
					Alert.alert("Connection Error", "We are struggling to connect with you! Please try again or contact our team for further support.")
		
				}
			})
			.then((rjson)=> {
				console.log(rjson.token)
				this.setState({token: rjson.token})
				console.log(rjson.id)
				this.setState({id: rjson.id})
			})
			.catch((error) => {
				console.log("Error")
			})

	}
	 	render(){

			const navigation

	 		return(
				<View>
						<Text>Login:</Text>
						<TextInput placeholder="Email" onChangeText={(text) => {this.setState({email: text})}}/>
						<TextInput placeholder="Password" onChangeText={(text) => {this.setState({password: text})}}/>

						<Button title="Tesst" onPress={()=> this.post_login()} />

						<Text> id = {this.state.id}</Text>
						<Text>token = {this.state.token}</Text>

				</View>
			)}
}
