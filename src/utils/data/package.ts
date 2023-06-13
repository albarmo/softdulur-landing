export type Package = {
    id: number
    title: string
    desctiption?: string
    price: number,
    illustration: string
    active: boolean
}

export const packages: Package[] = [
    { id: 1, title: "Landing Pack", price: 1500000, active: true, illustration: "/website.svg" },
    { id: 2, title: "Profile Pack", price: 3500000, active: true, illustration: "/desktop.svg" },
    { id: 3, title: "E Commerece Pack", price: 5000000, active: true, illustration: "/mobile.svg" },
]