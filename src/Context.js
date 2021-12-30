import { createContext, useContext } from "react";

const MainContext = createContext()
const contextConsumer = MainContext.Consumer;


export {MainContext, useContext, contextConsumer}