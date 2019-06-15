import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Banner from './Banner';
import styled from "styled-components";


export default class Card extends Component {
    render() {
        return (
            <MyBanner style={{elevation: 1}}>
                <Text >{this.props.title}</Text>
                <Text >{this.props.subtitle}</Text>
                <Text >{this.props.caption}</Text>
            </MyBanner>
        );
    }
}
const MyBanner = styled.View`
border-radius: 10px;
background: white;
padding:10px;
margin:5px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;
