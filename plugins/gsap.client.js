// plugins/gsap.client.js
import { defineNuxtPlugin } from "#app";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    nuxtApp.provide("gsap", gsap);
    nuxtApp.provide("ScrollTrigger", ScrollTrigger);
    nuxtApp.provide("ScrollToPlugin", ScrollToPlugin);
  }
});
