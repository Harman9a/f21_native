import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {defaultStyles} from '../../constants/Styles';
import colors from '../../constants/colors';

const collectionArr = [
  {
    id: 1,
    name: 'TOPS & TEES',
    src: require('../../assets/images/F21_TopsTees_M.png'),
  },
  {
    id: 2,
    name: 'DRESS',
    src: require('../../assets/images/FOREVER_M_CAT_DRESSES.png'),
  },
  {
    id: 3,
    name: 'JEANS',
    src: require('../../assets/images/F21_Jeans_M.png'),
  },
  {
    id: 4,
    name: 'BOTTOM WEAR',
    src: require('../../assets/images/F21_Bottomwear_M.png'),
  },
  {
    id: 5,
    name: 'ACTIVE WEAR',
    src: require('../../assets/images/F21_Activewear_M.png'),
  },
  {
    id: 6,
    name: '1 PIECE',
    src: require('../../assets/images/F21_1_Piece_M.png'),
  },
  {
    id: 7,
    name: 'SLEEPWEAR',
    src: require('../../assets/images/F21_SleepwearLingerie_M.png'),
  },
];
const CollectionItem = ({imgsrc, name}: any) => {
  return (
    <View>
      <View>
        <Image source={imgsrc} style={styles.image} />
        <Text style={styles.imageConatiner}>{name}</Text>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          placeholder="Search Item"
          style={defaultStyles.inputField}
        />
      </View>
      <View style={styles.banner}>
        <Text style={styles.btnOutlineText}>Buy Now Pay Later With Tabby</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          gap: 20,
          paddingHorizontal: 16,
        }}>
        {collectionArr.map(x => {
          return <CollectionItem imgsrc={x.src} name={x.name} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
  },
  imageConatiner: {
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: '700',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  banner: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },

  seperatorView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 30,
  },
  seperator: {
    fontFamily: 'mon-sb',
    color: colors.grey,
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default Home;
