// plugins/aos.client.js - Check this file exists
import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook("page:finish", () => {
      AOS.init({
        duration: 1000,
        easing: "ease-out-cubic",
        once: false,
        mirror: true,
        offset: 100,
      });
    });
  }
});
