import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { defaultsComponents } from "./components";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#EE498B",
          secondary: "#FAAA49",
        },
      },
      dark: {
        colors: {
          primary: "#EE498B",
          secondary: "#FAAA49",
        },
      },
    },
  },
  defaults: defaultsComponents,
});
