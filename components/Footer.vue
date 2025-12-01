<!-- components/Footer.vue -->
<template>
  <footer class="relative py-12 mt-32">
    <div
      class="absolute inset-0 bg-gradient-to-t from-dark-space to-transparent"
    ></div>

    <div class="container relative z-10 px-4 mx-auto">
      <div class="p-8 border glass-effect border-white/10 rounded-2xl">
        <div class="grid gap-8 mb-8 md:grid-cols-3">
          <!-- Brand -->
          <div>
            <div class="text-2xl font-bold glow-text">
              <img src="/logo.png" class="w-[60px] rounded-full" alt="" />
            </div>
            <p class="mb-4 text-white/60">
              Building exceptional digital experiences with modern web
              technologies.
            </p>
            <div
              class="flex justify-start gap-6"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <a
                href="https://github.com/vinosmart"
                class="flex items-center justify-center w-12 h-12 transition-all border rounded-full glass-effect border-white/20 hover:border-neon-blue hover:scale-110"
              >
                <i class="text-xl fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vinoth-kumar-489465166/"
                class="flex items-center justify-center w-12 h-12 transition-all border rounded-full glass-effect border-white/20 hover:border-neon-blue hover:scale-110"
              >
                <i class="text-xl fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/vinothkumar.604776/"
                class="flex items-center justify-center w-12 h-12 transition-all border rounded-full glass-effect border-white/20 hover:border-neon-blue hover:scale-110"
              >
                <i class="text-xl fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/selvapops/"
                class="flex items-center justify-center w-12 h-12 transition-all border rounded-full glass-effect border-white/20 hover:border-neon-blue hover:scale-110"
              >
                <i class="text-xl fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="mb-4 text-xl font-bold">Quick Links</h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="#home"
                  class="transition-colors text-white/60 hover:text-neon-blue"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#about"
                  class="transition-colors text-white/60 hover:text-neon-blue"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="#skills"
                  class="transition-colors text-white/60 hover:text-neon-blue"
                  >Skills</a
                >
              </li>
              <li>
                <a
                  href="#projects"
                  class="transition-colors text-white/60 hover:text-neon-blue"
                  >Projects</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  class="transition-colors text-white/60 hover:text-neon-blue"
                  >Contact</a
                >
              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h4 class="mb-4 text-xl font-bold">Stay Updated</h4>
            <p class="mb-4 text-sm text-white/60">
              Subscribe to get latest updates and articles.
            </p>
            <div class="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                class="flex-1 px-4 py-2 text-sm border rounded-lg outline-none glass-effect border-white/20 focus:border-neon-blue"
              />
              <button
                class="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-primary-pink"
              >
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div
          class="pt-8 text-sm text-center border-t border-white/10 text-white/60"
        >
          <p>
            &copy; 2025 VinothKumar. All rights reserved. Built with
            <span class="text-neon-blue">Vue.js</span>,
            <span class="text-primary-pink">Nuxt.js</span> &
            <span class="text-primary-cyan">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
