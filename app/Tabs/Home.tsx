import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {defaultStyles} from '../../constants/Styles';
import colors from '../../constants/colors';
import axios from 'axios';
import {SliderBox} from 'react-native-image-slider-box';

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
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios
      .get('https://forever-21-dubai.myshopify.com/products.json')
      .then(res => {
        setAllProducts(res.data.products);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={{backgroundColor: '#fff', marginBottom: 80}}>
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          placeholder="Search Item"
          style={defaultStyles.inputField}
        />
      </View>
      <ScrollView>
        <View style={styles.banner}>
          <Text style={styles.btnOutlineText}>
            Buy Now Pay Later With Tabby
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 0,
            paddingHorizontal: 16,
            paddingVertical: 10,
          }}>
          {collectionArr.map(x => {
            return <CollectionItem key={x.id} imgsrc={x.src} name={x.name} />;
          })}
        </ScrollView>
        <Image
          source={require('../../assets/images/slider3.jpg')}
          style={styles.imagebanner}
        />
        <Image
          source={require('../../assets/images/banner3.jpg')}
          resizeMode={'cover'}
          style={styles.imagebanner}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 0,
            paddingTop: 20,
          }}>
          {allProducts.map((product: any, i) => {
            if (i < 10) {
              return (
                <View key={product.id} style={styles.productCard}>
                  <View>
                    <Image
                      style={styles.imagebanner}
                      source={{
                        uri: product.variants[0].featured_image.src,
                      }}
                    />
                    <Text
                      style={[
                        styles.productCardTtile,
                        {overflow: 'hidden', fontSize: 14},
                      ]}>
                      {product.title}
                    </Text>
                    {/* <View style={{display: 'flex'}}> */}
                    {/* <Text>{product.variants[0].compare_at_price}</Text> */}
                    <Text style={[styles.productCardTtile, {fontSize: 16}]}>
                      AED {product.variants[0].price}
                    </Text>
                    {/* </View> */}
                  </View>
                </View>
              );
            }
          })}
        </ScrollView>
        <View>
          <Image
            source={require('../../assets/images/preSpring.jpg')}
            resizeMode={'cover'}
            style={styles.imagebanner}
          />
        </View>
        <View>
          <SliderBox
            autoplay
            // circleLoop
            dotStyle={{display: 'none'}}
            images={[
              require('../../assets/images/banner.gif'),
              require('../../assets/images/slider4.jpg'),
            ]}
            ImageComponentStyle={{resizeMode: 'cover'}}
          />
        </View>
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
  imagebanner: {
    width: '100%',
    height: 200,
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
  productCard: {
    backgroundColor: 'white',
    // borderWidth: 1,

    margin: 10,
    borderRadius: 10,
    paddingTop: 5,
    width: 180,
    height: 300,
  },
  productCardTtile: {
    textAlign: 'center',
    paddingTop: 8,
    fontWeight: '900',
  },
  productCardSubTtile: {
    padding: 6,
  },
});

export default Home;
