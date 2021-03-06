import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const themeObj = {
  config: {
    initialColorMode: "dark",
  },
  components: {
    Input: {
      variants: {
        outline: {
          _hover: { borderColor: "3ccbfb" },
        },
      },
    },
  },
  shadows: {
    outline: "none",
  },
  colors: {
    brand: {
      primary: {
        1000: "#FF579F",
        900: "#FF7070",
        800: "#FF8585",
        700: "#FF9999",
        600: "#FFADAD",
        500: "#FFC2C2",
        darker: "#ed257b",
      },
      secondary: {
        1000: "#47FFC2",
        900: "#55FFC6",
        800: "#62FFCB",
        700: "#6FFFCF",
        600: "#7CFFD3",
        500: "#89FFD8",
      },
      softwhite: "#ececec",
      white: "#f8f8f8",
      gray: "#49494e",
      hovergraylight: "#dfdfdf",
      // hovergraydark: "#35353b",
      hovergraydark: "#434349",
      darkgray: "#232329",
      independenceBlue: "#434354",
      text: {
        dark: "#696969",
        light: "#E1E1E1",
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("brand.white", "brand.gray")(props),
        // minHeight: "100vh",
        overflowX: "hidden",
      },

      p: {
        color: mode("#696969", "#E1E1E1")(props),
      },
      span: {
        color: mode("#696969", "#E1E1E1")(props),
      },
    }),
  },
};

const theme = extendTheme(themeObj);

export default theme;
