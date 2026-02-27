import { defineStore } from "pinia";
import { wallpaperList } from "../config/wallpaper";
import { bgBoardList } from "../config/bgBoard";
import { themeColorList } from "../config/colors";
import { effectList } from '../config/effect'
import type { bgBoardListItem } from '../config/bgBoard'
import type { ThemeColor } from '../config/colors'
import type { Wallpaper } from '../config/wallpaper'
import type { effectListItem } from '../config/effect'

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

// Interface
interface TodoStore {
    wallpaperList: Record<string, Array<Wallpaper>>
    bgBoardList: bgBoardListItem[]
    themeColorList: ThemeColor[]
    effectList: effectListItem[]
    todos: Array<Todo>
    wallpaper: string
    memoContent: string
    currentBgBoardIndex: number
    currentColor: string
    bgBoardX: number
    bgBoardY: number
    bgOpacity: number
    showDesktopPets: boolean
}

export const TStore = defineStore<string, TodoStore>('_TStore', {
    state() {
        return {
            wallpaperList,
            bgBoardList,
            themeColorList,
            effectList,
            todos: [],
            wallpaper: '',
            memoContent: '',
            // 顺序Todo
            // finishTodos: [],
            // DeletedTodos: [],
            currentBgBoardIndex: 0,
            currentColor: '#50a2ff',
            bgBoardX: 36,
            bgBoardY: 0,
            bgOpacity: .8,
            showDesktopPets: false
        }
    },
    getters: {

    },
    actions: {

    },
    persist: true // 开启数据持久化
})