import { useEffect, useState } from "react";
import { useBoardContext } from "../../store/BoardContext";
import Button from "../utils/Button";
import Input from "../utils/TextInput";
import Modal from "./modal";
import { PostDataType } from "../../types/types";

export default function EditModal() {

    const { setEditModal, postData, selectedIndex, editPost} = useBoardContext();
    const [inputs, setInputs] = useState<PostDataType>({
        author: '',
        message: '',
    })

    useEffect( () => {  
        if (selectedIndex != undefined) {
            setInputs({
                author: postData[selectedIndex].author,
                message: postData[selectedIndex].message,
            })
        }    
    }, [selectedIndex])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const handleClick = () => {
        editPost(inputs);
    }

    return (
        <Modal closeModal={() => setEditModal(false)} >
            <div className="modal-content bg-[#FFAD60] rounded-lg px-6 py-2">
                <div className="modal-header px-2 py-2 border-b border-gray-300" >
                    <h3 className="font-semibold text-lg uppercase">Edit Post</h3>
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