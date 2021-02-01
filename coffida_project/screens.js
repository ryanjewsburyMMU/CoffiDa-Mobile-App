import React from 'react';

import { Text, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"

export const SignIn = ({navigation}) =>{
    return(
        <ScreenContainer>
            <Text>Sign In Screen</Text>
            <Button title="Create AScccoun" onPress={()=> navigation.push('CreateAccount')}/>
        </ScreenContainer>
    )
}

export const CreateAccount = ({navigation}) =>{
    return(
        <ScreenContainer>
            <Text>Create Account Screen</Text>
        </ScreenContainer>
    )
}