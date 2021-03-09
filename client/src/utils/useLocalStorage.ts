import { useEffect, useState } from 'react'

export const useLocalStorage = (itemName: string) => {
    const [item, changeItem] = useState(null)

    const setItem = (value: any): void => {
        changeItem(value)
        localStorage.setItem(itemName, value)
    }

    useEffect(() => {
        const itemFromLocalStorage = localStorage.getItem(itemName)
        changeItem(itemFromLocalStorage)
    }, [])

    return [item, setItem]
}