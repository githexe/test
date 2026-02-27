<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import Todo from '../components/Todo.vue';
import Icon from '../components/Icon.vue';
import Partition from '../components/Partition.vue';
import BgBoard from '../components/BgBoard.vue';
import Drawer from '../components/Drawer.vue';
import Dropdown from '../components/Dropdown .vue';
import Dialog from '../components/Dialog.vue';
import { Textarea, MessagePlugin } from 'tdesign-vue-next';
import { TStore } from '../store';
import { storeToRefs } from 'pinia'
import type { Ref } from 'vue';
import type { DropdownProps } from 'tdesign-vue-next';

// Enum
const enum TodoStatus {
    UnSelected,
    Selected,
    Deleted
}

enum Colors {
    Red = 'border-red-500',
    Green = 'border-green-500',
    Yellow = 'border-yellow-500',
}

// Type
type Todo = {
    tid: string,
    status: TodoStatus,
    content: string,
    time: string
}

// Variable
const store = TStore()

const { wallpaper, memoContent } = storeToRefs(store)
const content = ref('')
const isDark = ref(false)
const iconSize = 32

const tDialog = ref(null)
const tDrawer = ref(null)

const currentTodoContent = ref('')

const { todos }: Ref<Array<Todo>> = storeToRefs(store)

const wallpaperKeys = Object.keys(store.wallpaperList)
const dropdownData: DropdownProps['options'] = wallpaperKeys.map((value, index) => {
    return {
        content: value,
        value: index + 1,
        children: store.wallpaperList[wallpaperKeys[index] as string]?.map(item => {
            return {
                content: item.name,
                value: item.wid,
                path: item.path,
                tid: item.tid
            }
        })
    }
})

// Method
function findCurrentTodo(tid: string): number {
    const index = todos.value.findIndex(item => item.tid === tid)
    return index
}

const writeTodo = () => {
    if (content.value.trim() === '' || content.value == undefined) {
        return alert('请输入内容')
    }

    const time = dayjs().format('YYYY-MM-DD HH:mm:ss')

    todos.value.unshift({ tid: uuidv4().slice(0, 8), status: TodoStatus.UnSelected, content: content.value, time })
    content.value = ''
    console.log(todos.value)
}

const toggleTheme = () => {
    isDark.value = !isDark.value
}

const selectedTodo = (tid: string, isChecked: boolean) => {
    if (isChecked) {
        const index = findCurrentTodo(tid)
        todos.value[index]!.status = TodoStatus.Selected
        return
    }
}

const editTodo = (tid: string) => {
    console.log('EditTodo', tid)
    const index = findCurrentTodo(tid)
    currentTodoContent.value = todos.value[index]?.content ?? 'Null'

    tDialog.value.onClick('editTodo', index)
}

const confirmModifiedTodo = (index: number) => {
    todos.value[index]!.content = currentTodoContent.value
    MessagePlugin.success({ content: '修改成功', placement: 'top-right', offset: [0, 40] })
}

const deleteTodo = (tid: string) => {
    console.log('DeleteTodo', tid)
    const index = findCurrentTodo(tid)
    todos.value[index]!.status = TodoStatus.Deleted

    MessagePlugin.success({ content: '删除成功', placement: 'top-right', offset: [0, 40] })
}

const replaceWallpaper = (key: number, wid: string) => {
    const keys = Object.keys(store.wallpaperList)
    const wallpapers = store.wallpaperList[keys[key as number] as string]?.filter(item => item.wid === wid)
    console.log('wid', key, wid)

    wallpaper.value = wallpapers?.[0]?.path as string
    console.log(wallpaper.value)
}

const clearCache = () => {
    localStorage.clear()
    location.reload()
}

const openSetting = () => {
    tDrawer.value.handleClick()
}

// Computed
const themeMode = computed(() => isDark.value ? 'Moon' : 'Sun')

// 状态Todo ( 无顺序 )
const unSelectedTodos = computed(() => todos.value.filter(item => item.status === TodoStatus.UnSelected))
const selectedTodos = computed(() => todos.value.filter(item => item.status === TodoStatus.Selected))
const deletedTodos = computed(() => todos.value.filter(item => item.status === TodoStatus.Deleted))

// Life Circle
onMounted(() => {
    console.log(dropdownData)
})
</script>

<template>
    <div class="main box-border flex justify-center p-5 w-screen h-screen">
        <div class="flex flex-col items-center w-[80%]">
            <!-- Tools -->
            <div class="tools box-border flex justify-end items-center space-x-10 mb-3 w-screen h-10">
                <Dropdown :data="dropdownData" @replaceWallpaper="replaceWallpaper">
                    <Icon name="Picture" :size="iconSize" class="hover:cursor-pointer" />
                </Dropdown>
                <Icon :name="themeMode" :size="iconSize" @click="toggleTheme" class="hover:cursor-pointer" />
                <!-- <Icon name="Layout" :size="iconSize" class="hover:cursor-pointer" /> -->
                <!-- <Icon name="Theme" :size="iconSize" class="hover:cursor-pointer" /> -->
                <!-- <Icon name="Plan" :size="iconSize" class="hover:cursor-pointer" /> -->
                <Icon name="Reset" :size="iconSize" class="hover:cursor-pointer" @click="clearCache" />
                <Icon name="Config" :size="iconSize" class="hover:cursor-pointer" @click="openSetting" />
                <div class="ml-15"></div>
            </div>
            <!-- Title -->
            <div class="flex text-5xl font-bold tracking-wider">
                <h1 :style="{ color: store.currentColor }">Todo</h1>
                <span class="text-black dark:text-white">List</span>
            </div>
            <!-- Input -->
            <input type="text" v-model.trim="content"
                class="pt-5 pb-2 w-1/3 border-b-2 outline-0 border-black dark:border-white" @keydown.enter="writeTodo">
            <!-- Todos -->
            <div class="todos overflow-y-scroll space-y-4 my-7.5 w-1/3 h-80">
                <Todo v-for="item in unSelectedTodos" :key="item.tid" :data="item" @selectedTodo="selectedTodo"
                    @editTodo="editTodo"></Todo>
            </div>
            <!-- Area -->
            <div class="area grid grid-cols-3 gap-5 w-4/5">
                <!-- Card -->
                <Partition name="已完成" :line-color="Colors.Green" :count="selectedTodos.length">
                    <Todo v-for="item in selectedTodos" :key="item.tid" :data="item" @deleteTodo="deleteTodo"></Todo>
                </Partition>
                <Partition name="已删除" :line-color="Colors.Red" :count="deletedTodos.length">
                    <Todo v-for="item in deletedTodos" :key="item.tid" :data="item"></Todo>
                </Partition>
                <Partition name="备忘录" :line-color="Colors.Yellow">
                    <div class="paper w-full h-full">
                        <textarea class="box-border p-2 w-full h-full border-0 outline-0 bg-[#f8f4f1] resize-none"
                            v-model="memoContent" />
                    </div>
                </Partition>
            </div>
        </div>
    </div>

    <Dialog ref="tDialog" title="编辑Todo" @confirmModifiedTodo="confirmModifiedTodo">
        <Textarea v-model="currentTodoContent" placeholder="Todo内容" name="description"
            :autosize="{ minRows: 8, maxRows: 14 }" />
    </Dialog>

    <Drawer ref="tDrawer" />
    <BgBoard v-if="store.showDesktopPets" />
</template>

<style scoped>
.main {
    position: relative;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        background: v-bind('`url("${wallpaper}")`') no-repeat center center;
        background-size: cover;
        z-index: -1;
        opacity: v-bind('`${store.bgOpacity.toFixed(1)}`');
    }
}

.todos::-webkit-scrollbar {
    width: 8px;
}

.todos::-webkit-scrollbar-track {
    background: transparent;
}

.todos::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}
</style>