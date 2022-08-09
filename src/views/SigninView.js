import React, {useState, useEffect} from "react";
import {Text, View} from "react-native";
import {Button, InputItem, List, Checkbox, Toast} from '@ant-design/react-native'
import {authService} from "../services/authService";

export default function SigninView() {

    const [loginForm, setLoginForm] = useState({
        username: 'orisu5',
        password: '1234567',
        remember: true
    });
    const [btnLoading, setBtnLoading] = useState(false);


    const loginHandle = () => {
        console.log('hanle login: ');

        setBtnLoading(true);
        authService
            .postLogin(loginForm)
            .then(result => {
                const {data} = result;
                console.log('result: ', data.message);
                setRes(data);

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
    };

    const onChangeRemember = (value) => {
        setLoginForm({...loginForm, remember: value.target.checked});
    };


    useEffect(() => {
    }, []);


    return (
        <View style={{flex: 1}} className="items-center justify-center">
            <List renderHeader={'Signin to CY'}>
                <InputItem
                    labelNumber={6}
                    className="w-[400px]"
                    clear
                    onChange={(value) => {
                        setLoginForm({...loginForm, username: value});
                    }}
                    placeholder="Input your username or email">
                    Username
                </InputItem>
                <InputItem
                    labelNumber={6}
                    className="w-[400px]"
                    clear
                    type="password"
                    onChange={(value) => {
                        setLoginForm({...loginForm, password: value});
                    }}
                    placeholder="Input your password"
                >
                    Password
                </InputItem>
                <List.Item>
                    <Checkbox defaultChecked={loginForm.remember} style={{paddingLeft: 110}}
                              onChange={onChangeRemember}>Remember</Checkbox>
                </List.Item>

                <List.Item>
                    <Button
                        style={{width: 'fit-content', margin: 'auto'}}
                        size="small"
                        loading={btnLoading}
                        onPress={loginHandle}
                        type="primary">
                        Sign In
                    </Button>
                    <p style={{textAlign: 'center'}}>Or</p>
                    <Button
                        style={{width: 'fit-content', margin: 'auto'}}
                        size="small"
                        type="primary">
                        Sign Up
                    </Button>
                </List.Item>
            </List>
        </View>
    );
}