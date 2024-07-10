import React from 'react';
import { View } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { Spacer } from '../Spacer';
import { HeaderIcon } from './HeaderButton';
import { HeaderTitle } from './HeaderTitle';


const {width} = Dimensions.get('window');

export class Header extends React.Component {
    render(){
        return(
            <SafeAreaInsetsContext>
                    {insets => (
                        <View style ={{ paddingTop: insets.top,}} >
                            <View style = {{
                                width: width, 
                                flexDirection: "row", 
                                height:56, 
                                borderBottomColor: 'gray', 
                                borderBottomWidth: 1, 
                                alignItems:"center"
                            }}>
                                    <Spacer horizontal= {true} space= {12}/>
                                        <View   style={{flex:1, flexDirection: "row", justifyContent: "space-between"}}>
                                            {this.props.children}
                                        </View>  
                                    <Spacer horizontal={ture} space= {12}/>

                            </View>
                        </View>
                    )}
            </SafeAreaInsetsContext>
        )
    }
}

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;