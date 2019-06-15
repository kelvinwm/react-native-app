import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base'

import Header2 from './Header'

export default class Details extends Component {

    static navigationOptions = {
        title: "Here are the Details",
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    // static navigationOptions = {
    //     drawerLabel: 'Details',
    //     drawerIcon: ({ tintColor }) => (
    //      <Icon name="bookmarks" style= {{fontSize: 24, color: tintColor}}/>
    //     ),
    //   };

    render() {
        /* 2. Get the param, provide a fallback value if not available */
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const title = navigation.getParam('title', 'NO-title');
        const otherParam = navigation.getParam('otherParam', 'some default value');
        return (
            <View>
                {/* <Header2 navigation={this.props.navigation} title="My Details"/> */}
                <Text>{title}</Text>
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
    },
    welcome: {
        color: "red"
    }
});
