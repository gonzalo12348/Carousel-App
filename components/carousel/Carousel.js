import React, { useEffect, useRef, useState } from "react"
import { Text, View, FlatList , Image, TouchableOpacity, Vibration} from 'react-native';
import { fakeJson, length } from '../fakeJson'
import SlideItem from "../SlideItem/SlideItem";
import { styles } from './Carousel-styles'





export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const flatListRef = useRef();

    useEffect(() => {
        flatListRef.current.scrollToIndex({ index: current, animated: true });
    }, [current]);

    const renderItem = ({ item }) => {
        // const arr = Object.values( item );
        return <SlideItem item={item}/>
    }
    
    const goNextSlide = () => {
        setCurrent(current < length -1 ? current + 1 : 0);
        Vibration.vibrate(50)
        flatListRef.current.scrollToIndex({ index: current, animated: false });
    };
    const goPrevSlide = () => {
        setCurrent(current ? current - 1 : length - 1);
        Vibration.vibrate(50)
        flatListRef.current.scrollToIndex({ index: current, animated: false });
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={fakeJson}
                keyExtractor={item => item[0].id}
                style={styles.flatlistContainer}
                pagingEnabled={true}
                bounces={true}
                renderItem={renderItem}
                horizontal={true}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                ref={flatListRef}
            />
            <View style={styles.containerButton}>
                    <TouchableOpacity 
                        onPress={goPrevSlide}
                        disabled={current == 0 ? true : false}
                        style={styles.button}
                    >
                            <Image style={ current == 0 ? styles.imagePrevOff: styles.imagePrev} source={ require('../../assets/nextwhite.png') } />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={goNextSlide}
                        disabled={current == length - 1? true : false}
                        style={styles.button}
                    >
                            <Image style={ current == length -1 ? styles.imageNextOff : styles.imageNext} source={ require('../../assets/nextwhite.png') } />
                    </TouchableOpacity>
            </View>
        </View>
    )
}

