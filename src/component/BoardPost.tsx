import { useBoardContext } from "../store/BoardContext";
import { PostDataType } from "../types/types";
import EditImg from '../assets/edit-button.svg';


export default function BoardPost (props : { data: PostDataType, index: number }) {

    const { deletePost, setEditModal, setSelectedIndex  } = useBoardContext();

    const { data, index } = props;

    const handleClick = () => {
        setSelectedIndex(index)
        setEditModal(true)
    }

    return (
        <div className="w-1/3 p-1 relative">
            <div className="absolute right-2 flex flex-row items-center">
                <img src={EditImg} alt="edit-img" className="w-4 h-4 cursor-pointer" onClick={handleClick}/>
                <p className="cursor-pointer" onClick={() => deletePost(index)}>&times;</p>
            </div>
            
            <div className="flex flex-col border border-[#FFAD60] bg-[#FFAD60] min-h-40 px-3 py-2">
                <div className="font-semibold text-md break-words">
                    {data.author}
                </div>
                <div className="text-sm text-wrap break-all">
                    {data.message}
                </div>
            </div>
        </div>
    )
}