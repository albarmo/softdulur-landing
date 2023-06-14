export type Portofolio = {
    id: number
    title: string
    desctiption?: string
    illustration:string
    active: boolean
}

export const portofolios: Portofolio[] = [
    { id: 1, title: "Portofolio 1", active: true,illustration:"/website.svg" },
    { id: 2, title: "Portofolio 2", active: true,illustration:"/website.svg" },
    { id: 3, title: "Portofolio 3", active: true,illustration:"/website.svg" },
]