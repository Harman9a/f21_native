import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {defaultStyles} from '../../constants/Styles';
import colors from '../../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const ExploreHeader = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.actionRow2}>
          <View style={styles.actionRow}>
            <Entypo
              style={{color: colors.primary, paddingHorizontal: 5}}
              name="menu"
              size={35}
            />
            <Text style={styles.logoTxt}>Forever 21</Text>
          </View>
          <View style={styles.actionRow}>
            <Entypo
              style={{color: colors.primary, paddingHorizontal: 10}}
              name="heart-outlined"
              size={30}
            />
            <SimpleLineIcons
              style={{color: colors.primary}}
              name="handbag"
              size={28}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoTxt: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: '400',
  },
  container: {
    backgroundColor: '#fff',
    height: 60,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    padding: 10,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 10,
    padding: 14,
    alignItems: 'center',
    width: 280,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c2c2c2',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#A2A0A2',
    borderRadius: 24,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: Colors.grey,
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: '#000',
  },
  categoriesBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});

export default ExploreHeader;
