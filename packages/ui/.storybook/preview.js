import "../dist/index.css";
import {
  DEFAULT_THEME,
  withTailwindTheme,
} from "./withTailwindTheme.decorator";

export const decorators = [withTailwindTheme];

export const parameters = {
  backgrounds: {
    default: "Dark",
    values: [
      {
        name: "Dark",
        value: "#1B181E",
      },
      {
        name: "Light",
        value: "#F8F5F1",
      },
      {
        name: "Accent",
        value: "#FF3F66",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
