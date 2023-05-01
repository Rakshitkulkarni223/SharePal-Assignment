import { View, Text, FlatList, StyleSheet, ImageBackground, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { scale, verticalScale } from './Dimensions'
import { normalize } from './FontResize'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';



const allitems_winter_gear = [
    {
        id: '1',
        uri: 'https://ik.imagekit.io/faskf16pg/Trekking_Gear/50l-backpack-on-rent-3_aj7SI0qrO.webp?updatedAt=1627650036368',
        title: 'Backpack Raincover',
        subtitle: 'Lightweight; Compact design; Durable'
    },
    {
        id: '2',
        uri: 'https://ik.imagekit.io/faskf16pg/Trekking_Gear/rain-jacket-on-rent-2_Jblum_6GUKe.webp?updatedAt=1627650078690',
        title: 'Rain Jacket',
        subtitle: 'Lightweight; Compact; Attached hood'
    },
    {
        id: '3',
        uri: 'https://ik.imagekit.io/faskf16pg/Trekking_Gear/mt-900-women-18C-down-jacket-2_xrK78lc0B.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670424097053',
        title: 'Women Down Jacket -18°C',
        subtitle: 'Warm(-18°C); Lightweight(500g); .....'
    },
];


const allitems_trekking_gear = [
    {
        id: '1',
        uri: 'https://ik.imagekit.io/faskf16pg/Trekking_Gear/mens-trekking-pants-on-rent-2_6Y4Sk7QQv.webp?updatedAt=1627650119464',
        title: 'Men Trek Pant',
        subtitle: 'Quick-dry; Lightweight; Compact'
    },
    {
        id: '2',
        uri: 'https://ik.imagekit.io/faskf16pg/Trekking_Gear/70Lbackpack-on-rent-1_U3EC0dUsM.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670429369091',
        title: '70L Backpack',
        subtitle: 'Carrying comfort; Easy access; Theft...'
    },
    {
        id: '3',
        uri: 'https://ik.imagekit.io/faskf16pg/Trekking_Gear/GoPro_5_Inclusions__2__AOsPBtMDF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654523011951',
        title: 'Men Parka Jacket -15°C.....',
        subtitle: 'Ultra Warm; Snow-proof; Attached....'
    },
];

const allitems_cameras = [
    {
        id: '1',
        uri: 'https://ik.imagekit.io/faskf16pg/dslr-cameras/canon_M50_creator_kit_on_rent_1_sharepal.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647989136954',
        title: 'Canon M50 Mark II with...',
        subtitle: ''
    },
    {
        id: '2',
        uri: 'https://ik.imagekit.io/faskf16pg/dslr-cameras/canon_battery_1_Y-7cxNfDK.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653495454683',
        title: 'Canon M50 Battery',
        subtitle: 'LP-E12 model of canon battery....'
    },
    {
        id: '3',
        uri: 'https://ik.imagekit.io/faskf16pg/dslr-cameras/38_OgbjFNvll.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661426226096',
        title: 'Nikkor Z DX 50-250MM',
        subtitle: 'Nikon Mirrorless Lens, Telephoto, Max..'
    },
];


const allitems_riding_gears = [
    {
        id: '1',
        uri: 'https://ik.imagekit.io/faskf16pg/Riding_Gear/tank-bag-on-rent-2_wMbrhvNbn.webp?updatedAt=1627656560958',
        title: 'Tank Bag (Classic)',
        subtitle: 'Capacity up to 30L; Ideal for RE, Java'
    },
    {
        id: '2',
        uri: 'https://ik.imagekit.io/faskf16pg/Riding_Gear/GoPro_5_Inclusions__4__sfROX2-nQ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654702477498',
        title: 'Riding Boot Covers',
        subtitle: 'stronger than polyester; treated...'
    },
    {
        id: '3',
        uri: 'https://ik.imagekit.io/faskf16pg/Riding_Gear/GoPro_5_Inclusions__8__ydfEuvjp_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654702478933',
        title: 'Riding Boots by Orazo',
        subtitle: 'Ultra – comfy bounce back,....'
    },
];

const allitems_action_cameras = [
    {
        id: '1',
        uri: 'https://ik.imagekit.io/faskf16pg/gopro-cameras/Insta360_ONE_RS_2_6NWmobCyT.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649507034933',
        title: 'Insta360 One RS Twin',
        subtitle: '5.7K 360 Lens & 48MP Photo ,....'
    },
    {
        id: '2',
        uri: 'https://ik.imagekit.io/faskf16pg/gopro-cameras/iSteady_PRO_3_3-Axis_Handheld_Gimbal_Stabilizer_4_3m3Rd8n8b.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1648123581384',
        title: 'Hohem iSteady Pro 4 Gimbal',
        subtitle: '3-Axis Stabilization, Quick....'
    },
    {
        id: '3',
        uri: 'https://ik.imagekit.io/faskf16pg/gopro-cameras/sd_card_64gb_2_9bqhqE_ep.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653407292386',
        title: 'Extreme Pro 64GB SD Card',
        subtitle: 'Photos: upto 17000; Video: upto 4hrs'
    },
];

const allitems_gaming_console = [
    {
        id: '1',
        uri: 'https://ik.imagekit.io/faskf16pg/gaming-console/ps5-w-2-controller-on-rent-1_WgU4uOf3I.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673802130711',
        title: 'PS5+FIFA22 with...',
        subtitle: 'Easy to connect, share & play.....'
    },
    {
        id: '2',
        uri: 'https://ik.imagekit.io/faskf16pg/sub_category/Gaming_Console/Projector_products/viewsonic-miniplus-Projector-on-rent-SharePal-1__3__yKCLOtESr.png?updatedAt=1680516059766',
        title: 'ViewSonic M1 Mini Plus',
        subtitle: 'Easy setup - Pocket Friendly; Built-in....'
    },
    {
        id: '3',
        uri: 'https://ik.imagekit.io/faskf16pg/gaming-console/xbox_controller3_wGyMErYl7.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653301352505',
        title: 'Xbox Controller on rent',
        subtitle: ''
    },
];

const allitems_ps4_games = [
    {
        id: '1',
        uri: 'https://ik.imagekit.io/faskf16pg/PS4_Games/ps4-games-on-rent-hitman-2_-12C-FRd_s.webp',
        title: 'Hitman 2 PS4',
        subtitle: 'Shooting game; Single/multiplayer...'
    },
    {
        id: '2',
        uri: 'https://ik.imagekit.io/faskf16pg/PS4_Games/ps4-games-on-rent-assassins-creed-origins_TcMlfE2KOI.webp',
        title: "Assassin's Creed Origins...",
        subtitle: 'Action adventure; Single player mode'
    },
    {
        id: '3',
        uri: 'https://ik.imagekit.io/faskf16pg/PS4_Games/ps4-games-on-rent-resident-evil_VtCb0GNBNs.webp?updatedAt=1617826885011',
        title: 'Resident Evil Village PS4',
        subtitle: 'Survival Horror; Single player'
    },
];



const why_sharepal = [
    {
        id: '1',
        uri: 1,
        title: 'Quality Products',
        subtitle: 'Every product you rent is fully functional & in excellent condition.'
    },
    {
        id: '2',
        uri: 2,
        title: "Simple Pricing",
        subtitle: 'Daily, weekly & monthly rental plans. Rent longer, Pay lesser:)'
    },
    {
        id: '3',
        uri: 3,
        title: 'Quick & Hassle-free',
        subtitle: 'Simply order online & relax. Enjoy doorstep delivery & pick-up.'
    },
    {
        id: '4',
        uri: 4,
        title: 'Pay on Delivery',
        subtitle: 'Just pay 10% advance & reserve. Pay the balance upon delivery.'
    },
    {
        id: '5',
        uri: 5,
        title: "Customer Friendly",
        subtitle: 'Friendly & customer-centric team to help every step of the way.'
    },
    {
        id: '6',
        uri: 6,
        title: 'Safe & Sanitised',
        subtitle: 'Enjoy a safe & pleasant renting experience, always.'
    },
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

const Item = ({ id, uri, title, subtitle }) => (
    <>

        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderWidth: scale(0.3),
            borderRadius: scale(15),
            marginVertical: scale(10),
            backgroundColor: '#fff',
            width: scale(190),
            height: scale(180),
            elevation: scale(2),
            marginHorizontal: scale(10),
        }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Image style={{
                        width: scale(120),
                        height: scale(120),
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
                    {subtitle}
                </Text>
            </View>
        </View>
    </>
);

checkImage = (param) => {

    switch (param) {

        case '1':
            return require('./Images/1.png')

        case '2':
            return require('./Images/2.png')

        case '3':
            return require('./Images/3.png')

        case '4':
            return require('./Images/4.png')

        case '5':
            return require('./Images/5.png')

        case '6':
            return require('./Images/6.png')


        default:
            Alert.alert("NUMBER NOT FOUND");

    }

}

const ItemFooter = ({ id, uri, title, subtitle }) => (
    <>

        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            borderWidth: scale(0.3),
            borderRadius: scale(20),
            height: scale(80),
            elevation: scale(1),
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
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Image style={{
                        width: scale(45),
                        height: scale(45),
                        resizeMode: 'contain'
                    }} source={checkImage(id)} />
                </View>


            </View>

            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: normalize(14),
                        fontWeight: '400',
                        letterSpacing: scale(0.8),
                        color: "#0d0d69",
                    }}>
                        {title}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            marginBottom: verticalScale(10),
                            paddingRight: scale(10),
                            fontSize: normalize(10),
                            fontWeight: '200',
                            letterSpacing: scale(0.5),
                        }}>
                            {/* {subtitle} */}
                        </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        marginBottom: verticalScale(10),
                        paddingRight: scale(10),
                        fontSize: normalize(10),
                        fontWeight: '200',
                        letterSpacing: scale(0.5),
                    }}>
                        {subtitle}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            marginBottom: verticalScale(10),
                            paddingRight: scale(10),
                            fontSize: normalize(10),
                            fontWeight: '200',
                            letterSpacing: scale(0.5),
                        }}>
                            {/* {subtitle} */}
                        </Text>
                    </View>
                </View>



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


export default function FooterComponent() {

    const renderItem = ({ item }) => {
        return (
            <Item
                id={item.id}
                uri={item.uri}
                title={item.title}
                subtitle={item.subtitle}
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
                subtitle={item.subtitle}
            />
        );
    };

    return (
        <>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: scale(10),
                }}>
                    <Text style={{
                        fontSize: normalize(20),
                        fontWeight: '500',
                        letterSpacing: scale(0.5),
                    }}>Winter Gear</Text>
                </View>

                <FlatList
                    horizontal
                    data={allitems_winter_gear}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.container}
                />


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: scale(10),
                }}>
                    <Text style={{
                        fontSize: normalize(20),
                        fontWeight: '500',
                        letterSpacing: scale(0.5),
                    }}>Trekking Gear</Text>
                </View>

                <FlatList
                    horizontal
                    data={allitems_trekking_gear}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.container}
                />


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: scale(10),
                }}>
                    <Text style={{
                        fontSize: normalize(20),
                        fontWeight: '500',
                        letterSpacing: scale(0.5),
                    }}>Cameras</Text>
                </View>

                <FlatList
                    horizontal
                    data={allitems_cameras}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.container}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: scale(10),
                }}>
                    <Text style={{
                        fontSize: normalize(20),
                        fontWeight: '500',
                        letterSpacing: scale(0.5),
                    }}>Riding Gear</Text>
                </View>

                <FlatList
                    horizontal
                    data={allitems_riding_gears}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.container}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: scale(10),
                }}>
                    <Text style={{
                        fontSize: normalize(20),
                        fontWeight: '500',
                        letterSpacing: scale(0.5),
                    }}>Action Cameras</Text>
                </View>

                <FlatList
                    horizontal
                    data={allitems_action_cameras}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.container}
                />


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: scale(10),
                }}>
                    <Text style={{
                        fontSize: normalize(20),
                        fontWeight: '500',
                        letterSpacing: scale(0.5),
                    }}>Gaming Console</Text>
                </View>

                <FlatList
                    horizontal
                    data={allitems_gaming_console}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.container}
                />


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: scale(10),
                }}>
                    <Text style={{
                        fontSize: normalize(20),
                        fontWeight: '500',
                        letterSpacing: scale(0.5),
                    }}>PS4 Games</Text>
                </View>

                <FlatList
                    horizontal
                    data={allitems_ps4_games}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.container}
                />

                <View style={{
                    backgroundColor: '#f4f6fae6',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: scale(10),
                    }}>
                        <Text style={{
                            fontSize: normalize(20),
                            fontWeight: '500',
                            letterSpacing: scale(0.5),
                        }}>Why ShaprePal</Text>
                    </View>

                    <FlatList
                        data={why_sharepal}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItemFooter}
                        contentContainerStyle={styles.container}
                    />

                </View>

                <View style={{
                    backgroundColor: '#fff',
                }}>

                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginVertical: scale(30),
                        backgroundColor: '#fff',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginHorizontal: scale(30),
                            paddingBottom: verticalScale(25),
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: normalize(20),
                                fontWeight: '500',
                                textAlign: 'center',
                                letterSpacing: scale(0.5),
                            }}>
                                More than <Text style={{
                                    color: 'blue'
                                }}> 50k
                                </Text> Happy Customers!
                            </Text>

                        </View>


                        <FlatList
                            horizontal
                            data={reviews}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItemReeview}
                            contentContainerStyle={styles.container}
                        />

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
                                Welcome to Sharepal Bangalore
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
                                Bengaluru, the silicon valley of India is also a start-up hub. SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.{'\n'}{'\n'}

                                Sharepal is a leading rental platform with a pan India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Bangalore.{'\n'}{'\n'}

                                Sharepal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.{'\n'}{'\n'}

                                Our services cover all of Bangalore, some of which are Koramangala, Indiranagar, Marathahalli, Whitefield, Rajajinagar, HSR Layout, BTM Layout, Electronic City, Jayanagar, Aecs Layout, Kundalahalli, K R Puram, Richmond Town, Mahadevapura, Hebbagodi, Ayyappa Nagar, J P Nagar, and even faraway places like Yeshwantpur and Yelahanka.
                                We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Bangalore.Sharepal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.{'\n'}{'\n'}

                                Our services cover all of Bangalore, some of which are Koramangala, Indiranagar, Marathahalli, Whitefield, Rajajinagar, HSR Layout, BTM Layout, Electronic City, Jayanagar, Aecs Layout, Kundalahalli, K R Puram, Richmond Town, Mahadevapura, Hebbagodi, Ayyappa Nagar, J P Nagar, and even faraway places like Yeshwantpur and Yelahanka.{'\n'}{'\n'}

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

            </View>
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