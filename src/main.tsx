import ReactDOM from "react-dom/client";
import { Flowbite, CustomFlowbiteTheme } from "flowbite-react";
import { Provider } from "react-redux";

import "./index.css";
import store from "@/store";
import App from "@/features/App";

const customTheme: CustomFlowbiteTheme = {
  modal: {
    root: {
      base: "",
    },
    header: {
      title: "text-white",
      base: "border-b  p-4 border-white/20 flex items-center",
    },
    footer: {
      base: "bg-black/90 border-white/20 p-4 flex items-center",
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Flowbite theme={{ theme: customTheme }}>
    <Provider store={store}>
      <App />
    </Provider>
  </Flowbite>
);
