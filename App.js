import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';
import { Icon } from './src/components/Icons';
import { Badge } from './src/components/Badge';
import { Button } from './src/components/Button';
import { Divider } from './src/components/Divider';
import { Spacer } from './src/components/Spacer';
import { TabIcon } from './src/components/TabIcon';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HeaderWithoutCompound } from './src/components/HeaderWithoutCompound';
import { Header } from './src/components/Header/Header';
import { HookTestComponent } from './src/components/HookTestComponent';
import { useCallback, useState } from 'react';



export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const dosum = useCallback(() => {
      return(a+b)
  },[a,b])

  return (
    <SafeAreaProvider>

    <View style={styles.container}>
        
          <Header>
              <Header.Group>
                  <Header.Title title= "HEADER"></Header.Title>
              </Header.Group>
          </Header>
          <Typography color="red" fontSize={25}>
              이것은 텍스트 입니다.
          </Typography>

          <View style={{flex:1}}>
                <HookTestComponent a={a} b={b}></HookTestComponent>
                
                <Typography>현재 callback으로 계산 된 값: {dosum()}</Typography>
                
                <Button 
                    onPress={() => {
                      console.log('press'),
                      setA(a+1)
                 }}>
                    <Typography>A 더하기</Typography>
                </Button>
          </View>

            <Spacer space={20}/>
            <Divider/>

          <LocalImage 
              localAsset = {require('./assets/favicon.png')} 
              width = {60}
              height = {60}
        />


        <Spacer space={20}/>
        <Divider/>


        <RemoteImage
            url={'https://cafeptthumb-phinf.pstatic.net/20160320_271/toeicking990_1458482400384vdCfb_JPEG/740_IMG_20160320_224304.jpg?type=w800'}
            width={200}
            height={150}
        />

        <Spacer space={20}/>
        <Divider/>

        <Icon
            name = 'home'
            size = {40}
            color = 'red'
        /> 

          <View style={{flexDirection:'row'}}>
            <Badge fontSize={10} >
              <Typography>BADGE</Typography>
            </Badge>

             <Badge fontSize = {10}>
                <Icon name= 'home' size = {50} color= 'black'/>
             </Badge>
          </View>


          <Spacer space={20}/>
          <Divider/>
          
          <View style={{flexDirection:"row", marginTop:32}}>
              <Button onPress= {() => {
                  console.log('PRESSED BUTTON')
              }}>
                  <Typography>TEXT BUTTON</Typography>
              </Button>


          <Spacer space={20}/>
          <Divider/>


              <Button onPress = {() => {
                  console.log('PRESS ICON BUTTON')
              }}>
                  <Icon name='home' size={50} color= 'green'/>
              </Button>
          </View>

          <TabIcon iconName='car'></TabIcon>
          <TabIcon iconName='car' visibleBadge></TabIcon>
          
    </View>
    </SafeAreaProvider>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
