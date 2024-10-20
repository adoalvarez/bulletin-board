import BoardPost from "../component/BoardPost";
import Button from "../component/utils/Button";
import { useBoardContext } from "../store/BoardContext";


export default function BulletinBoard () {
    const { postData, setPostModal } = useBoardContext();

    const handleNewPost = () => {
        setPostModal(true);   
    }

    return (
        <div className="bboard-container w-full">
            <div className="bboard-header">
                <Button fnClick={handleNewPost} label={'New Post'} classname={""} />
            </div>
            <div className="bboard-content mt-2 px-4 py-5 border border-[#A66E38] rounded-xl w-full bg-[#A66E38]">
                <h1 className="font-bold text-2xl">Bulletin Board</h1>
                <div className="bboard-container px-6 py-2 bg-white h-[60vh] mt-3 w-full overflow-auto">
                    <div className="flex flex-wrap">
                        {postData.map( (data, idx) => (<BoardPost key={idx} data={data} index={idx}/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}