import CustomButton from "@/components/CustomButton"
import InputField from "@/components/InputField"
import OAuth from "@/components/OAuth"
import { icons, images } from "@/constants"
import { Link, router } from "expo-router"
import { useState } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import Modal from "react-native-modal";

const SignIn = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const handleSignIn = async () => {
        setShowSuccessModal(true)
    }

    return (
        <ScrollView className="bg-white flex-1">
            <View className="flex-1">
                <View className="w-full h-[250px]">
                    <Image 
                        source={images.signUpCar}
                        className="z-0 w-full h-[250px]"
                    />
                    <Text className="text-2xl font-JakartaSemiBold text-black absolute bottom-5 left-5">Welcome </Text>
                </View>
                <View className="p-5">
                    <InputField 
                        label="Email"
                        icon={icons.email}
                        placeholder="Enter your email"
                        value={formData.email}
                        onChangeText={(value) => setFormData({...formData, email: value})}
                    />
                    <InputField 
                        label="Password"
                        icon={icons.lock}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChangeText={(value) => setFormData({...formData, password: value})}
                        secureTextEntry={true}
                    />
                    <CustomButton 
                        className="mt-6"
                        title="Sign In"
                        onPress={handleSignIn}
                    />
                    <OAuth />
                    <Link className="text-center text-general-200 mt-5" href={'/(auth)/sign-up'}>
                        <Text>Don't have account already? </Text>
                        <Text className="text-primary-500">Sign Up</Text>
                    </Link>
                </View>
                <Modal isVisible={showSuccessModal}>
                    <View className="flex flex-col items-center bg-white p-7 rounded-xl">
                        <Image 
                            source={images.check}
                            className="w-[110px] h-[110px] my-5"
                        />
                        <Text className="font-JakartaSemiBold text-3xl mb-3">Verifed</Text>
                        <Text className="text-neutral-400">You have successfully verifed your account.</Text>
                        <CustomButton 
                            title="Go Home"
                            className="w-full mt-6"
                            onPress={() => {
                                setShowSuccessModal(false)
                                router.push('/(root)/(tabs)/home')
                            }}
                        />
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}
export default SignIn