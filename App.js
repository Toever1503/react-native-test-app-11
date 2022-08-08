import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Text, View} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';
import {Tabs} from '@ant-design/react-native'

export default function App() {
    const tabs = [
        {title: 'First Tab'},
        {title: 'Second Tab'},
        {title: 'Third Tab'},
    ]

    return (
        <TailwindProvider>
            <View className="flex-1 items-center justify-center bg-white">
                <Text className="text-red-500">Open up App.js to start working on your app!</Text>
                <StatusBar style="auto"/>
                <Tabs tabs={tabs}>
                    <View>
                        <Text>Content of First Tab</Text>
                    </View>
                    <View>
                        <Text>Content of Second Tab</Text>
                    </View>
                    <View>
                        <Text>Content of Third Tab</Text>
                    </View>
                </Tabs>
            </View>
        </TailwindProvider>
    );
}