<script setup lang="ts">
import { computed, ref } from 'vue';
import { TStore } from '../store';

// Variable
const store = TStore()
const abilitys = ['切换']
const isShowAbilitys = ref(false)

// Method
const showAbilitys = () => {
    isShowAbilitys.value = !isShowAbilitys.value
}

const replaceBgBoard = (index: number) => {
    store.currentBgBoardIndex = index
}

// Computed
const currentBgBoard = computed(() => {
    return store.bgBoardList[store.currentBgBoardIndex]?.url
})

const dynamicStyle = computed(() => {
    const X = `right-[${store.bgBoardX}px]`
    const Y = `bottom-[${store.bgBoardY}px]`
    return [X, Y]
})
</script>

<template>
    <div class="overflow-hidden box fixed right-4 bottom-0 z-50" :class="dynamicStyle">
        <div class="bg-board w-80 h-100 bg-pink-300 bg-cover" @click="showAbilitys"></div>

        <div class="absolute right-60 top-0 z-[999] space-y-3" v-show="isShowAbilitys">
            <div v-for="(item, index) in store.bgBoardList" :key="index"
                class="flex justify-center items-center box-border rounded-[3px] w-20 h-8 bg-gray-100 text-[14px] hover:cursor-pointer"
                @click="replaceBgBoard(index)">{{ item.name }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-board {
    background: v-bind('`url("${currentBgBoard}")`') no-repeat;
    background-size: cover;
}
</style>