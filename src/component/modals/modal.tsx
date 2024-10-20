import { ReactNode } from "react";

export default function Modal(props: {children: ReactNode, closeModal: () => void}) {

    const { children, closeModal } = props;

    return (
        <div className="modal fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]">
            <section className="modal-container fixed w-2/5 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="modal-close bg-red-400 w-6 h-6 text-center fixed -right-2 -top-2 cursor-pointer rounded-md" onClick={() => closeModal()}>&times;</div>
                {children}
            </section>
        </div>
    )
}