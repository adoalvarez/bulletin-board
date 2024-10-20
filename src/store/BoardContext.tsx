import { createContext, ReactNode, useContext, useState } from 'react';
import { BoardContextType, PostDataType } from '../types/types';

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export function BoardContextProvider ({ children } : { children: ReactNode }) {
    const [postData, setPostData] = useState<PostDataType[]>([]);
    const [editModal, setEditModal] = useState<boolean>(false);
    const [postModal, setPostModal] = useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const savePost = (data: PostDataType) => {
        if (!data.author || !data.message) {
            alert('Please insert Author & Message')
            return;
        } 
        setPostData([...postData, data]);
        setPostModal(false);
        
    }

    const deletePost = (idx: number) => {
        setPostData(postData.filter((data, i) => i !== idx))
    }

    const editPost = (input: PostDataType) => {
        if (!input.author || !input.message) {
            alert('Please insert Author & Message')
            return;
        } 
        setPostData(postData.map( (data, idx) => idx === selectedIndex ? input : data) )
        setEditModal(false);
    }

    return (
        <BoardContext.Provider value={{
            postData,
            setPostData,
            editModal,
            setEditModal,
            postModal,
            setPostModal,
            selectedIndex,
            setSelectedIndex,
            savePost,
            deletePost,
            editPost,
        }}>
            {children}
        </BoardContext.Provider>
    )
}

export function useBoardContext () {
    const board = useContext(BoardContext);

    if (board === undefined) {
        throw new Error("useBoardContext must be used with BoardContext")
    }

    return board;
}