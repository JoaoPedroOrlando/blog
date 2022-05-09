import React, {useContext} from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

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

ShowScreen.navigationOptions = ({navigation})=>{
    return{
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <MaterialCommunityIcons name="square-edit-outline" style={styles.icon} />
            </TouchableOpacity>
          ),
    } 
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
    },
    icon:{
        fontSize:35,
        margin:5,
        color:'black',
    }
});

export default ShowScreen;