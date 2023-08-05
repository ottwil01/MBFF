import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "md",
    w: "max-content",
  },
  sizes: {
    sm: {
      px: 4,
      py: 3,
    },
    md: {
      px: 6,
      py: 4,
      fontSize: "xl",
    },
  },
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "brand.blue",
      color: "brand.blue",
    },
    outlineRed: {
      border: "2px solid",
      borderColor: "brand.red",
      color: "brand.red",
    },
    solidBlue: {
      bg: "brand.blue",
      color: "white",
    },
    solidRed: {
      bg: "brand.red",
      color: "white",
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});

export const theme = extendTheme({
  colors: {
    brand: {
      blue: "#082499",
      yellow: "#FFF200",
      red: "#ED1C24",
      green: "#144D34",
      grey: "#999999",
    },
  },
  components: { Button },
});
