import { View, Text, FlatList, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'
import React from 'react'
import { scale, verticalScale } from './Dimensions'
import { normalize } from './FontResize'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';



const allitems_winter_gear = [
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



const reviews = [
    {
        id: 0,
        id_name: 'AS',
        name: 'Afrana',
        city: 'Bangalore',
        type: 'Gaming Console',
        title: 'Great renting experience',
        stars: '5',
        comment: 'Have used their services twice now. They never disappoint. Quick responses, polite, transparent, hassle free, great products as well. Rented trekking gear and PS4. Thanks Sharepal! Cheers to you guys!'

    },
    {
        id: 1,
        id_name: '',
        name: 'Afrana',
        city: 'Bangalore',
        type: 'Gaming Console',
        title: 'Great renting experience',
        stars: '5',
        comment: 'Have used their services twice now. They never disappoint. Quick responses, polite, transparent, hassle free, great products as well. Rented trekking gear and PS4. Thanks Sharepal! Cheers to you guys!'
    },
];

const Item = ({ id, uri, title }) => (
    <>

        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderWidth: scale(0.3),
            borderRadius: scale(15),
            marginVertical: scale(10),
            marginHorizontal: scale(10),
        }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View>
                    <Image style={{
                        width: scale(130),
                        height: scale(130),
                        resizeMode: 'contain'
                    }} source={{ uri: uri }} />
                </View>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    marginTop: verticalScale(10),
                    marginRight: scale(10),
                }}>
                    <Ionicons name="heart-outline" size={normalize(18)} color="#888" />
                    <Entypo name="share" size={normalize(18)} color="#888" />
                </View>
            </View>

            <View style={{
                marginLeft: scale(10),
                flexDirection: 'column',
            }}>
                <Text style={{
                    fontSize: normalize(13),
                    fontWeight: '500',
                    letterSpacing: scale(0.5),
                }}>
                    {title}
                </Text>
                <Text style={{
                    marginBottom: verticalScale(10),
                    paddingRight: scale(10),
                    fontSize: normalize(10),
                    fontWeight: '300',
                    letterSpacing: scale(0.5),
                }}>
                    {title} {title}
                </Text>
            </View>
        </View>
    </>
);

const ItemFooter = ({ id, uri, title, description }) => (
    <>

        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderWidth: scale(0.3),
            borderRadius: scale(20),
            backgroundColor: '#fff',
            borderColor: '#fff',
            marginVertical: scale(10),
            marginHorizontal: scale(10),
        }}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Image style={{
                    width: scale(80),
                    height: scale(80),
                    resizeMode: 'contain'
                }} source={{ uri: uri }} />

            </View>

            <View style={{
                // marginRight: scale(50),
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: normalize(16),
                    fontWeight: '400',
                    letterSpacing: scale(0.8),
                    color: "#0d0d69",
                }}>
                    {title}
                </Text>
                <Text style={{
                    marginBottom: verticalScale(10),
                    paddingRight: scale(10),
                    fontSize: normalize(10),
                    fontWeight: '200',
                    letterSpacing: scale(0.5),
                }}>
                    {title} {title}
                </Text>
            </View>
        </View>
    </>
);

const ItemReview = ({ id, id_name, name, city, title, comment, stars, type }) => (
    <>

        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderWidth: scale(0.3),
            borderRadius: scale(25),
            backgroundColor: '#fff',
            borderColor: '#fff',
            padding: scale(15),
            elevation: scale(5),
            marginVertical: scale(10),
            marginHorizontal: scale(15),
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}>
                {id_name !== '' ? <View style={{
                    flexDirection: 'column',
                    marginHorizontal: scale(5),
                    borderWidth: scale(0.5),
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: Dimensions.get('window').width * 0.16,
                    height: Dimensions.get('window').width * 0.16,
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    backgroundColor: 'orange',
                    borderColor: '#639'
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: normalize(25),
                        justifyContent: 'center',
                        letterSpacing: scale(0.5)
                    }}>
                        {id_name}
                    </Text>
                </View>
                    :
                    <View style={{
                        flexDirection: 'column',
                        marginHorizontal: scale(5),
                        borderWidth: scale(0.5),
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: Dimensions.get('window').width * 0.16,
                        height: Dimensions.get('window').width * 0.16,
                        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                        backgroundColor: '#5566B4',
                        borderColor: '#5566B4'
                    }}>
                        <FontAwesome name="user" size={normalize(40)} color="#DDDEE2" />
                    </View>}

                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    marginHorizontal: scale(8),
                }}>
                    <View>
                        <Text style={{
                            fontSize: normalize(15),
                            letterSpacing: scale(0.5)
                        }}>
                            {name} , {city}
                        </Text>
                    </View>

                    <View>
                        <Text style={{
                            fontSize: normalize(15),
                            letterSpacing: scale(0.5),
                            color: '#639'
                        }}>
                            {type}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: scale(10),
                marginVertical: verticalScale(10),
            }}>
                <Text style={{
                    fontSize: normalize(16)
                }}>
                    {title}
                </Text>
            </View>


            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginHorizontal: scale(10),
            }}>
                <View style={{
                    marginHorizontal: scale(2),
                }}>
                    <FontAwesome
                        name='star'
                        size={normalize(20)}
                        color="gold"
                    />
                </View>
                <View style={{
                    marginHorizontal: scale(2),
                }}>
                    <FontAwesome
                        name='star'
                        size={normalize(20)}
                        color="gold"
                    />
                </View>
                <View style={{
                    marginHorizontal: scale(2),
                }}>
                    <FontAwesome
                        name='star'
                        size={normalize(20)}
                        color="gold"
                    />
                </View>
                <View style={{
                    marginHorizontal: scale(2),
                }}>
                    <FontAwesome
                        name='star'
                        size={normalize(20)}
                        color="gold"
                    />
                </View>
                <View style={{
                    marginHorizontal: scale(2),
                }}>
                    <FontAwesome
                        name='star'
                        size={normalize(20)}
                        color="gold"
                    />
                </View>

            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: scale(10),
                width: scale(220),
                paddingBottom: scale(20),
                marginVertical: verticalScale(10),
            }}>
                <Text style={{
                    fontSize: normalize(14),
                    fontWeight: '200',
                    letterSpacing: scale(0.5)
                }}>
                    {comment}
                </Text>
            </View>
        </View>
    </>
);


export default function FooterItemComponent() {

    const renderItem = ({ item }) => {
        return (
            <Item
                id={item.id}
                uri={item.uri}
                title={item.title}
            />
        );
    };

    const renderItemReeview = ({ item }) => {
        return (
            <ItemReview
                id={item.id}
                id_name={item.id_name}
                name={item.name}
                title={item.title}
                comment={item.comment}
                city={item.city}
                stars={item.stars}
                type={item.type}
            />
        );
    };

    const renderItemFooter = ({ item }) => {
        return (
            <ItemFooter
                id={item.id}
                uri={item.uri}
                title={item.title}
                description={item.title}
            />
        );
    };

    return (
        <>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: verticalScale(30),
            }}>

                <View style={{
                    backgroundColor: '#E9E9E9',
                    padding: scale(20)
                }}>
                    <Text style={{
                        fontSize: normalize(20),
                        fontWeight: '500',
                    }}>
                        Rent it your way
                    </Text>

                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: verticalScale(15),
                        }}>
                            <View style={{
                                borderBottomWidth: scale(3),
                                borderBottomColor: 'blue'
                            }}>
                                <Image
                                    style={{
                                        width: scale(150),
                                        height: scale(150),
                                    }}
                                    source={{
                                        uri: 'https://ik.imagekit.io/faskf16pg/new-categories/2_1__mK14XXp4D.png?updatedAt=1680187469898'
                                    }} />
                            </View>

                            <View style={{
                                borderBottomWidth: scale(3),
                                borderBottomColor: 'blue'
                            }}>

                                <Image
                                    style={{
                                        width: scale(150),
                                        height: scale(150),
                                    }}
                                    source={{
                                        uri: 'https://ik.imagekit.io/faskf16pg/new-categories/1_1__eQBfCIOj3B.png?updatedAt=1680187470191'
                                    }} />
                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: verticalScale(5),
                        }}>

                            <View style={{
                                borderBottomWidth: scale(3),
                                borderBottomColor: 'blue'
                            }}>
                                <Image
                                    style={{
                                        width: scale(150),
                                        height: scale(150),
                                    }}
                                    source={{
                                        uri: 'https://ik.imagekit.io/faskf16pg/new-categories/3_1__HOochmZCK.png?updatedAt=1680187470138'
                                    }} />
                            </View>

                            <View style={{
                                borderBottomWidth: scale(3),
                                borderBottomColor: 'blue'
                            }}>
                                <Image
                                    style={{
                                        width: scale(150),
                                        height: scale(150),
                                    }}
                                    source={{
                                        uri: 'https://ik.imagekit.io/faskf16pg/new-categories/4_1__goCTkVQ7l.png?updatedAt=1680187470184'
                                    }} />
                            </View>
                        </View>

                    </View>

                </View>



                <View style={{
                    backgroundColor: '#f4f6fae6',
                }}>

                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginVertical: scale(10),
                        backgroundColor: '#f4f6fae6',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            marginHorizontal: scale(20),
                        }}>
                            <Text style={{
                                fontSize: normalize(18),
                                fontWeight: '500',
                                letterSpacing: scale(0.5),
                            }}>
                                Trekking gear on rent in Bangalore
                            </Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginVertical: scale(15),
                            marginHorizontal: scale(20),
                        }}>
                            <Text style={{
                                fontSize: normalize(11),
                                fontWeight: '200',
                                letterSpacing: scale(0.5),
                            }}>
                                Are you excited to be going for a trek but shocked to know the expensive trekking gear you will need to buy? Well, fret not! Because at SharePal you can rent all the trekking equipment for a fraction of its purchase cost.{'\n'}{'\n'}

                                You may be a beginner, or an amateur trekker, buying trekking gear like trekking shoes, backpacks, trekking jackets, trek accessories can cost you up to Rs 20,000. Not to mention the maintenance cost of washing and cleaning this gear after every trek. Compare it with renting, where you can rent all the trekking gear for less than Rs 3000 for a week’s trip. And the best part, cleaning & maintenance is on us. {'\n'}{'\n'}

                                SharePal offers the best solution to your trekking needs. Be it a short trip or a long trip, our flexible rental plans are affordable and provide the best value for money. All the gear we rent is in excellent condition which is cleaned & disinfected after every use. We also offer doorstep delivery & pick-up.{'\n'}{'\n'}

                                So prepare for your trek and leave all your worries behind. We have got you covered!{'\n'}{'\n'}

                                <Text style={{
                                    fontWeight: '500',
                                    fontSize: normalize(12)
                                }}>
                                    Rent trekking in Bangalore {'\n'}{'\n'}
                                </Text>
                                You can rent trekking gear at SharePal easily. We have all the trekking gear available on rent, from trekking shoes to trekking jackets to backpacks. All you need to do is add the products as per your need, choose your rental duration, and checkout. We provide doorstep delivery & pick-up service across bangalore.{'\n'}{'\n'}

                                <Text style={{
                                    fontWeight: '500',
                                    color: '#527AFC',
                                    textDecorationLine: 'underline',
                                    fontSize: normalize(12)
                                }}>
                                    Trekking shoes on rent in bangalore:
                                </Text> While trekking in the mountains, trekking shoes are your best friend. You can rent Decathlon Trek 100 trekking shoes in Bangalore for both men and women starting from Rs 119/Day.{'\n'}{'\n'}

                                <Text style={{
                                    fontWeight: '500',
                                    color: '#527AFC',
                                    textDecorationLine: 'underline',
                                    fontSize: normalize(12)
                                }}>Trekking Jackets on rent in bangalore:
                                </Text> Next to the trekking shoes, another essential gear you need during trekking is a trekking jacket to keep you warm & dry all the time. You can rent a warm & waterproof trekking jacket in Bangalore starting at Rs 79/Day. Trekking jackets on rent are available for both men and women.{'\n'}{'\n'}

                                <Text style={{
                                    fontWeight: '500',
                                    color: '#527AFC',
                                    textDecorationLine: 'underline',
                                    fontSize: normalize(12)
                                }}>Backpacks on rent in bangalore: </Text>Another must-have essential is to carry a trekking backpack with good support. As per the duration of your trek, we have a range of sizes available. From 30L to 70L. Backpacks that we rent are unisex, but we recommend women to carry 50L as their main backpack and men to carry 60L. You can also take a 30L backpack for your submit day.{'\n'}{'\n'}

                                <Text style={{
                                    fontWeight: '500',
                                    color: '#527AFC',
                                    textDecorationLine: 'underline',
                                    fontSize: normalize(12)
                                }}>Trek accessories on rent in bangalore: </Text>Other than trekking shoes, backpack & jackets, there are some must-have trek accessories like trekking poles, warm & waterproof gloves, head torch, rain poncho that one should carry. You can rent these accessories starting from Rs 99/Trip.{'\n'}{'\n'}
                                <Text style={{
                                    textDecorationLine: 'underline',
                                    fontSize: normalize(12),
                                    fontWeight: '300',
                                }}>
                                    Read More →
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>




                <View style={{
                    backgroundColor: '#333',
                }}>

                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        padding: scale(20),
                        backgroundColor: '#333',
                    }}>
                        <Text style={{
                            fontSize: normalize(20),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            SharePal
                        </Text>
                        <Text style={{
                            width: scale(80),
                            marginBottom: verticalScale(10),
                            borderBottomColor: '#d7df23',
                            borderBottomWidth: scale(2),
                        }}>

                        </Text>

                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            About us
                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Why SharePal?
                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Careers
                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Blogs
                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Sitemaps
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        padding: scale(20),
                        backgroundColor: '#333',
                    }}>
                        <Text style={{
                            fontSize: normalize(20),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Information
                        </Text>
                        <Text style={{
                            width: scale(100),
                            marginBottom: verticalScale(10),
                            borderBottomColor: '#d7df23',
                            borderBottomWidth: scale(2),
                        }}>

                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            How it works?
                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            FAQs
                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Verification
                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Refund Process
                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Cancellation Policy
                        </Text>
                    </View>


                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        padding: scale(20),
                        backgroundColor: '#333',
                    }}>
                        <Text style={{
                            fontSize: normalize(20),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Policies
                        </Text>
                        <Text style={{
                            width: scale(70),
                            marginBottom: verticalScale(10),
                            borderBottomColor: '#d7df23',
                            borderBottomWidth: scale(2),
                        }}>

                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Rental Terms & Condition
                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Shipping policy

                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Damage Policy
                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Terms of Use

                        </Text>
                        <Text style={{
                            fontSize: normalize(14),
                            marginVertical: verticalScale(5),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Privacy Policy
                        </Text>
                    </View>


                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        padding: scale(20),
                        backgroundColor: '#333',
                    }}>
                        <Text style={{
                            fontSize: normalize(20),
                            color: '#fff',
                            letterSpacing: scale(0.8),
                            fontWeight: '200',
                        }}>
                            Need Help
                        </Text>
                        <Text style={{
                            width: scale(95),
                            marginBottom: verticalScale(10),
                            borderBottomColor: '#d7df23',
                            borderBottomWidth: scale(2),
                        }}>

                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            marginVertical: verticalScale(5),
                        }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: Dimensions.get('window').width * 0.046,
                                    height: Dimensions.get('window').width * 0.046,
                                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                                    borderWidth: scale(0.5),
                                    borderColor: '#fff',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <FontAwesome5 name="phone-alt" size={normalize(8)} color="#fff" />
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                marginHorizontal: scale(8),
                            }}>
                                <Text style={{
                                    fontSize: normalize(14),
                                    color: '#fff',
                                    letterSpacing: scale(0.8),
                                    fontWeight: '200',
                                }}>
                                    +91 76192 20543
                                </Text>
                            </View>

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            marginVertical: verticalScale(5),
                        }}>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Feather name="mail" size={normalize(15)} color="#fff" />
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                marginHorizontal: scale(8),
                            }}>
                                <Text style={{
                                    fontSize: normalize(14),
                                    color: '#fff',
                                    letterSpacing: scale(0.8),
                                    fontWeight: '200',
                                }}>
                                    care@sharepal.in
                                </Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        padding: scale(20),
                        backgroundColor: '#333',
                    }}>
                        <Image style={{
                            width: scale(35),
                            height: scale(35),
                            marginHorizontal: scale(5),
                            resizeMode: 'contain'
                        }} source={{ uri: 'https://ik.imagekit.io/faskf16pg/Home/Social_Icons/sharepal-social-3_5kK4iwk2FH.png?updatedAt=1679860437682' }} />
                        <Image style={{
                            width: scale(35),
                            height: scale(35),
                            marginHorizontal: scale(5),
                            resizeMode: 'contain'
                        }} source={{ uri: 'https://ik.imagekit.io/faskf16pg/Home/Social_Icons/sharepal-social-4_FZ8rSOhtQ.png?updatedAt=1679860437670' }} />
                        <Image style={{
                            width: scale(35),
                            height: scale(35),
                            marginHorizontal: scale(10),
                            resizeMode: 'contain'
                        }} source={{ uri: 'https://ik.imagekit.io/faskf16pg/Home/Social_Icons/sharepal-social-6_Hp9itHLdk5.png?updatedAt=1679860437696' }} />

                    </View>



                </View>

            </View >
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
})