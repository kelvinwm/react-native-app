import React, { Component } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import styled from "styled-components";

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <MainContent >
                <Loginn>
                    <Text
                        style={{ height: 40, borderColor: 'gray', margin: 15, padding: 10 }}
                    >Welcome to This Awesome App!</Text>
                    <TextInput

                        style={{
                            height: 40, borderColor: 'gray', margin: 15,
                            borderWidth: 1, borderRadius: 14, padding: 10, marginTop: 5
                        }}
                        underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                    />
                    <TextInput
                        style={{
                        height: 40, borderColor: 'gray', margin: 15,
                        borderWidth: 1, borderRadius: 14, padding: 10
                    }}
                    underlin
                        eColorAndroid="transparent"
                    placeholder="Password"
                    
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                />
                    <Button
                        onPress={() => this.login(this.state.email, this.state.password)}
                        title="Submit"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />

                    <TouchableOpacity
                        onPress={
                            () => this.login(this.state.email, this.state.password)
                        }>
                        <Text style={{ height: 40, borderColor: 'gray', padding: 10 }}
                        >Forgot password!
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={
                            () => this.login(this.state.email, this.state.password)
                        }>
                        <Text
                        style={{ height: 40, borderColor: 'gray', padding: 10 }}
                    >Not registered, Register Now!</Text>
                    </TouchableOpacity>
                </Loginn> 
            </MainContent>
        );         
    }
}

const MainContent = styled.View`
  background: #f0f3f5;
  flex: 1;
  padding-Top: 80px;
  `;
const Loginn = styled.View`
    background-color: white;
    width: 315px;
    height: 320px;
    border-radius: 14px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    margin-left: 30px;
    margin-top: 90px;
`;

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 14
    },
    submitButtonText: {
        color: 'white'
    }
})
 