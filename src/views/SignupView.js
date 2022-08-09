import React, {useEffect, useState} from "react";
import {Button, InputItem, List, Toast} from "@ant-design/react-native";
import {View} from "react-native";
import {TailwindProvider} from 'tailwindcss-react-native';

import {authService} from "../services/authService";

export default function SignupView() {
    const [registerForm, setRegisterForm] = useState({
        email: '',
        userName: '',
        url: '124124'
    });

    const [btnLoading, setBtnLoading] = useState(false);


    const registerHandle = () => {
        console.log('hanle login: ', registerForm);

        setBtnLoading(true);
        authService
            .doSignUp(registerForm)
            .then(result => {
                const {data} = result;
                console.log('result: ', data.message);

                setBtnLoading(false);
                Toast.info({
                    content: 'Login successfully!',
                    stackable: true,
                })
            })
            .catch(err => {
                console.log('err: ', err);
                setBtnLoading(false);
                Toast.info({
                    content: 'Login failed!',
                    stackable: true,
                })
            });
    }

    useEffect(() => {
    }, []);


    return (
        <TailwindProvider>
            <View style={{flex: 1}} className="items-center justify-center">
                <List renderHeader={'Signup to CY'}>
                    <InputItem
                        labelNumber={6}
                        clear
                        onChange={(value) => {
                            setRegisterForm({...registerForm, userName: value});
                        }}
                        placeholder="Input your username">
                        Username
                    </InputItem>
                    <InputItem
                        labelNumber={6}
                        clear
                        onChange={(value) => {
                            setRegisterForm({...registerForm, email: value});
                        }}
                        placeholder="Input your email"
                    >
                        Email
                    </InputItem>
                    <List.Item>
                        <Button
                            style={{width: 'fit-content', margin: 'auto'}}
                            size="small"
                            loading={btnLoading}
                            onPress={registerHandle}
                            type="primary">
                            Sign Up
                        </Button>
                        <p style={{textAlign: 'center'}}>Or</p>
                        <Button
                            style={{width: 'fit-content', margin: 'auto'}}
                            size="small"
                            type="primary">
                            Sign In
                        </Button>

                    </List.Item>
                </List>
            </View>
        </TailwindProvider>
    );
}