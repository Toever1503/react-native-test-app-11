import React, {useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Carousel} from "@ant-design/react-native";

export default function HomeCarousel(props) {

    const {slides} = props;
    console.log('carousel props: ', slides)

    const [currentCarouselSelectedIndex, setCurrentCarouselSelectedIndex] = useState(0);
    const afterChangeCarousel = (index) => {
        setCurrentCarouselSelectedIndex(index);
    }
    return slides.length > 0 && (
        <View style={{width: '100%'}}>
            <Carousel
                selectedIndex={currentCarouselSelectedIndex}
                style={styles.wrapper}
                afterChange={afterChangeCarousel}
                autoplay
                infinite>
                {slides.map(e => (
                    <View key={e.imageUrl}
                        style={[styles.containerHorizontal, { backgroundImage: `url(${e.imageUrl})`, backgroundSize: 'cover' }]}>
                    </View>
                ))}
            </Carousel>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        width: '100%',
        height: 150,
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
})