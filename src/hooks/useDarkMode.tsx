import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function useDarkMode() {
  return useColorScheme() === 'dark';
}

export function useMainBackgroundStyle() {
  const isDarkMode = useDarkMode();
  return {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
}
