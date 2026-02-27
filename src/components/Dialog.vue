<script lang="ts" setup>
import { ref } from 'vue';
import { Button as TButton, Dialog as TDialog, Space as TSpace } from 'tdesign-vue-next';
import type { DialogProps, ButtonProps } from 'tdesign-vue-next';

const visible = ref(false);

const action = ref('')
let data: any[] = []

const onClick: ButtonProps['onClick'] = (act: string, ...args) => {
    // console.log('点击了确认按钮，弹出弹窗', context);
    action.value = act
    data = args
    visible.value = true;
};

const onConfirmAnother: DialogProps['onConfirm'] = (context) => {
    console.log('点击了确认按钮', context);

    switch (action.value) {
        case 'editTodo':
            emit('confirmModifiedTodo', data[0] as number)
            break
        default:
            break
    }

    visible.value = false;
};

const close: DialogProps['onClose'] = (context) => {
    console.log('关闭弹窗，点击关闭按钮、按下ESC、点击蒙层等触发', context);
};

const onCancel: DialogProps['onCancel'] = (context) => {
    console.log('点击了取消按钮', context);
};

const onEscKeydown: DialogProps['onEscKeydown'] = (context) => {
    console.log('按下了ESC', context);
};

const onCloseBtnClick: DialogProps['onCloseBtnClick'] = (context) => {
    console.log('点击了关闭按钮', context);
};

const onOverlayClick: DialogProps['onOverlayClick'] = (context) => {
    console.log('点击了蒙层', context);
};

// Emit
const emit = defineEmits<{
    'confirmModifiedTodo': [index: number]
}>()

// Proops
const props = defineProps<{
    title: string
}>()

// Expose
defineExpose({
    onClick
})
</script>


<template>
    <TDialog v-model:visible="visible" :header="title" width="30%" :confirm-on-enter="true" :on-cancel="onCancel"
        :on-esc-keydown="onEscKeydown" :on-close-btn-click="onCloseBtnClick" :on-overlay-click="onOverlayClick"
        :on-close="close" :on-confirm="onConfirmAnother">
        <TSpace direction="vertical" style="width: 100%">
            <div>
                <slot></slot>
            </div>
        </TSpace>
    </TDialog>
</template>