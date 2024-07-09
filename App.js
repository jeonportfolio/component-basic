import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';

export default function App() {
  return (
    <View style={styles.container}>
          <Typography color="red" fontSize={20}>
              이것은 텍스트 입니다.
          </Typography>

          <LocalImage 
              localAsset = {require('./assets/favicon.png')} 
              width = {50}
              height = {50}
        />

        <RemoteImage
            url={'https://cafeptthumb-phinf.pstatic.net/20160320_271/toeicking990_1458482400384vdCfb_JPEG/740_IMG_20160320_224304.jpg?type=w800'}
            width={200}
            height={100}
        />
          
    </View>
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
