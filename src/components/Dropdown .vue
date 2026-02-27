<template>
    <TSpace class="tdesign-demo-dropdown">
        <TDropdown :options="data" :max-column-width="120" :max-height="200" @click="clickHandler">
            <slot></slot>
        </TDropdown>
    </TSpace>
</template>
<script lang="ts" setup>
import { MessagePlugin, DropdownProps, Space as TSpace, Dropdown as TDropdown } from 'tdesign-vue-next';
// import { ChevronDownIcon } from 'tdesign-icons-vue-next';

const options: DropdownProps['options'] = [
    {
        content: '选项一',
        value: 1,
        children: [
            {
                content: '选项九',
                value: 9,
            },
        ],
    }
];

// Method
const clickHandler: DropdownProps['onClick'] = (data) => {
    console.log(data)
    MessagePlugin.success(`选中【${data.content}】`);
    replaceWallpaper(data.tid as number, data.value as string)
};

const replaceWallpaper = (key: number, value: string) => {
    emits('replaceWallpaper', key, value)
}

// Props
const props = defineProps<{
    data: DropdownProps['options']
}>()

// Emit
const emits = defineEmits<{
    'replaceWallpaper': [tid: number, wid: string]
}>()
</script>
