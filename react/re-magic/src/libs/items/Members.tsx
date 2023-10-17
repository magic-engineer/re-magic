type Members = {
    actors: {
        name: string,
        phonetic: string,
    }[],
    staffs: {
         name: string,
        phonetic: string,
    }[],
}

export const members: Members = {
    actors: [
        {
            name: "瀧澤龍太郎",
            phonetic: "たきざわりゅうたろう",
        },
        {
            name: "磯部英智香",
            phonetic: "いそべえちか",
        },
        {
            name: "久世圭太朗",
            phonetic: "くぜけいたろう",
        },
        {
            name: "五味悠介",
            phonetic: "ごみゆうすけ",
        },
        {
            name: "福室幸長",
            phonetic: "ふくむろゆきなが",
        },
        {
            name: "吉永悠人",
            phonetic: "よしながゆうと",
        },
        {
            name: "若林良介",
            phonetic: "わかばやしりょうすけ",
        },
        {
            name: "川口公尚",
            phonetic: "かわぐち"
        }
    ],
    staffs: [
        {
            name: "古謝勝將",
            phonetic: "こしゃかつまさ",
        },
        {
            name: "中屋駿介",
            phonetic: "なかやしゅんすけ",
        },
        {
            name: "野々村史城",
            phonetic: "ののむら",
        },
    ]
}