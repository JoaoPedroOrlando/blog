import React, {useContext,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Button, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons , MaterialIcons} from '@expo/vector-icons'; 
import {Context} from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context);

    useEffect(()=>{
        getBlogPosts();
    },[]);

    return (
        <>
            <FlatList
                data ={state}
                keyExtractor = {blogpost => blogpost.id}
                renderItem={ ({item})=>{
                    return(
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('Show', {id:item.id})}
                    >
                        <View style={styles.row}>
                            <Text style= {styles.title}>
                                {item.title} - {item.id}
                            </Text>
                            <TouchableOpacity 
                                onPress={()=>{deleteBlogPost(item.id)}}
                            >
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

IndexScreen.navigationOptions = ({navigation})=>{
    return{
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <MaterialIcons style={styles.addIcon} name="add-box" color="green" />
            </TouchableOpacity>
        ),
    }
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
    },
    addIcon:{
        fontSize:34,
        marginHorizontal:10,
    },
});

export default IndexScreen;

// // return {
// //     headerRight: () => (
// //       <TouchableOpacity onPress={() => navigation.navigate('Create')}>
// //         <Feather name="plus" size={30} />
// //       </TouchableOpacity>
// //     ),
// //   };