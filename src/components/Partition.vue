<script setup lang="ts">
import { onMounted } from 'vue';

// Enum
enum Colors {
    Red = 'border-red-500',
    Green = 'border-green-500',
    Yellow = 'border-yellow-500',
}

// Props
const props = withDefaults(defineProps<{
    name: string,
    lineColor: Colors,
    count: number,
}>(), {
    count: 0
})

// Life Circyle
onMounted(() => {

})
</script>

<template>
    <div class="card">
        <div :class="`title p-2 font-bold text-left text-black border-b-2 ${lineColor} dark:text-white`">{{ name }}
            <span class="size-10">{{ count }}</span>
        </div>
        <div class="list space-y-3 overflow-y-scroll box-border mt-5 p-2 h-80 border-2 border-black dark:border-white">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.list::-webkit-scrollbar {
    width: 8px;
}

.list::-webkit-scrollbar-track {
    background: transparent;
}

.list::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}
</style>