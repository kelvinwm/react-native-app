import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base'

export default class Header2 extends Component {
    render() {
        return (
            <View>
                <Header>
                    <Text>{this.props.title}</Text>
                </Header>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        marginTop: 20,
        alignItems: 'center',
        borderBottomWidth: 4,
        justifyContent: 'center',
        borderBottomColor: '#ccc',
        flexDirection: 'row',
    },
    welcome: {
        color: "red"
    }
});
