<<<<<<< Updated upstream
import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';
import {TabBar} from '@ant-design/react-native'
import { AntDesign  } from '@expo/vector-icons';

export default function App() {

    const [selectedTab, setSelectedTab] = useState('redTab');
    // const selectedTab = 'redTab';

    const onChangeTab = (tabName) => {
        setSelectedTab(tabName);
    }
    const renderContent = (pageText) => {
        return (
            <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
                <Text style={{margin: 50}}>{pageText}</Text>
            </View>
        )
    }

    const [height1, setHeight] = useState(window.innerHeight);
    const w = window.innerWidth;
=======
import React from 'react';
import {Text, View, StatusBar, ScrollView, Dimensions} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';
import {Provider, Tabs} from '@ant-design/react-native'
import SigninView from "./src/views/SigninView.js";
import SignupView from "./src/views/SignupView";
import HomeView from "./src/views/HomeView";

export default function App() {
    const tabs = [
        {title: 'First Tab'},
        {title: 'Second Tab'},
        {title: 'Third Tab'},
    ];

    const width = Dimensions.get('window').width; //full width
    const height = Dimensions.get('window').height; //full height
>>>>>>> Stashed changes

    return (

        <TailwindProvider>
<<<<<<< Updated upstream
            <View style={{ flex: 1 }} className="1222 relative h-full w-full items-center justify-center bg-white">
                <Text className="mt-[100px] p-[50px] text-red-500">Open up App.js to start working on your app!
                --
                    height: {height1}, w: {w}

                </Text>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="#f5f5f5">
                    <TabBar.Item
                        title="Life"
                        icon={<AntDesign name="home"/>}
                        selected={selectedTab === 'blueTab'}
                        onPress={() => onChangeTab('blueTab')}>
                        {renderContent('Life Tab')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<AntDesign name="ordered-list"/>}
                        title="Koubei"
                        badge={2}
                        selected={selectedTab === 'redTab'}
                        onPress={() => onChangeTab('redTab')}>
                        {renderContent('Koubei Tab')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<AntDesign name="like"/>}
                        title="Friend"
                        selected={selectedTab === 'greenTab'}
                        onPress={() => onChangeTab('greenTab')}>
                        {renderContent('Friend Tab')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<AntDesign name="user"/>}
                        title="My"
                        selected={selectedTab === 'yellowTab'}
                        onPress={() => onChangeTab('yellowTab')}>
                        {renderContent('My Tab')}
                    </TabBar.Item>
                </TabBar>
            </View>
=======
            <Provider>
                <View style={
                    {
                        marginTop: 15,
                        paddingBottom: 16,
                    }
                } className="relative h-full items-center">
                    {/*<ScrollView className="w-full">*/}
                    {/*    <Tabs className="absolute w-full bottom-[15px]" tabs={tabs} tabBarPosition="bottom">*/}
                    {/*        <View className="h-[660px]">*/}
                    {/*            <SigninView/>*/}
                    {/*        </View>*/}
                    {/*        <View>*/}
                    {/*            <Text>Content of Second Tab</Text>*/}
                    {/*        </View>*/}
                    {/*        <View>*/}
                    {/*            <Text>Content of Third Tab</Text>*/}
                    {/*        </View>*/}
                    {/*    </Tabs>*/}
                    {/*</ScrollView>*/}

                    <HomeView/>
                    {/*<SigninView />*/}
                </View>
            </Provider>
>>>>>>> Stashed changes
        </TailwindProvider>

    );
}
