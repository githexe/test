<script setup lang="ts">
// Enum

const props = withDefaults(defineProps<{
    name: string
    size: number
}>(), {
    size: 24
})
</script>

<template>
    <div v-if="name === 'Pencli'">
        <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#icon-1f5be2d52696ccc)">
                <path d="M30.9995 8.99902L38.9995 16.999" stroke="#333" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M7.99953 31.999L35.9994 4L43.9995 11.999L15.9995 39.999L5.99951 41.999L7.99953 31.999Z"
                    stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30.9995 8.99902L38.9995 16.999" stroke="#333" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M8.99951 31.999L15.9995 38.999" stroke="#333" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M12.9995 34.999L34.9995 12.999" stroke="#333" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="icon-1f5be2d52696ccc">
                    <rect width="48" height="48" fill="#333" />
                </clipPath>
            </defs>
        </svg>
    </div>

    <div v-else-if="name === 'Sun'">
        <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z"
                fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
            <path
                d="M24 6C25.3807 6 26.5 4.88071 26.5 3.5C26.5 2.11929 25.3807 1 24 1C22.6193 1 21.5 2.11929 21.5 3.5C21.5 4.88071 22.6193 6 24 6Z"
                fill="#333" />
            <path
                d="M38.5 12C39.8807 12 41 10.8807 41 9.5C41 8.11929 39.8807 7 38.5 7C37.1193 7 36 8.11929 36 9.5C36 10.8807 37.1193 12 38.5 12Z"
                fill="#333" />
            <path
                d="M44.5 26.5C45.8807 26.5 47 25.3807 47 24C47 22.6193 45.8807 21.5 44.5 21.5C43.1193 21.5 42 22.6193 42 24C42 25.3807 43.1193 26.5 44.5 26.5Z"
                fill="#333" />
            <path
                d="M38.5 41C39.8807 41 41 39.8807 41 38.5C41 37.1193 39.8807 36 38.5 36C37.1193 36 36 37.1193 36 38.5C36 39.8807 37.1193 41 38.5 41Z"
                fill="#333" />
            <path
                d="M24 47C25.3807 47 26.5 45.8807 26.5 44.5C26.5 43.1193 25.3807 42 24 42C22.6193 42 21.5 43.1193 21.5 44.5C21.5 45.8807 22.6193 47 24 47Z"
                fill="#333" />
            <path
                d="M9.5 41C10.8807 41 12 39.8807 12 38.5C12 37.1193 10.8807 36 9.5 36C8.11929 36 7 37.1193 7 38.5C7 39.8807 8.11929 41 9.5 41Z"
                fill="#333" />
            <path
                d="M3.5 26.5C4.88071 26.5 6 25.3807 6 24C6 22.6193 4.88071 21.5 3.5 21.5C2.11929 21.5 1 22.6193 1 24C1 25.3807 2.11929 26.5 3.5 26.5Z"
                fill="#333" />
            <path
                d="M9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.11929 10.8807 7 9.5 7C8.11929 7 7 8.11929 7 9.5C7 10.8807 8.11929 12 9.5 12Z"
                fill="#333" />
        </svg>
    </div>

    <div v-else-if="name === 'Moon'">
        <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z"
                fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
        </svg>
    </div>

    <div v-else-if="name === 'Layout'">
        <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="36" height="36" rx="3" stroke="#333" stroke-width="4" stroke-linejoin="round" />
            <path d="M6 17H42" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 42V17" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>

    <div v-else-if="name === 'Theme'">
        <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24.9507 42.3603L30.4164 30.3695L43.1046 26.6501L33.3383 17.7699L33.7059 4.60732L22.2044 11.1099L9.74329 6.69439L12.4013 19.5934L4.33228 30.027L17.4766 31.4965L24.9507 42.3603Z"
                fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M36.1777 36.0537L44.1777 44.0179" stroke="#333" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </div>

    <div v-else-if="name === 'Delete'">
        <svg :width="size" height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 10V44H39V10H9Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
            <path d="M20 20V33" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M28 20V33" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 10H44" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 10L19.289 4H28.7771L32 10H16Z" fill="none" stroke="#333" stroke-width="4"
                stroke-linejoin="round" />
        </svg>
    </div>

    <div v-else-if="name === 'Plan'">
        <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z" fill="none" stroke="#333"
                stroke-width="4" stroke-linejoin="round" />
            <path d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z" stroke="#333"
                stroke-width="4" stroke-linejoin="round" />
            <path d="M16 31L22 37L34 25" stroke="#333" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M16 5V13" stroke="#333" stroke-width="4" stroke-linecap="round" />
            <path d="M32 5V13" stroke="#333" stroke-width="4" stroke-linecap="round" />
        </svg>
    </div>

    <div v-else-if="name === 'Picture'">
        <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5 10C5 8.89543 5.89543 8 7 8L41 8C42.1046 8 43 8.89543 43 10V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V10Z"
                stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M14.5 18C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15C13.6716 15 13 15.6716 13 16.5C13 17.3284 13.6716 18 14.5 18Z"
                stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 24L20 28L26 21L43 34V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V34L15 24Z"
                fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
        </svg>
    </div>

    <div v-else-if="name === 'Config'">
        <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L18 10H10V18L4 24L10 30V38H18L24 44L30 38H38V30L44 24L38 18V10H30L24 4Z" fill="none"
                stroke="#333" stroke-width="4" stroke-linejoin="round" />
            <path
                d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
                fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
        </svg>
    </div>

    <div v-else-if="name === 'Clear'">
        <svg :width="size" :height="size">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.91406H28V13.9141H43V21.9141H5V13.9141H20V5.91406Z"
                stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 40H40V22H8V40Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
            <path d="M16 39.8976V33.9141" stroke="#333" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M24 39.8977V33.8977" stroke="#333" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M32 39.8976V33.9141" stroke="#333" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M12 40H36" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>

    <div v-else-if="name === 'Reset'">
        <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24">
            <path fill="#333333"
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2v2a8 8 0 1 0 4.5 1.385V8h-2V2h6v2H18a9.99 9.99 0 0 1 4 8" />
        </svg>
    </div>

    <div v-else-if="name === 'Sun'">

    </div>
</template>