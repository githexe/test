<script lang="ts" setup>
import { ref } from 'vue';
import { Drawer as TDrawer, Space as TSpace, Slider as TSlider, Text, Switch } from 'tdesign-vue-next';
import type { DrawerProps, ButtonProps } from 'tdesign-vue-next';
import { TStore } from '../store';

// Variable
const store = TStore()
const visible = ref(false);

// Method
const handleClick: ButtonProps['onClick'] = () => {
    visible.value = true;
};

const handleClose: DrawerProps['onClose'] = () => {
    visible.value = false;
};

const onChangeEnd = (value: number) => {
    store.bgOpacity = value
};

const replaceColor = (index: number) => {
    store.currentColor = store.themeColorList[index]!.primaryColor
}

// 需要性能优化，防抖函数
const bgBoardMoveX = (value: number) => {
    store.bgBoardX = value
}

const bgBoardMoveY = (value: number) => {
    store.bgBoardY = value
}

// Expose
defineExpose({
    handleClick,
    handleClose
})
</script>


<template>
    <div>
        <TDrawer v-model:visible="visible" header="网站设置" :on-confirm="handleClose" @close="handleClose">
            <TSpace direction="vertical" size="large" style="width: 100%">
                <TSpace direction="vertical" :size="10" style="width: 100%">
                    <Text theme="primary" strong>布局设置</Text>
                </TSpace>

                <TSpace direction="vertical" :size="10" style="width: 90%">
                    <Text theme="primary" strong>配色方案</Text>

                    <div class="colors grid grid-cols-3 gap-1 ">
                        <div class="color" v-for="(item, index) in store.themeColorList" :key="index"
                            @click="replaceColor(index)">
                            <div class="mb-1 size-10 rounded-[4px] hover:cursor-pointer hover:rotate-10 transition-all duration-300"
                                :style="{ backgroundColor: item.primaryColor }">
                            </div>
                            <div class="text-[12px]">{{ item.name }}</div>
                        </div>
                    </div>
                </TSpace>

                <TSpace direction="vertical" :size="20" style="width: 100%">
                    <Text theme="primary" strong>背景板设置</Text>

                    <TSpace direction="horizontal" :size="10" style="width: 60%">
                        <Text theme="primary">显示背景板</Text>
                        <Switch v-model="store.showDesktopPets" size="small" />
                    </TSpace>

                    <TSpace direction="vertical" :size="10" style="width: 100%" class="items-center">
                        <TSpace direction="horizontal" :size="10" style="width: 100%" class="items-center">
                            <Text theme="primary">X</Text>
                            <TSlider v-model="store.bgBoardX" @change-end="bgBoardMoveX" min="-400" max="2000"
                                step="50" />
                            <Text theme="secondary">{{ store.bgBoardX }}</Text>
                        </TSpace>

                        <TSpace direction="horizontal" :size="10" style="width: 100%" class="items-center">
                            <Text theme="primary">Y</Text>
                            <TSlider v-model="store.bgBoardY" @change-end="bgBoardMoveY" min="-400" max="1000"
                                step="10" />
                            <Text theme="secondary">{{ store.bgBoardY }}</Text>
                        </TSpace>
                    </TSpace>
                </TSpace>

                <TSpace direction="vertical" :size="20" style="width: 85%">
                    <Text strong>特效设置</Text>

                    <div class="effects space-y-3 grid grid-cols-2 gap-2 text-center">
                        <div v-for="(item, index) in store.effectList" :key="index"
                            class="box-border border-2 border-transparent hover:border-2 hover:border-blue-500 hover:cursor-pointer">
                            <div class="effect size-20 bg-gray-400"
                                :style='{ backgroundImage: `url("${item.preview}")` }'></div>
                            <div class="effect-text text-white "> {{ item.name }}</div>
                        </div>
                    </div>
                </TSpace>

                <TSpace direction="vertical" :size="10" style="width: 100%">
                    <Text theme="primary" strong>其他设置</Text>

                    <TSpace direction="horizontal" :size="10" style="width: 100%" class="items-center">
                        <Text theme="primary">背景透明度</Text>
                        <TSlider v-model="store.bgOpacity" @change-end="onChangeEnd" min="0" max="1" step="0.1" />
                        <Text theme="secondary">{{ store.bgOpacity }}</Text>
                    </TSpace>
                </TSpace>
            </TSpace>

            <!-- <TSpace direction="vertical" :size="20" style="width: 85%">
                <Text strong>看板娘设置</Text>
            </TSpace> -->
        </TDrawer>
    </div>
</template>

<style scoped>
.slider-demo-container {
    padding: 30px 24px;
}

.effect {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

.effect-text {
    position: relative;

    &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: -1;
        opacity: .6;
    }
}
</style>