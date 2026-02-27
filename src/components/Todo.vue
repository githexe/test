<script setup lang="ts">
import { computed } from 'vue';
import { Checkbox as TCheckbox, Popconfirm as TPopconfirm } from 'tdesign-vue-next'
import Icon from './Icon.vue';

// Enum
const enum TodoStatus {
    UnSelected,
    Selected,
    Deleted
}

// Type
type Todo = {
    tid: string,
    status: TodoStatus,
    content: string,
    time: string
}

// Variable

// Emit
const emit = defineEmits<{
    (event: string, tid: string, isChecked: boolean): void
    (event: string, tid: string): void
    (event: string, tid: string): void
}>()

// Props
const props = defineProps<{
    data: Todo
}>()

// Method
const selectedCheckbox = (checked: boolean, context: { e: Event }) => {
    const todoStatus = checked ? TodoStatus.Selected : TodoStatus.UnSelected
    emit('selectedTodo', props.data.tid, checked)
}

const delTodo = (event: Event) => {
    emit('deleteTodo', props.data.tid)
}

const editTodo = () => {
    emit('editTodo', props.data.tid)
}

// Computed
const iconName = computed(() => {
    return props.data.status == TodoStatus.UnSelected ? 'Pencli' : 'Delete'
})

const isChecked = computed(() => {
    return props.data.status == TodoStatus.Selected ? true : false
})

const isDeleted = computed(() => {
    return props.data.status == TodoStatus.Deleted ? true : false
})

const statusStyle = computed(() => {
    const styles = props.data.status == TodoStatus.UnSelected ? 'w-1/2 text-center' : props.data.status == TodoStatus.Selected ? 'w-4/5 text-left indent-2.5' : 'w-full line-through'
    return [styles]
})
</script>

<template>
    <div class="flex justify-between items-center p-3 w-full bg-gray-200 rounded-md">
        <TCheckbox v-if="!isChecked && !isDeleted" :default-checked="isChecked" @change="selectedCheckbox"></TCheckbox>
        <div class="overflow-hidden whitespace-nowrap text-ellipsis" :class="statusStyle">{{ data.content }}
        </div>
        <div>
            <template v-if="!isChecked">
                <Icon v-if="!isDeleted" :name="iconName" :size="20" class="hover:cursor-pointer" @click="editTodo" />
            </template>

            <template v-else>
                <TPopconfirm content="确认删除吗" @confirm="delTodo">
                    <Icon :name="iconName" :size="20" class="hover:cursor-pointer" />
                </TPopconfirm>
            </template>
        </div>
    </div>
</template>

<style scoped></style>
