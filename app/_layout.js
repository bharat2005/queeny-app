import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import AuthContextProvider from "../src/contexts/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useFonts } from 'expo-font'

const client = new QueryClient();

export default function RootLayout() {



  
    useFonts({
      light: require('../assets/fonts/Poppins/Poppins-Light.ttf'),
        medium: require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
          regular: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
            bold: require('../assets/fonts/Poppins/Poppins-Bold.ttf')
    })




  return (
    <QueryClientProvider client={client}>
      <PaperProvider>
        <AuthContextProvider>
          <Stack screenOptions={{ headerShown: false, animation:'none' }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(main)" />
            <Stack.Screen name="tagsScreen" options={{animation:'none'}}/>
            <Stack.Screen name="tagsTabScreen" options={{animation:'none'}} />
            <Stack.Screen
              name="hairStyleScreen"
              options={{ animation: "slide_from_bottom" }}
            />
            <Stack.Screen name="tagInfiniteScreen" />
            <Stack.Screen name="stylistStylesInfiniteScreen" />

            <Stack.Screen name="blogScreen" />

            <Stack.Screen name="blogsInfiniteScreen" />

            <Stack.Screen name="hairStyleSalonScreen" />

            <Stack.Screen name="salonStylesInfiniteScreen" />

            <Stack.Screen name="salonStylistsInfiniteScreen" />

            <Stack.Screen name="reviewsHairStyleSalonScreen" />

            <Stack.Screen name="hairStyleInfiniteScreen" options={{animation:'none'}}  />

            <Stack.Screen name="nailtagsTabScreen" />

            <Stack.Screen name="nailtagsScreen" />

            <Stack.Screen name="nailStyleScreen" />

            <Stack.Screen name="nailStyleSalonScreen" />

            <Stack.Screen name="nailSalonStaffsInfiniteScreen" />

            <Stack.Screen name="nailSalonStylesInfiniteScreen" />

            <Stack.Screen name="reviewsNailStyleSalonScreen" />

            <Stack.Screen name="nailStyleInfiniteScreen" />

            <Stack.Screen name="magzineScreen" />
          </Stack>
        </AuthContextProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}
