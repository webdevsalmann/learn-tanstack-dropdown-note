"use client"
// DataContext.js
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [listName, setListName] = useState("List Name");
  const [listDatas, setListDatas] = useState([]);
  const [listId, setListId] = useState(1);

  const contextValues = {
    listId,
    setListId,
    listName,
    setListName,
    listDatas,
    setListDatas,
  };

  
  useEffect(() => {
    const setListNameByListId = (listId: number) => {
      const selectedList = listDatas.filter(list => list.id === listId)
      setListName(selectedList[0]?.name)
    }

    setListNameByListId(listId)
  }, [listDatas, listId]);

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
};

export default function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataContextProvider');
  }
  return context;
}
