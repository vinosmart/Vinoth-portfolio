// plugins/aos.client.js
import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Initialize AOS immediately
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 100,
      disable: false,
      startEvent: "DOMContentLoaded",
      animatedClassName: "aos-animate",
      initClassName: "aos-init",
    });

    // Refresh AOS on route change
    nuxtApp.hook("page:finish", () => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });

    // Also refresh after page transition
    nuxtApp.hook("page:transition:finish", () => {
      AOS.refresh();
    });

    // Provide AOS instance
    return {
      provide: {
        aos: AOS,
      },
    };
  }
});
