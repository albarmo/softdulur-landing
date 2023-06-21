import { services } from "./service"

type SubNavigation = {
    title: string,
    path?: string
}
type Navigation = {
    title: string,
    path: string
    subPath?: SubNavigation[]
}


export const DesktopNavigation: Navigation[] = [
    { title: "Portofolio", path: '/portofolio', subPath: [] },
    { title: "Layanan", path: '/service', subPath: services },
    { title: "Hubungi Kami", path: '/contact', subPath: [] }
]

export const footerNavigation: Navigation[] = [
    { title: "About", path: '/about'},
    { title: "Privacy Policy", path: '/privacy-and-policy' },
    { title: "Find Us", path: '/find-us' },
]