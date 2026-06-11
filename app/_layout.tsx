import { Stack } from 'expo-router';
import { TinteProvider } from './context/TinteContext';

export default function RootLayout() {
  return (
    <TinteProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </TinteProvider>
  );
}