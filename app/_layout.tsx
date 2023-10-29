import { Stack } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { Provider as PaperProvider } from 'react-native-paper';
import i18n from "../src/translations/index";

export default function RootLayout() {
    return (
        <PaperProvider>
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </PaperProvider>
    );
}