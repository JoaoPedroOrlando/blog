import React, {useContext, useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';


const ShowScreen = ({navigation})=>{

    const {state} = useContext(Context);

    const blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));

    return(
        <View>
            <Text>Show Screen</Text>
            <Text>{blogPost.title}</Text>
        </View>
    );



}



const styles = StyleSheet.create({});

export default ShowScreen;