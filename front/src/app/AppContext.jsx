"use client"

import { createContext } from "react";
import { useRef } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const toast = useRef(null)
    const values = {
        value:"test",
        toast,
    }
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}