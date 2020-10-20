import React from 'react'

const { Consumer, Provider } = React.createContext()
//in order to create a new context we will use react.createContext,
//that's going to reeturn us an objec that has 2 properties on it.

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider