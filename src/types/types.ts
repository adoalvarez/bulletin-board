export interface PostDataType {
    author: string,
    message: string,
}

export interface BoardContextType {
    postData: PostDataType[],
    setPostData: (post: PostDataType[]) => void,
    postModal: boolean,
    setPostModal: (isOpen: boolean) => void,
    editModal: boolean,
    setEditModal: (isOpen: boolean) => void,
    selectedIndex: number,
    setSelectedIndex: (idx: number) => void,
    savePost: (data: PostDataType) => void,
    editPost: (idx: PostDataType) => void,
    deletePost: (idx: number) => void,
}