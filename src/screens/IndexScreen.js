import React, {useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button} from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen = () => {
    const {blogPosts,addBlogPost} = useContext(Context);

    return (
        <>
            <Text>Index Screen</Text>
            <Button
                title="Add post"
                onPress={()=>{
                    addBlogPost()
                }}
            />
            <FlatList
                data ={blogPosts}
                keyExtractor = {post => post.title}
                renderItem={ ({item})=>{
                    return(<View>
                        <Text>{item.title}</Text>
                    </View>);
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({

});

export default IndexScreen;
