// import React, {Component, useEffect, useState} from 'react';
//
// import {Text, View, Button, TextInput, TouchableOpacity, FlatList, ListItem, StyleSheet, Dimensions } from 'react-native';

//import AddTODO from './comps/AddTODO';

/////////////////////////////////
//////////////////////////////////
// function MyButton({	title, colour}: Props){
// 	return(
// 		<View>
// 		<Button title={title} color={colour}/>
// 		</View>
// 	)
// }
//
// export default function App(){
// 	return(
// 		<View>
// 		<Text>Hello Ryan Jewsbury</Text>
// 		</View>
// 	)
// }
//


////////////////////////////////////
// Simple Counter App - Confusion in 8 lines of code :)))))
////////////////////////////////////
//
// export default function Counter(){
// 	const [count, setCount] = useState(0)
//
// 	useEffect(() => {
// 		const id = setInterval(() => setCount((count) => count+1),1000)
// 		return () => clearInterval(id)
// 	}, [])
//
// 	return <Text>{count}</Text>
// }


////////////////////////////////////
// Button Counter App - functional
////////////////////////////////////
//
// function CounterButtonIncrease({title, onIncrement}){
// 	return <Button title={title} onPress={onIncrement}/>
// }
// function CounterButtonDecrease({title, onDecrease}){
// 	return <Button title={title} onPress={onDecrease}/>
// }
//
// export default function App(){
// const [count, setCount] = useState(0)
// return(
// 	<View>
// 		<CounterButtonIncrease title={'Click Here to Increment: '+ count}
// 		onIncrement={() => setCount(count+1)}/>
//
// 		<CounterButtonDecrease title={'Click Here to Decrease: '+ count}
// 		onDecrease={() => setCount(count-1)}/>
// 	</View>
// 	)
// }
//



////////////////////////////////////
// Button Counter App -

////////////////////////////////////


// export default class App extends Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {count: 1, value:1}
// 	}
//
// 	incCount = () =>{
// 		this.setState({count: this.state.count + this.state.value})
// 		console.log("Increase Clicked")
// 	}
// 	decCount = () =>{
// 		this.setState({count: this.state.count - this.state.value})
// 		console.log(" Decrease Clicked")
// 	}
//
// 	render(){
// 		return(
// 			<View>
// 			<Text>Counter!</Text>
// 				<TextInput placeholder="Increase / Decrease Amount"
// 				onChangeText={(text) => {this.setState({value: parseInt(text)})}}
//
//
// 				/>
// 				<Button title="Increment Count" onPress={this.incCount} value={this.state.count}/>
// 				<Button title="Decrease Count" onPress={this.decCount} value={this.state.count}/>
// 				<Text>{this.state.count}</Text>
// 			</View>
// 		)
// 	}
// }


// import React, {Component, useEffect, useState} from 'react';
//
// import {Text, View, Button, TextInput, TouchableOpacity, FlatList, ListItem, StyleSheet} from 'react-native';
//
//
//////////////////////////////////
//Lab Exc 6 (2)
//////////////////////////////////
export default class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			todo_list: [],
			current_item: ""
		}
	}

	addToList = () =>{
			var temp_list = this.state.todo_list
			temp_list.push(this.state.current_item)
			this.setState({todo_list:temp_list})
		}

	removeFromList = (index) =>{
		var new_list = this.state.todo_list
		new_list.splice(index, 1)
		this.setState({todo_list: new_list})
	}

	emptyList = () =>{
		var emptyList = []
		this.setState({todo_list: emptyList})
		console.log("Hhahahahaha")
	}


	render(){
		return(
			<View>
				<Text style={styles.titleText}>Your List </Text>

				<View>
					<View style={styles.container}>
								<TextInput style = {styles.inputBox}
								placeholder="'Go to the shop'"
								onChangeText={(text) => {this.setState({current_item: text})}} value={this.state.current_item}/>
								<TouchableOpacity style={styles.submitButton} onPress={this.addToList}>
									<Text>Add To List</Text>
								</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.clearAllButton} onPress={this.emptyList}>
						<Text style={styles.removeButtonText}>Start New List</Text>
					</TouchableOpacity>
				<View style={styles.test}>
							<FlatList
								data = {this.state.todo_list}
								keyExtractor={(item, index) => index.toString()}
								renderItem = {({item, index}) => (
										<View>
											<Text style={styles.todoText}>{item}</Text>
											<TouchableOpacity style={styles.removeButton} onPress={this.removeFromList}>
											<Text style={styles.removeButtonText}>Done</Text>
											</TouchableOpacity>
										</View>
									)}/>
					</View>
					</View>
			</View>

		)
	}
}


const styles = StyleSheet.create({
  titleText: {
	textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
	marginTop: 20,
  },
	inputBox:{
		margin: 15,
		height: 40,
		width: 250,
		borderColor: '#e3e3e3',
		borderWidth: 1
	},
	container:{
		flexDirection: 'row',
		justifyContent: "center",
		paddingHorizontal: 10
	},
	submitButton: {
		alignItems: "center",
		width: 100,
		height:40,
		backgroundColor: "#e3e3e3",
		padding: 10,
		margin: 15
	},
	test:{
		backgroundColor: "#e3e3e3",
		justifyContent: 'center',
		alignItems: 'center',
	},
	todoText:{
		textAlign: 'center', // <-- the magic
		fontSize: 15,
},
	removeButton: {
		alignItems: "center",
		width: 120,
		height:40,
		backgroundColor: "#0E4D64",
		padding: 10,
		marginBottom: 20
	},
	removeButtonText:{
		color: 'white'
	},
	clearAllButton: {
		alignItems: "center",
		width: 380,
		height:40,
		backgroundColor: "#B60000",
		padding: 10,
		margin: 15
	},
});

//
//
//
//











//
















//
