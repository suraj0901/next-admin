import { useSyncExternalStore } from "react"

type NewState<T> = Partial<T> | ((prev:T) => void)   
// type SelectState<T> = ((state:T) => ([Partial<T>] | Partial<T>|T)) 


const createStore = <T>(initialState:T) => {
    const subscribers = new Set<() => void>()

    const get = () => initialState
    const set = (newState:NewState<T>) => {

        if(typeof newState === "function") {
            initialState = structuredClone(initialState)
            newState(initialState)
        }
        else {
            initialState = {...initialState, ...newState}
        }
        subscribers.forEach(callback => callback())
    }
    const subscribe = (callback: () => void) => {
        subscribers.add(callback)
        return () => subscribers.delete(callback)
    }   
    const useStore = <SelectOutput>(selectState:(state:T) => (SelectOutput|T) = state => state):(SelectOutput|T) => {
        return useSyncExternalStore(subscribe, () => selectState(get()))
    }

    return {useStore, updateStore:set}
}

export default createStore