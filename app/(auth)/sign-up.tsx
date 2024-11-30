import CustomButton from "@/components/CustomButton"
import InputField from "@/components/InputField"
import OAuth from "@/components/OAuth"
import { icons, images } from "@/constants"
import { Link } from "expo-router"
import { useState } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onSubmit = async () => {

    }

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="w-full h-[250px]">
                    <Image 
                        source={images.signUpCar}
                        className="z-0 w-full h-[250px]"
                    />
                    <Text className="text-2xl font-JakartaSemiBold text-black absolute bottom-5 left-5">Create Your Account</Text>
                </View>
                <View className="p-5">
                    <InputField 
                        label={'Name'}
                        placeholder="Enter your name"
                        icon={icons.person}
                        value={formData.name}
                        onChangeText={(value) => setFormData({...formData, name: value})}
                    />
                    <InputField 
                        label={'Email'}
                        placeholder="Enter your email"
                        icon={icons.email}
                        value={formData.email}
                        onChangeText={(value) => setFormData({...formData, email: value})}
                    />
                    <InputField 
                        label={'Password'}
                        placeholder="Enter your password"
                        icon={icons.lock}
                        value={formData.password}
                        secureTextEntry={true}
                        onChangeText={(value) => setFormData({...formData, password: value})}
                    />
                    <CustomButton 
                        title="Sign up"
                        className="mt-6"
                        onPress={onSubmit}
                    />

                    <OAuth />

                    <Link href={'/sign-in'} className="text-lg text-center text-general-200 mt-5">
                        <Text>Already have an account? </Text>
                        <Text className="text-primary-500">Log in</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    )
}
export default SignUp