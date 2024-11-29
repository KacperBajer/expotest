import { InputFieldProps } from "@/types/type"
import { KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native"

const InputField = ({labelStyle, label, icon, secureTextEntry=false, containerStyle, inputStyle, iconStyle, className, ...props}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView>
        <TouchableWithoutFeedback>
            <View className="w-full my-2">
                <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)
}

export default InputField