import React from "react"
import { View, Image, Text} from 'react-native';
import { randomNumber } from '../fakeJson'
import { styles } from './SlideItem-styles'
import * as Animatable from 'react-native-animatable'

export default function SlideItem({ item }) {
    return (
        <View style={styles.imagesContainer}>
            <View style={styles.contHeader}>
                <View style={styles.contImg}>
                    <Animatable.Image animation={'bounceIn'} style={styles.imageDuos} source={{ uri: item[0].image[randomNumber] }} />
                    <Text style={styles.titleImg}> {item[0].title}</Text>
                </View>
                <View style={styles.contImg}>
                    <Animatable.Image animation={'bounceIn'} style={styles.imageDuos} source={{ uri: item[1].image[randomNumber] }} />
                    <Text style={styles.titleImg}> {item[1].title}</Text>
                </View>
            </View>
            <Animatable.Image animation={'bounceIn'} style={styles.image} source={{ uri: item[2].image[randomNumber] }} />
            <Text style={styles.titleImgMain}> {item[2].title} </Text>
        </View>
    )
}