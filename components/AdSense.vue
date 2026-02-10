<template>
  <ins
    class="adsbygoogle"
    style="display: block"
    data-ad-client="ca-pub-8441864880126202"
    :data-ad-slot="adSlot"
    :data-ad-format="adFormat"
    :data-full-width-responsive="true"
  ></ins>
</template>

<script setup>
const props = defineProps({
  adSlot: {
    type: String,
    required: true,
  },
  adFormat: {
    type: String,
    default: "auto",
  },
});

onMounted(() => {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.error("AdSense error:", e);
  }
});
</script>
