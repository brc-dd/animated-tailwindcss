<template>
  <div class="mt-6 flex flex-col">
    <div
      class="flex items-center justify-center overflow-hidden rounded-md bg-[#333B45] p-20 sm:p-32"
    >
      <img
        alt="tw-Animated"
        @animationend="reset"
        class="w-32 animate-delay-100"
        :class="{ [`animate-${animation}`]: shouldAnimate }"
        src="/mark.svg"
      />
    </div>
    <div class="mt-6 flex self-center">
      <button class="rounded-l-md bg-[#3B3B3B] py-1 px-4" @click="copy" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="my-[3px] h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            :class="copied ? 'hidden' : 'block'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
          <path
            :class="copied ? 'block' : 'hidden'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      </button>
      <select
        aria-label="Choose an animation."
        @change="handleChange"
        class="appearance-none border-x border-[#333] bg-[#3B3B3B] py-1 px-4"
        id="animation"
      >
        <optgroup v-for="(keyframes, type) in animations" :label="type">
          <option v-for="keyframe in keyframes">{{ keyframe }}</option>
        </optgroup>
      </select>
      <button type="button" class="rounded-r-md bg-[#3B3B3B] py-1 px-4" @click="rerun">
        Animate
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import animations from '../utils/animations';

const animation = ref(Object.values(animations)[0][0]);
const shouldAnimate = ref(false);
const copied = ref(false);

const handleChange: EventListener = (e) => {
  shouldAnimate.value = true;
  animation.value = (e.target as HTMLSelectElement).value;
};

const reset: EventListener = () => {
  shouldAnimate.value = false;
};

const rerun: EventListener = () => {
  shouldAnimate.value = true;
};

const copy: EventListener = () => {
  navigator.clipboard.writeText(`animate-${animation.value}`).then(() => {
    copied.value = true;
  });
  setTimeout(() => {
    copied.value = false;
  }, 1200);
};
</script>
