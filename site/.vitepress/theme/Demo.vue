<template>
  <div
    class="relative mt-6 flex h-72 w-full justify-center overflow-hidden rounded-xl bg-[var(--vp-c-bg-soft)] sm:h-80"
  >
    <img
      class="w-32 animate-delay-200 animate-fill-backwards"
      :class="{ [`animate-${animation}`]: true, 'animate-infinite': loop }"
      src="/tw.svg"
      alt=""
      fetchpriority="high"
      ref="img"
    />
  </div>
  <div class="flex items-end justify-center">
    <VPFlyout
      class="z-10"
      :items="items"
      :button="animation"
      @click="onClick"
      @keydown="onClick"
      @mouseenter="open"
      ref="flyout"
    />
    <div class="ml-2 flex h-8 items-center space-x-3 rounded-lg bg-[var(--vp-c-bg-alt)] px-5">
      <button
        type="button"
        class="rounded-md p-1 transition-colors duration-300 hover:bg-[var(--vp-c-bg-mute)]"
        @click="repeat"
        title="Replay"
      >
        <svg class="h-5 w-5" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fill="currentColor"
            d="M3 6.5v-3a.5.5 0 0 1 1 0v1.207a7.978 7.978 0 0 1 5.406-2.685a7.96 7.96 0 0 1 2.531.214a8.003 8.003 0 0 1 1.713 14.885a7.952 7.952 0 0 1-3.147.863a7.95 7.95 0 0 1-5.15-1.472a7.977 7.977 0 0 1-3.28-5.426a8.034 8.034 0 0 1-.059-1.604a.5.5 0 1 1 .998.064A6.973 6.973 0 0 0 3 10c0 3.1 2.015 5.73 4.808 6.65a6.995 6.995 0 0 0 3.141.285a6.987 6.987 0 0 0 2.325-.746a7.003 7.003 0 0 0-3.795-13.17a7.106 7.106 0 0 0-1.923.42A7.02 7.02 0 0 0 4.255 6H6a.5.5 0 0 1 0 1H3.5a.502.502 0 0 1-.5-.5Zm4.5 1.467c0-.93.98-1.535 1.812-1.117l4.04 2.033c.917.462.917 1.772 0 2.234l-4.04 2.032A1.25 1.25 0 0 1 7.5 12.034V7.967Zm1.362-.223a.25.25 0 0 0-.362.223v4.066a.25.25 0 0 0 .362.223l4.04-2.033a.25.25 0 0 0 0-.446l-4.04-2.033Z"
          />
        </svg>
      </button>
      <button
        type="button"
        class="rounded-md p-1 transition-colors duration-300 hover:bg-[var(--vp-c-bg-mute)]"
        @click="toggleLoop"
        title="Loop"
      >
        <svg class="h-5 w-5" viewBox="0 0 20 20" v-if="loop" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.5 6.671c.116 0 .223.04.308.107l.067.063l.017.02a5 5 0 0 1-3.675 8.135L13 15H7a5.07 5.07 0 0 1-.303-.009l1.657 1.655a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057l-2.5-2.5a.5.5 0 0 1-.057-.638l.057-.07l2.5-2.5a.5.5 0 0 1 .765.638l-.057.07l-1.637 1.636l.14.008L7 14h6a4 4 0 0 0 3.11-6.516a.5.5 0 0 1 .39-.812Zm-4.854-4.025a.5.5 0 0 1 .638-.057l.07.057l2.5 2.5l.057.07a.5.5 0 0 1 0 .568l-.057.07l-2.5 2.5l-.07.057a.5.5 0 0 1-.568 0l-.07-.057l-.057-.07a.5.5 0 0 1 0-.568l.057-.07l1.637-1.636l-.14-.008L13 6H7a4 4 0 0 0-3.105 6.522a.5.5 0 1 1-.801.601a5 5 0 0 1 3.689-8.119L7 5h6c.102 0 .203.003.303.009l-1.657-1.655l-.057-.07a.5.5 0 0 1 .057-.638Z"
          />
        </svg>
        <svg class="h-5 w-5" viewBox="0 0 20 20" v-else aria-hidden="true">
          <path
            fill="currentColor"
            d="M2.146 2.146a.5.5 0 0 1 .638-.057l.07.057l15 15l.057.07a.5.5 0 0 1-.695.695l-.07-.057l-2.988-2.989a4.991 4.991 0 0 1-.861.126L13 15H7c-.102 0-.203-.003-.304-.01l1.658 1.656a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057l-2.5-2.5a.5.5 0 0 1-.057-.638l.057-.07l2.5-2.5a.5.5 0 0 1 .765.638l-.057.07l-1.636 1.636l.14.008L7 14h6c.095 0 .19-.003.283-.01L5.56 6.267a4.001 4.001 0 0 0-1.665 6.255a.5.5 0 1 1-.801.601a5 5 0 0 1 1.707-7.616L2.147 2.855l-.057-.07a.5.5 0 0 1 .057-.638ZM16.5 6.671c.116 0 .223.04.308.107l.067.063l.017.02A4.98 4.98 0 0 1 18 10c0 1.608-.76 3.04-1.939 3.954l-.714-.714A3.995 3.995 0 0 0 17 10c0-.953-.334-1.829-.89-2.516a.5.5 0 0 1 .39-.812ZM12.284 2.59l.07.057l2.5 2.5a.5.5 0 0 1 .057.638l-.057.07l-2.5 2.5a.5.5 0 0 1-.765-.638l.057-.07l1.637-1.636l-.14-.008L13 6H8.106l-1-1H13c.102 0 .203.003.304.01l-1.658-1.656a.5.5 0 0 1-.057-.638l.057-.07a.5.5 0 0 1 .638-.057Z"
          />
        </svg>
      </button>
      <button
        type="button"
        class="rounded-md p-1 transition-colors duration-300 hover:bg-[var(--vp-c-bg-mute)]"
        @click="copy"
        title="Copy"
      >
        <svg class="h-5 w-5" viewBox="0 0 20 20" v-if="copied" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.854 9.854a.5.5 0 0 0-.708-.708L9 12.293l-1.146-1.147a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3.5-3.5ZM8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2h-3ZM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.585A1.5 1.5 0 0 0 8.5 5h3a1.5 1.5 0 0 0 1.415-1H14.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5Z"
          />
        </svg>
        <svg class="h-5 w-5" viewBox="0 0 20 20" v-else aria-hidden="true">
          <path
            fill="currentColor"
            d="M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7.085 4H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'
import { ref } from 'vue'

const animations: Record<string, string[]> = {
  'Tailwind CSS Builtins': [
    //
    'twSpin',
    'twPing',
    'twPulse',
    'twBounce',
  ],

  'Attention Seekers': [
    //
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shakeX',
    'shakeY',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello',
    'heartBeat',
  ],

  'Back Entrances': [
    //
    'backInDown',
    'backInLeft',
    'backInRight',
    'backInUp',
  ],

  'Back Exits': [
    //
    'backOutDown',
    'backOutLeft',
    'backOutRight',
    'backOutUp',
  ],

  'Bouncing Entrances': [
    //
    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
  ],

  'Bouncing Exits': [
    //
    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',
  ],

  'Fade Entrances': [
    //
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'fadeInTopLeft',
    'fadeInTopRight',
    'fadeInBottomLeft',
    'fadeInBottomRight',
  ],

  'Fade Exits': [
    //
    'fadeOut',
    'fadeOutDown',
    'fadeOutDownBig',
    'fadeOutLeft',
    'fadeOutLeftBig',
    'fadeOutRight',
    'fadeOutRightBig',
    'fadeOutUp',
    'fadeOutUpBig',
    'fadeOutTopLeft',
    'fadeOutTopRight',
    'fadeOutBottomRight',
    'fadeOutBottomLeft',
  ],

  Flippers: [
    //
    'flip',
    'flipInX',
    'flipInY',
    'flipOutX',
    'flipOutY',
  ],

  LightSpeed: [
    //
    'lightSpeedInRight',
    'lightSpeedInLeft',
    'lightSpeedOutRight',
    'lightSpeedOutLeft',
  ],

  'Rotating Entrances': [
    //
    'rotateIn',
    'rotateInDownLeft',
    'rotateInDownRight',
    'rotateInUpLeft',
    'rotateInUpRight',
  ],

  'Rotating Exits': [
    //
    'rotateOut',
    'rotateOutDownLeft',
    'rotateOutDownRight',
    'rotateOutUpLeft',
    'rotateOutUpRight',
  ],

  Specials: [
    //
    'hinge',
    'jackInTheBox',
    'rollIn',
    'rollOut',
  ],

  'Zooming Entrances': [
    //
    'zoomIn',
    'zoomInDown',
    'zoomInLeft',
    'zoomInRight',
    'zoomInUp',
  ],

  'Zooming Exits': [
    //
    'zoomOut',
    'zoomOutDown',
    'zoomOutLeft',
    'zoomOutRight',
    'zoomOutUp',
  ],

  'Sliding Entrances': [
    //
    'slideInDown',
    'slideInLeft',
    'slideInRight',
    'slideInUp',
  ],

  'Sliding Exits': [
    //
    'slideOutDown',
    'slideOutLeft',
    'slideOutRight',
    'slideOutUp',
  ],
}

const items = Object.entries(animations).map(([group, names]) => ({
  text: group,
  items: names.map((name) => ({ link: '/animations#', text: name })),
}))

const flyout = ref<InstanceType<typeof VPFlyout>>()

const open = () => {
  flyout.value?.$el.classList.remove('closed')
}

const close = () => {
  try {
    // @ts-ignore
    flyout.value.$.setupState.open = false
    flyout.value?.$el.classList.add('closed')
  } catch {}
}

const animation = ref('twSpin')

const onClick = (e: MouseEvent | KeyboardEvent) => {
  if (e instanceof KeyboardEvent) {
    if (e.code !== 'Space') return
  }
  open()
  const el = e.target as HTMLAnchorElement
  if (el.matches('.VPLink')) {
    e.preventDefault()
    animation.value = el.innerText.trim()
    close()
  }
}

const loop = ref(false)
const img = ref<HTMLImageElement>()

const repeat = () => {
  if (loop.value) return
  img.value?.classList.remove(`animate-${animation.value}`)
  const _ = window.getComputedStyle(img.value!).opacity
  img.value?.classList.add(`animate-${animation.value}`)
}

const toggleLoop = () => {
  if (loop.value) {
    const handleIteration = () => {
      loop.value = false
      img.value?.removeEventListener('animationiteration', handleIteration)
    }
    img.value?.addEventListener('animationiteration', handleIteration)
  } else {
    loop.value = true
  }
}

const copied = ref(false)

const copy = () => {
  navigator.clipboard.writeText(
    `animate-${animation.value}${loop.value ? ' animate-infinite' : ''}`,
  )
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style scoped lang="postcss">
::v-deep {
  .VPMenu {
    @apply max-h-96 w-52 rounded-lg;
  }

  .menu {
    left: calc(50% - 13rem / 2);
    @apply top-3 w-52 !-translate-y-full;
  }

  .VPFlyout {
    @apply h-14 w-52;
  }

  .VPFlyout.closed .menu {
    @apply invisible opacity-0;
  }

  .button {
    @apply absolute bottom-0 h-8 w-52 rounded-lg bg-[var(--vp-c-bg-alt)];
    margin-left: calc(50% - 13rem / 2);
  }

  .text {
    padding-left: 13px;
    @apply h-8;
  }

  .text-icon {
    @apply absolute right-6 rotate-180;
  }

  .title {
    @apply leading-none;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    margin: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    border-left: 2px solid #959595;
  }
}
</style>
