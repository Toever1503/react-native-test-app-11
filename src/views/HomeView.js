<<<<<<< Updated upstream
import React from "react";

export default function HomeView() {
    return (
        <>
            home view
        </>
    )
}
=======
import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import {Carousel} from "@ant-design/react-native";
import HomeCarousel from "../components/HomeCarousel";
import {authService} from "../services/authService";


export default function HomeView() {

    const [homeSetting, setHomeSetting] = useState({
        slides: [],
        recommendProductFilter: []
    });

    useEffect(() => {

        authService.getBanned()
            .then(res => {
                const data = JSON.parse(res.data.data.optionValue);
                console.log('home setting: ', data);

                setHomeSetting({
                    slides: [...data.slides, data.imageBanner1, data.imageBanner2],
                    recommendProductFilter: data.recommendProductFilter
                });
            })
            .catch(err => {
                console.log('get home setting error!')
            })
    }, []);

    return (
        <View style={{width: '100%'}}>
            <HomeCarousel slides={homeSetting.slides}/>
        </View>
    )
}

>>>>>>> Stashed changes
