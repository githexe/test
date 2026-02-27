import { v4 as uuidv4 } from "uuid"

let index = -1

export type Wallpaper = {
    tid?: number,
    wid?: string,
    name: string,
    path: string
}

const data: Record<string, Array<Wallpaper>> = {
    '明日方舟': [
        {
            name: '风雪过境',
            path: 'https://img.cdn1.vip/i/69a1305bbf09c_1772171355.webp'
        },
        {
            name: '长夜临光',
            path: 'https://img.cdn1.vip/i/69a13067499fd_1772171367.webp'
        },
        {
            name: '沃伦姆德的薄暮',
            path: 'https://img.cdn1.vip/i/69a13077ce4d1_1772171383.webp'
        },
        {
            name: '骑兵与猎人',
            path: 'https://img.cdn1.vip/i/69a1305acd204_1772171354.webp'
        },
        {
            name: '火蓝之心',
            path: 'https://img.cdn1.vip/i/69a1305ef411f_1772171358.webp'
        }
    ],
    '蔚蓝档案': [
        {
            name: '砂狼白子',
            path: 'https://img.cdn1.vip/i/699ff6c6c8fbf_1772091078.webp'
        },
        {
            name: '空崎日奈',
            path: 'https://img.cdn1.vip/i/699ff6c9438a5_1772091081.webp'
        },
        {
            name: '圣园未花',
            path: 'https://img.cdn1.vip/i/699ff6bf6bcc1_1772091071.webp'
        },
        {
            name: '早濑优香',
            path: 'https://img.cdn1.vip/i/699ff75d00e60_1772091229.webp'
        },
        {
            name: '一周年',
            path: 'https://img.cdn1.vip/i/699ff8c7e7d40_1772091591.webp'
        },
        {
            name: 'Uni',
            path: 'https://img.cdn1.vip/i/69797ef24ce62_1769570034.webp'
        }
    ],
    '卡拉比丘': [
        {
            name: '星绘',
            path: 'https://img.cdn1.vip/i/699fe1ff1abb2_1772085759.webp'
        },
        {
            name: '米雪儿李',
            path: 'https://img.cdn1.vip/i/699fe1c564cac_1772085701.webp'
        },
        {
            name: '香奈美',
            path: 'https://img.cdn1.vip/i/699fe1582097d_1772085592.webp'
        },
        {
            name: '浪潮翻涌之间',
            path: 'https://img.cdn1.vip/i/699fe359a9ea2_1772086105.webp'
        },
        {
            name: '与汐相纪',
            path: 'https://img.cdn1.vip/i/699fe1f7b7e47_1772085751.webp'
        },
        {
            name: '同沐春风共此时',
            path: 'https://img.cdn1.vip/i/699fe1ccadd58_1772085708.webp'
        }
    ]
}

for (const key in data) {
    index++
    data[key] = data[key]?.map(item => {
        return {
            tid: index,
            wid: uuidv4().slice(0, 4),
            ...item
        }
    })
}

export const wallpaperList: Record<string, Array<Wallpaper>> = data

