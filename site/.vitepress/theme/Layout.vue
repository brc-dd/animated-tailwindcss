<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import './index.css'
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-features-before>
      <div class="flex flex-col items-center px-6 py-12 sm:py-16">
        <VPImage
          class="max-w-xs sm:max-w-sm"
          :image="{ light: '/logo-light.svg', dark: '/logo-dark.svg', alt: 'animated-tailwindcss' }"
        />
        <h1
          class="mt-12 max-w-[50rem] text-center text-4xl font-semibold leading-tight sm:text-6xl sm:leading-tight"
        >
          Easiest way to use animations in Tailwind CSS
        </h1>
        <div class="flex flex-wrap justify-center pt-6">
          <div class="shrink-0 p-1.5">
            <VPButton text="Get Started" href="/docs/installation" />
          </div>
          <div class="shrink-0 p-1.5">
            <VPButton text="Playground" href="/playground" theme="alt" />
          </div>
          <div class="shrink-0 p-1.5">
            <VPButton
              text="View on GitHub"
              href="https://github.com/brc-dd/animated-tailwindcss"
              theme="alt"
            />
          </div>
        </div>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
