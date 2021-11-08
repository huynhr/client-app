import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      "html, body": {
        boxSizing: "border-box",
      },
      body: {
        backgroundColor: mode("gray.50", "gray.900")(props),
      },
    }),
  },
});

export default theme;
