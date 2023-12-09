import remagicPoster from "@/assets/posters/remagic-poster.png"
import remagic2Poster from "@/assets/posters/remagic2-poster.png"

export const ProductionInfo = {
    "stage-date": "2024/02/03",
    "open-datetime": "2024/02/03 18:00",
    "start-datetime": "2024/02/03 18:30",
    "end-datetime": "2024/02/03 20:00",
    location: "牛込箪笥区民ホール",
    googleMapURL: "https://maps.app.goo.gl/tNQ4tn8rdaRcy8cd8",
    reservationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfw16JIDMfJ7zSoYXJT-eSwMX2bAcVmBqDXQmyoz50nWZyHYQ/viewform?usp=sf_link",
}



type Production = {
    name: string
    link: string
    thumbnail: string
    date: string
}
export const productions: Production[] = [
    {
        name: "第一回 Re: magic",
        link: "/20161010.html",
        thumbnail: remagicPoster,
        date: "2016/10/10"
    },
    {
        name: "第二回 Re: magic",
        link: "/20180107.html",
        thumbnail: remagic2Poster,
        date: "2018/01/07",
    },
]