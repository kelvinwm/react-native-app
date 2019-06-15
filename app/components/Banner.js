import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import ImageOverlay from './ImageOverlay'

export default class Banner extends Component {
    render() {
        return (
            <ImageBackground source={require('../image/cool.jpg')}
                style={styles.banner} >
                <ImageOverlay
                    header='- Alpha -'
                    paragraph='' />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    banner: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
