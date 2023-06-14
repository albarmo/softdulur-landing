export type Service = {
    id: number
    title: string
    desctiption?: string
    illustration:string
    active: boolean
}

export const services: Service[] = [
    { id: 2, title: "Revamp Application", active: true,illustration:"/desktop.svg" },
    { id: 3, title: "Mobile Application", active: true,illustration:"/mobile.svg" },
    { id: 4, title: "MVP Development", active: true ,illustration:"/website.svg"},
]