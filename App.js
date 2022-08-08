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

    return (
        <TailwindProvider>
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
        </TailwindProvider>
    );
}