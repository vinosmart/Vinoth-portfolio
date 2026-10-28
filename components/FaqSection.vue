<!-- components/FaqSection.vue -->
<template>
  <section id="faq" class="relative py-32" aria-labelledby="faq-title">
    <div class="container max-w-3xl px-4 mx-auto">
      <div class="mb-12 text-center" data-aos="fade-up">
        <p
          class="mb-3 text-sm font-semibold tracking-widest uppercase text-neon-blue"
        >
          <i class="mr-2 fa-solid fa-circle-question"></i>FAQ
        </p>
        <h2 id="faq-title" class="text-4xl font-bold md:text-5xl">
          Frequently asked
          <span
            class="text-transparent bg-gradient-to-r from-neon-blue to-primary-pink bg-clip-text"
            >questions</span
          >
        </h2>
      </div>

      <!-- Answers stay in the HTML (details/summary) so search engines and AI can read them -->
      <div class="space-y-4">
        <details
          v-for="(faq, index) in faqs"
          :key="faq.q"
          class="p-6 border group glass-effect border-white/10 rounded-2xl open:border-neon-blue/50"
          :open="index === 0"
        >
          <summary
            class="flex items-center justify-between gap-4 text-lg font-semibold list-none cursor-pointer"
          >
            <h3>{{ faq.q }}</h3>
            <i
              class="transition-transform fa-solid fa-plus text-neon-blue group-open:rotate-45"
            ></i>
          </summary>
          <p class="mt-4 leading-relaxed text-white/70">{{ faq.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
import { faqs } from "~/data/portfolio";
</script>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}
</style>
