import React from 'react'
import {View,Text,TouchableOpacity, Image,Dimensions} from 'react-native'


class ViewBlog extends React.Component{
   
    
    render(){
        return(
            <View style={{flex:1,}}>
                <Image source={{uri:'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer3.webp'}} style={{width:'100%',height:240}}/>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'gray',}}>Posted Date ....</Text>

                <Text style={{color:'gray',}}>Published By Favorite Flyers</Text>
                </View>
                <View style={{borderWidth:1,borderColor:'white',padding:10,borderRadius:5,marginTop:20}}>
                <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>Blog About ... </Text>
                
                </View> 
                <View style={{borderWidth:1,borderColor:'white',padding:10,borderRadius:5,marginTop:10}}>
                   
                    <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>Description : </Text>
                <Text style={{fontSize:15}}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</Text>
                </View>
            </View>
        )
    }
}

export default ViewBlog