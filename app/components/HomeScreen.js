import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import styled from "styled-components";
import {Icon} from 'native-base'

import Banner from './Banner'
import Header2 from './Header'
import ContentContainer from './ContentContainer'

export default class HomeScreen extends Component {

    // static navigationOptions = {
    //     title: "My Bookings",
    //     headerStyle: {
    //         backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // };
    render() {
        return (
            <MainContent>
               {/* <Header2 navigation={this.props.navigation} title="My bookings"/> */}
                <Banner />
                <ScrollView>
                    <ContentContainer navigation={this.props.navigation} />
                </ScrollView>
                <TouchableOpacity style={styles.fab}
                    onPress={() => this.props.navigation.navigate('Banner')}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </MainContent>
        );
    }
}
const MainContent = styled.View`
flex: 1;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;
const styles = StyleSheet.create({
    fab: {
        height: 50,
        width: 50,
        borderRadius: 200,
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#686cc3',
    },
    text: {
        fontSize: 30,
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
