import React from 'react'
import {ScrollView,Image} from 'react-native';
import Header from './header';
import Blogs from './blogs';
import Logo from '../../../assets/splash-icon.png'
class Blog extends React.Component{
    static navigationOptions = {
        headerShown: false,
      };
    render(){
        return(
            <ScrollView contentContainerStyle={{paddingTop:50}} showsVerticalScrollIndicator={false}>
            <Image source={Logo} style={{width:30,height:30,position:'absolute',padding:20,top:5}}/>
    
            <Header {...this.props} />
            
            <Blogs {...this.props} />
           
          </ScrollView>
        )
    }
}

export default Blog