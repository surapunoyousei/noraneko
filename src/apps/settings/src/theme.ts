import {
  createSystem,
  defaultBaseConfig,
  defineTokens,
  type SystemConfig,
} from "@chakra-ui/react";

const customColorConfig: SystemConfig = {
  theme: {
    tokens: {
      colors: defineTokens.colors({
        blue: {
          400: { value: "#8ab4f8" },
          500: { value: "#3182F6" },
          600: { value: "#2b6cb0" },
        },
      }),
    },
  },
  globalCss: {
    body: {
      color: { base: "chakra-ui-text-color", _dark: "whiteAlpha.900" },
      bg: { base: "chakra-ui-body-bg", _dark: "#1a1a1a" },
    },
    dialog: {
      bg: { base: "chakra-ui-body-bg", _dark: "#141214" },
    },
    switch: {
      bg: { base: "gray.200", _dark: "gray.700" },
      _checked: {
        bg: { base: "blue.500", _dark: "blue.600" },
      },
    },
  },
};

const customTheme = createSystem(defaultBaseConfig, customColorConfig);
export default customTheme;
