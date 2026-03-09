<template>
  <section
    id="achievements"
    class="relative py-24 overflow-hidden bg-[#0a0e27]"
  >
    <!-- Background glow blobs -->
    <div
      class="absolute w-64 h-64 rounded-full top-10 left-10 bg-neon-blue/5 blur-3xl"
    ></div>
    <div
      class="absolute w-64 h-64 rounded-full bottom-10 right-10 bg-primary-pink/5 blur-3xl"
    ></div>

    <div class="container px-4 mx-auto">
      <!-- Section Header -->
      <div class="mb-16 text-center" data-aos="fade-down">
        <p
          class="mb-2 text-sm font-semibold tracking-widest uppercase text-neon-blue"
        >
          <i class="mr-2 fa-solid fa-trophy"></i>Recognition
        </p>
        <h2 class="text-4xl font-bold text-white md:text-5xl">
          My
          <span
            class="text-transparent bg-gradient-to-r from-neon-blue via-primary-pink to-neon-purple bg-clip-text"
          >
            Achievements
          </span>
        </h2>
        <div
          class="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-neon-blue to-primary-pink"
        ></div>
      </div>

      <!-- Featured Award Card -->
      <div
        class="max-w-5xl mx-auto mb-16 overflow-hidden border rounded-2xl glass-effect border-white/10"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div class="flex flex-col items-center gap-0 md:flex-row">
          <!-- Award Poster Image -->
          <div class="relative w-full md:w-2/5 shrink-0">
            <img
              src="/achievements/poster.jpg"
              alt="Global Freelancers Festival 2026 - Best Website Developer Award"
              class="object-cover w-full h-full min-h-[340px] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
            <!-- Gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0e27]/80 hidden md:block"
            ></div>
          </div>

          <!-- Award Details -->
          <div class="flex flex-col justify-center w-full gap-5 p-8 md:w-3/5">
            <div class="flex items-center gap-3">
              <span
                class="px-3 py-1 text-xs font-bold tracking-widest text-white uppercase rounded-full bg-gradient-to-r from-neon-blue to-primary-pink"
              >
                🏆 Award Winner
              </span>
              <span class="text-sm text-white/50">Feb 28, 2026</span>
            </div>

            <h3 class="text-3xl font-bold leading-tight text-white md:text-4xl">
              Best Website Developer
            </h3>

            <p
              class="text-lg font-semibold text-transparent bg-gradient-to-r from-neon-blue to-primary-pink bg-clip-text"
            >
              Global Freelancers Festival 2026
            </p>

            <p class="leading-relaxed text-white/60">
              Honoured as the
              <strong class="text-white">Best Website Developer</strong> at the
              Global Freelancers Festival 2026, organised by the
              <strong class="text-white">Chennai Freelancers Club</strong> and
              powered by Makers Tribe — held at
              <strong class="text-white">IITM Research Park, Chennai</strong>.
            </p>

            <!-- Badges -->
            <div class="flex flex-wrap gap-3">
              <span
                class="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg glass-effect border border-white/10 text-white/70"
              >
                <i class="text-neon-blue fa-solid fa-building-columns"></i>
                Chennai Freelancers Club
              </span>
              <span
                class="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg glass-effect border border-white/10 text-white/70"
              >
                <i class="text-primary-pink fa-solid fa-location-dot"></i>
                IITM Research Park
              </span>
              <span
                class="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg glass-effect border border-white/10 text-white/70"
              >
                <i class="text-neon-purple fa-solid fa-calendar"></i>
                Feb 28, 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery: Award Photos + Video -->
      <div class="max-w-5xl mx-auto">
        <h4
          class="mb-8 text-xl font-semibold text-center text-white/70"
          data-aos="fade-up"
        >
          Award Gallery
        </h4>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Award Image 1 -->
          <div
            class="overflow-hidden border cursor-pointer rounded-xl glass-effect border-white/10 group"
            data-aos="fade-up"
            data-aos-delay="100"
            @click="openLightbox('/achievements/award1.jpg')"
          >
            <div class="relative overflow-hidden aspect-square">
              <img
                src="/achievements/award1.jpg"
                alt="Award Ceremony Photo 1"
                class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100"
              >
                <i
                  class="text-3xl text-white fa-solid fa-magnifying-glass-plus"
                ></i>
              </div>
            </div>
            <!-- <p class="px-4 py-3 text-sm text-white/50">Award Ceremony 🏆</p> -->
          </div>
          <div
            class="overflow-hidden border rounded-xl glass-effect border-white/10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="relative overflow-hidden bg-black aspect-square">
              <video
                ref="achievementVideo"
                class="object-cover w-full h-full"
                :poster="
                  videoPosterVisible ? undefined : '/achievements/poster.jpg'
                "
                controls
                preload="metadata"
                @play="videoPosterVisible = true"
              >
                <source src="/achievements/award-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <!-- <p class="px-4 py-3 text-sm text-white/50">Award Moment 🎬</p> -->
          </div>
          <!-- Award Image 2 -->
          <div
            class="overflow-hidden border cursor-pointer rounded-xl glass-effect border-white/10 group"
            data-aos="fade-up"
            data-aos-delay="200"
            @click="openLightbox('/achievements/award2.jpg')"
          >
            <div class="relative overflow-hidden aspect-square">
              <img
                src="/achievements/award2.jpg"
                alt="Award Ceremony Photo 2"
                class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100"
              >
                <i
                  class="text-3xl text-white fa-solid fa-magnifying-glass-plus"
                ></i>
              </div>
            </div>
            <!-- <p class="px-4 py-3 text-sm text-white/50">
              Receiving the Award 🎖️
            </p> -->
          </div>

          <!-- Video -->
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightboxImage"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          @click.self="closeLightbox"
        >
          <button
            class="absolute flex items-center justify-center w-10 h-10 text-white transition-all border rounded-full top-6 right-6 glass-effect border-white/20 hover:border-neon-blue"
            @click="closeLightbox"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
          <img
            :src="lightboxImage"
            alt="Award photo"
            class="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
            data-aos="zoom-in"
          />
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
const lightboxImage = ref(null);
const videoPosterVisible = ref(false);
const achievementVideo = ref(null);

function openLightbox(src) {
  lightboxImage.value = src;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightboxImage.value = null;
  document.body.style.overflow = "";
}

// Close on Escape key
onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});

onUnmounted(() => {
  window.removeEventListener("keydown", closeLightbox);
});
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
