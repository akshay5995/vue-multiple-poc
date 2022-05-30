import { createApp } from "vue";
import App from "./App.vue";
import { sum } from "awesome-util";

console.log(sum(1, 2));

createApp(App).mount("#app");
