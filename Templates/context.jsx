import React, { useState, createContext } from 'react';

const initContext = {};

export const Input = createContext(initContext);


export const InputProvider = ({ children })=> {
  return <Input.Provider value={Input}>{children}</Input.Provider>;
};
