import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';

export default class Homescreen extends Component{
    render(){
        return(
            <View>

           

            <TouchableOpacity>
<Text>
    Student 
</Text>
            </TouchableOpacity>

            <TouchableOpacity>
<Text>
    Teacher
</Text>
            </TouchableOpacity>
            </View>
        )
    }
}