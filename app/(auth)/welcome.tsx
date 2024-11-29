import CustomButton from "@/components/CustomButton"
import { onboarding } from "@/constants"
import { router } from "expo-router"
import { useRef, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Swiper from 'react-native-swiper'

const Welcome = () => {

    const swiperRef = useRef<Swiper>(null)
    const [activePage, setActivePage] = useState(0)
    const isLastSlide = activePage === onboarding.length - 1

    return (
        <SafeAreaView className="flex h-full items-center  bg-white">
            <TouchableOpacity className="self-end p-5" onPress={() => router.replace('/(auth)/sign-up')}>
                <Text className="text-md text-black font-JakartaBold">Skip</Text>
            </TouchableOpacity>
            <Swiper
                loop={false}
                ref={swiperRef}
                dot={<View className="w-8 h-1 mx-1 bg-[#E2E8F0] rounded-full" />}
                activeDot={<View className="w-8 h-1 mx-1 bg-[#0286FF] rounded-full" />}
                onIndexChanged={(i) => setActivePage(i)}
            >
                {onboarding.map(item => (
                    <View key={item.id} className="flex items-center justify-center p-5">
                        <Image 
                            source={item.image}
                            className="w-full h-[300px]"
                            resizeMode="contain"
                        />
                        <Text className="text-black text-3xl font-bold mx-10 text-center">{item.title}</Text>
                        <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">{item.description}</Text>
                    </View>
                ))}
            </Swiper>
            <CustomButton
                title={isLastSlide ? "Get Started" : 'Next'}
                className={"w-11/12 mt-10 mb-5"}
                onPress={() => isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1)} 
            />
        </SafeAreaView>
    )
}
export default Welcome