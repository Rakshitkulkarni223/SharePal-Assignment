import { View, Text, ListView, SafeAreaView, TouchableOpacity, StyleSheet, Image, Dimensions, ImageBackground, FlatList, ScrollView, SectionList, BackHandler } from 'react-native'
import React, { useCallback, useEffect, useState, version } from 'react'
import { scale, verticalScale } from './Dimensions';
import { normalize } from './FontResize';
import FooterComponent from './FooterComponent';
import FooterItemComponent from './FooterItemComponent';
import { useFocusEffect } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';

const images = [
  { id: '1', uri: 'https://ik.imagekit.io/faskf16pg/Home/sharepal-rentals-10_yYk20CuESc.png?updatedAt=1679260484292' },
  { id: '2', uri: 'https://ik.imagekit.io/faskf16pg/Home/sharepal-rentals-8_1q5GwFFPEy.png?updatedAt=1679260484265' },
  { id: '3', uri: 'https://ik.imagekit.io/faskf16pg/Home/sharepal-rentals-1_lJiOAM6z6.png?updatedAt=1679260484308' },
];


const allitems = [
  {
    id: '1',
    uri: 'https://ik.imagekit.io/faskf16pg/new-categories/trekking-gear-on-rent-sharepal_rgbHep2oXr.png?updatedAt=1678575789925',
    title: 'Trekking Gear'
  },
  {
    id: '2',
    uri: 'https://ik.imagekit.io/faskf16pg/new-categories/riding-gear-on-rent-sharepal_Ub1jNYAaa0.png?updatedAt=1678575789665',
    title: 'Riding Gear'
  },
  {
    id: '3',
    uri: 'https://ik.imagekit.io/faskf16pg/new-categories/action-camera-on-rent-sharepal_0Yq8OKy7e.png?updatedAt=1678575789589',
    title: 'Action Camera'
  },
  {
    id: '4',
    uri: 'https://ik.imagekit.io/faskf16pg/new-categories/dslr-camera-on-rent-sharepal_2aaH3chKb.png?updatedAt=1678575789681',
    title: 'Cameras'
  },
  {
    id: '5',
    uri: 'https://ik.imagekit.io/faskf16pg/new-categories/gaming-consoles-on-rent-sharepal-1_Y5t1X-N2e.png?updatedAt=1679435547369',
    title: 'Gaming Console'
  },
  {
    id: '6',
    uri: 'https://ik.imagekit.io/faskf16pg/new-categories/ps4-games-on-rent-sharepal_Wzwy10tgV.png?updatedAt=1679435347494',
    title: 'PS4 Games'
  },
  {
    id: '7',
    uri: 'https://ik.imagekit.io/faskf16pg/new-categories/winter-wear-on-rent-sharepal_Qnn68-8VVM.png?updatedAt=1678575789695',
    title: 'Winter Wear'
  }
];

const trekkingItems = [
  {
    id: '1',
    uri: 'https://ik.imagekit.io/faskf16pg/sub_category/Trekking_Gear/trekking-shoes-on-rent-sharepal-1_g3GKYTly_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677592287513',
    title: 'Trekking Shoes',
    number: 3
  },
  {
    id: '2',
    uri: 'https://ik.imagekit.io/faskf16pg/sub_category/Trekking_Gear/trekking-jackets-on-rent-sharepal-1_g8LJhtikw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677660911615',
    title: 'Trekking Jackets',
    number: 10,
  },
  {
    id: '3',
    uri: 'https://ik.imagekit.io/faskf16pg/sub_category/Trekking_Gear/trek-accessories-on-rent-sharepal-1_jpxy-PJdk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677592287549',
    title: 'Trek Accessories',
    number: 11
  },
  {
    id: '4',
    uri: 'https://ik.imagekit.io/faskf16pg/sub_category/Trekking_Gear/backPacks-on-rent-sharepal-1_l1H4tIGXW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677592287156',
    title: 'Trekking Backpacks',
    number: 4
  },
];



const Item = ({ id, uri, title, gotoItem }) => (
  <>
    <View style={styles.itemContainer}>
      <TouchableOpacity style={{
        position: 'absolute',
        bottom: scale(0),
        width: scale(120),
        height: scale(80),
        borderRadius: scale(50),
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#d7df23',
      }} onPress={() => {
        gotoItem(id);
      }}>
        <Image style={{
          position: 'absolute',
          top: scale(-80),
          width: scale(130),
          height: scale(150),
          resizeMode: 'contain'
        }} source={{ uri: uri }} />
        <View>
          <Text style={{
            position: 'absolute',
            top: scale(50),
            left: scale(5),
            fontSize: normalize(13),
            fontWeight: '500',
            letterSpacing: scale(0.5),
            marginHorizontal: scale(10),
          }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </>
);

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;

const HeaderComponent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  const renderItem = ({ item }) => {
    return (
      <View style={{
        width: Dimensions.get('window').width,
        height: scale(230),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TouchableOpacity style={{
          position: 'absolute',
          width: Dimensions.get('window').width,
          height: scale(150),
          top: scale(130),
          borderRadius: scale(130),
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: '#d7df23',
        }} onPress={() => {
        }}>
          <View style={{
            marginTop: verticalScale(-80),
            marginHorizontal: scale(20),
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
            <Ionicons name="chevron-back" size={normalize(20)} color="blue" />
          </View>
          <Image style={{
            position: 'absolute',
            top: scale(-120),
            width: scale(340),
            height: scale(200),
            resizeMode: 'contain'
          }} source={{ uri: images[index].uri }} />
          <View style={{
            marginTop: verticalScale(-25),
            marginHorizontal: scale(20),
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
            <Ionicons name="chevron-forward" size={normalize(20)} color="blue" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View style={{
        marginHorizontal: scale(25),
        marginTop: verticalScale(5),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: normalize(18),
          padding: 10,
          letterSpacing: scale(0.5),
          fontWeight: '500',
          textAlign: 'center'
        }}>Your search for the best rental in <Text style={{
          color: 'blue'
        }}>Bangalore</Text> ends here!</Text>
      </View>

      <View style={styles.getstarted}>
        <TouchableOpacity style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{
            fontSize: normalize(13),
            lineHeight: verticalScale(20),
            padding: scale(5),
            letterSpacing: scale(1.6),
            paddingHorizontal: scale(10),
            fontWeight: '200',
            letterSpacing: scale(0.5),
            color: '#fff',
            borderWidth: scale(1),
            borderColor: '#fff',
            borderRadius: scale(10),
            backgroundColor: '#0927eb',
          }}>Get Started!</Text>
        </TouchableOpacity>
      </View>

      <View style={{
      }}>
        <FlatList
          data={images}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={(event) => {
            const { contentOffset, layoutMeasurement } = event.nativeEvent;
            const index = Math.floor(contentOffset.x / layoutMeasurement.width);
            setIndex(index);
          }}
        />
        <View style={styles.slider}>
          {images.map((_, i) => (
            <View
              key={i}
              style={[
                styles.sliderDot,
                index === i && styles.sliderDotActive,
              ]}
            />
          ))}
        </View>
      </View>

      <View style={{
        marginVertical: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <Text style={{
          fontSize: normalize(19),
          fontWeight: '600',
          letterSpacing: scale(0.5),
        }}>What would you like to rent?</Text>
      </View>
    </>

  );
};

const HeaderComponentItem = () => {

  return (
    <>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // padding: scale(30),
        marginTop: verticalScale(30),
        margin: scale(20),
        borderRadius: scale(20),
        backgroundColor: '#D2DEF7',
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          borderBottomWidth: scale(2),
          padding: scale(15)
        }}>
          <View style={{
            justifyContent: 'center',
            marginRight: scale(15),
          }}>
            <Image style={{
              width: scale(58),
              height: scale(58),
            }}
              source={{ uri: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660844759942x589981560796495700%2Flike.png?w=96&h=96&auto=compress&dpr=2&fit=max' }}
            />
          </View>

          <View style={{
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: normalize(14),
              textAlign: 'center'
            }}>Excellent Quality Products</Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          borderBottomWidth: scale(2),
          padding: scale(15)
        }}>
          <View style={{
            justifyContent: 'center',
            marginRight: scale(15),
          }}>
            <Image style={{
              width: scale(58),
              height: scale(58),
            }}
              source={{ uri: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660843369408x866190984421172400%2Fgift-box.png?w=96&h=96&auto=compress&dpr=2&fit=max' }}
            />
          </View>

          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: scale(20),
          }}>
            <Text style={{
              fontSize: normalize(14),
              textAlign: 'center'
            }}>Delivery Date & Return {'\n'}Date is FREE!!</Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          padding: scale(15)
        }}>
          <View style={{
            justifyContent: 'center',
            marginRight: scale(40),
          }}>
            <Image style={{
              width: scale(58),
              height: scale(58),
            }}
              source={{ uri: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1660843381244x490561632153383440%2Fcash-on-delivery.png?w=96&h=96&auto=compress&dpr=2&fit=max' }}
            />
          </View>

          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: scale(40),
          }}>
            <Text style={{
              fontSize: normalize(14),
              textAlign: 'center'
            }}>Pay on Delivery</Text>
          </View>
        </View>

      </View>

      <View style={{
        marginVertical: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <Text style={{
          fontSize: normalize(19),
          fontWeight: '600',
          letterSpacing: scale(0.5),
        }}>Trekking Gear On Rent</Text>
      </View>
    </>


  )
}



const ItemsTrekkingGear = ({ id, uri, title, number }) => (
  <>

    <View style={{
      width: scale(250),
      height: scale(140),
      justifyContent: 'center',
      marginHorizontal: scale(50),
      borderRadius: scale(5),
      backgroundColor: '#fff',
      elevation: scale(2),
      marginVertical: verticalScale(10),
    }}>
      <TouchableOpacity style={{
        position: 'absolute',
        left: scale(100),
        marginHorizontal: scale(50),
        width: scale(100),
        height: scale(140),
        elevation: scale(2),
        backgroundColor: '#d7df23',
      }}>
        <Image style={{
          position: 'absolute',
          right: scale(20),
          width: scale(130),
          height: scale(130),
          resizeMode: 'contain'
        }} source={{ uri: uri }} />
      </TouchableOpacity>
      <View style={{
        width: scale(200)
      }}>
        <Text style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          fontSize: normalize(18),
          textAlign: 'left',
          fontWeight: '500',
          letterSpacing: scale(0.5),
          marginHorizontal: scale(10),
          marginRight: scale(80)
        }}>
          {title}
        </Text>
      </View>

      <View style={{
        marginTop: scale(40),
        justifyContent: 'center',
      }}>
        <Text style={{
          flexDirection: 'row',
          justifyContent: 'center',
          fontSize: normalize(14),
          textAlign: 'left',
          fontWeight: '300',
          borderWidth: scale(0.6),
          padding: scale(5),
          borderRadius: scale(10),
          letterSpacing: scale(0.5),
          marginHorizontal: scale(10),
          marginRight: scale(150)
        }}>
          {number}+ Products
        </Text>
      </View>

    </View>
  </>
);

const Categories = () => {

  const [gotoid, setgotoid] = useState(-1);

  const gotoItem = (id) => {
    setgotoid(id);
  }

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setgotoid(-1);
        return true;
      };
      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackPress
        );
      };
    }, []),
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        id={item.id}
        uri={item.uri}
        title={item.title}
        gotoItem={gotoItem}
      />
    );
  };

  const renderItemsTrekkingGear = ({ item }) => {
    return (
      <ItemsTrekkingGear
        id={item.id}
        uri={item.uri}
        title={item.title}
        number={item.number}
      />
    );
  };

  return (
    <SafeAreaView>
      {gotoid === -1 ? <FlatList
        key={'_'}
        data={allitems}
        columnWrapperStyle={{justifyContent:'center', }}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
      /> : <FlatList
        key={'#'}
        data={trekkingItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItemsTrekkingGear}
        ListHeaderComponent={HeaderComponentItem}
        ListFooterComponent={FooterItemComponent}
      />}
    </SafeAreaView>
  )
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  getstarted: {
    marginTop: verticalScale(15),
  },

  image: {
    position: 'absolute',
    top: scale(-30),
    width: scale(340),
    height: scale(250),
    resizeMode: 'contain'
  },
  slider: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: scale(20),
  },
  sliderDot: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(5),
    marginHorizontal: scale(3),
    backgroundColor: '#888',
  },
  sliderDotActive: {
    backgroundColor: '#0927eb',
  },
  itemContainer: {
    width: scale(120),
    height: scale(160),
    elevation: scale(2),
    justifyContent: 'center',
    marginHorizontal: scale(30),
    borderRadius: scale(6),
    backgroundColor: '#fff',
    marginVertical: verticalScale(10),
    alignItems: 'center',
  },
});