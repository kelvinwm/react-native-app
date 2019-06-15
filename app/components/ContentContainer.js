import React, { Component } from 'react';
import { Alert, StyleSheet, View, TouchableHighlight } from 'react-native';
import styled from "styled-components";

import Card from './Card'

export default class ContentContainer extends Component {

    /*PASS PARAMETERS TO THE ACTIVTY U ARE NAVIGATING TO*/
    _onPressButton(title) {
        this.props.navigation.navigate('Detail', {
            title: title,
            otherParam: 'anything you want here',
          })
    }
    static navigationOptions = {
        title: "Kenya Moja 345",
    };
    render() {
        return (
            <MyContent>

                {cards.map((card, index) => (
                    <TouchableHighlight key={index} 
                    onPress={() =>{this._onPressButton(card.title)}} underlayColor="white">
                        <Card
                            title={card.title}
                            subtitle={card.subtitle}
                            caption={card.caption}
                        />
                    </TouchableHighlight>

                ))}
            </MyContent>
        );
    }
}

const MyContent = styled.View`
        flex: 1;
        margin-Bottom: 20px;
        `;

const cards = [
    {
        title: "React Native for Designers",
        subtitle: "React Native",
        caption: "1 of 12 sections",
    },
    {
        title: "Styled Components",
        subtitle: "React Native",
        caption: "2 of 12 sections",
    },
    {
        title: "Props and Icons",
        subtitle: "React Native",
        caption: "3 of 12 sections",
    },
    {
        title: "Static Data and Loop",
        subtitle: "React Native",
        caption: "4 of 12 sections",
    },
    {
        title: "Styled Components",
        subtitle: "React Native",
        caption: "2 of 12 sections",
    },
    {
        title: "Props and Icons",
        subtitle: "React Native",
        caption: "3 of 12 sections",
    },
    {
        title: "Static Data and Loop",
        subtitle: "React Native",
        caption: "4 of 12 sections",
    },
    {
        title: "Static Data and Loop",
        subtitle: "React Native",
        caption: "4 of 12 sections",
    },
    {
        title: "Styled Components",
        subtitle: "React Native",
        caption: "2 of 12 sections",
    },
    {
        title: "Props and Icons",
        subtitle: "React Native",
        caption: "3 of 12 sections",
    },
    {
        title: "Static Data and Loop",
        subtitle: "React Native",
        caption: "4 of 12 sections",
    }
];
