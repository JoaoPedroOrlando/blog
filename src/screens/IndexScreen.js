import React, {useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {Context} from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <>
            <Button
                title="Add post"
                onPress={()=>{
                    addBlogPost()
                }}
            />
            <FlatList
                data ={state}
                keyExtractor = {blogpost => blogpost.id}
                renderItem={ ({item})=>{
                    return(
                    <TouchableOpacity onPress={()=>navigation.navigate('Show', {id:item.id})}>
                        <View style={styles.row}>
                            <Text style= {styles.title}>
                                {item.title} - {item.id}
                            </Text>
                            <TouchableOpacity onPress={()=>{deleteBlogPost(item.id)}}>
                                <MaterialCommunityIcons style={styles.icon} name="delete" color="black" />
                            </TouchableOpacity>  
                        </View>
                    </TouchableOpacity>
                    );
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderColor:'gray',
        padding:10,
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:30,
    }
});

export default IndexScreen;
