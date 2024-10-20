import { useState } from "react";
import { useBoardContext } from "../../store/BoardContext";
import { PostDataType } from "../../types/types";
import Button from "../utils/Button";
import Input from "../utils/TextInput";
import Modal from "./modal";

export default function PostModal() {
    const { savePost, setPostModal } = useBoardContext();

    const [inputs, setInputs] = useState<PostDataType>({
        author: '',
        message: '',
    })

    const handleClick = () => {
        savePost(inputs);
    }   

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name] : value
        })
    }
     
    return (
        <Modal closeModal={() => setPostModal(false)}>
            <div className="modal-content bg-[#FFAD60] rounded-lg px-6 py-2">
                <div className="modal-header px-2 py-2 border-b border-gray-300" >
                    <h3 className="font-semibold text-lg uppercase">New Post</h3>
                </div>
                <div className="modal-body w-full border-b border-gray-300 py-2">
                    <Input label="Author" fnChange={handleInput} value={inputs.author} name="author" />
                    <Input label="Message" fnChange={handleInput} value={inputs.message} name="message" isTextArea={true} />
                </div>
                <div className="modal-controls flex items-center">
                    <Button fnClick={handleClick} label="Save" classname="mx-auto mt-2" />
                </div>
            </div>
        </Modal>
    )
}