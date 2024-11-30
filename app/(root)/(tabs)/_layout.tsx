import { icons } from '@/constants';
import { Stack, Tabs } from 'expo-router';
import { Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native';

type Props = {
    source: ImageSourcePropType,
    focused: boolean
}

const Layout = () => {

    const TabIcon = ({source, focused}: Props) => (
        <View className={`w-12 h-12 rounded-full items-center justify-center ${focused && 'bg-general-400'}`}>
            <Image source={source} resizeMode='contain' className='w-7 h-7' />
        </View> 
    )

  return (
    <Tabs
        initialRouteName='home'
        screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "white",
            tabBarShowLabel: false,
            tabBarItemStyle:{height:40},
            tabBarButton: (props: any) => <TouchableOpacity {...props} activeOpacity={1} />,
            tabBarStyle: {
                backgroundColor: "#333333",
                paddingBottom: 0,
                marginHorizontal: 20,
                marginBottom: 20,
                borderRadius: 50,
                overflow: 'hidden',
                height: 60,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute'
            },
        }}
    >
        <Tabs.Screen 
            name='home'
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.home} />
            }}
        />
        <Tabs.Screen 
            name='rides'
            options={{
                title: 'Rides',
                headerShown: false,
                tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.list} />
            }}
        />
        <Tabs.Screen 
            name='chat'
            options={{
                title: 'Chat',
                headerShown: false,
                tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.chat} />
            }}
        />
        <Tabs.Screen 
            name='profile'
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.profile} />
            }}
        />
    </Tabs>
  );
}
export default Layout