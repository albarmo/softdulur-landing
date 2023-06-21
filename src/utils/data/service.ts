export type Service = {
    id: number
    title: string
    desctiption?: string
    illustration: string
    active: boolean
    path: string
}

export const services: Service[] = [
    { id: 1, title: "Website Development", active: true, illustration: "/website.svg", path: '/web-dev' },
    { id: 2, title: "Revamp Application", active: true, illustration: "/desktop.svg", path: '/revamp' },
    { id: 3, title: "Mobile Application", active: true, illustration: "/mobile.svg", path: '/mobile-dev' },
    { id: 4, title: "MVP Development", active: true, illustration: "/website.svg", path: '/mvp-dev' },
]