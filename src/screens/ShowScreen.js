import React, {useContext, useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';


const ShowScreen = ({navigation})=>{

    const {state} = useContext(Context);

    const blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));

    return(
        <View>
            <View style={styles.card}>
                <Text style={styles.title}>{blogPost.title}:</Text>
                <Text style={styles.content}>{blogPost.content}</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        margin:10,
        borderRadius:4,
    },
    title:{
        fontSize:20,
        fontWeight:'500',
        textTransform:'uppercase',
    },
    content:{
        fontSize:16,
        color:'gray',
    }
});

export default ShowScreen;