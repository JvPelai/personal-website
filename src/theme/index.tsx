import { extendTheme, ThemeConfig, ThemeProviderProps } from '@chakra-ui/react';
import { mode, createBreakpoints } from '@chakra-ui/theme-tools';
const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
  '2xl': '176em',
});
const styles = {
  global: (props: ThemeProviderProps) => ({
    body: {
      bg: mode('gray.50', '#151a23')(props),
    },
  }),
  breakpoints,
};
const config: ThemeConfig = {
  useSystemColorMode: true,
};

const theme = extendTheme({ ...config, styles });

export default theme;
