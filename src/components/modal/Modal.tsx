import "./modal.css";

import { motion } from "framer-motion";
interface Props {
  open: boolean;
  img: string;
  title: string;
  description: string;
  onClose(): void;
}
function Modal({ open, img, title, description, onClose }: Props) {
  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay z-50">
      <motion.div
        initial={{ scale: 0.5, x: -250, y: -300 }}
        animate={{ scale: 1, x: -250, y: -300 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={img} alt={title} className="modalImg" />
        <div className="modalRight">
          <button
            className=" text-black w-7 h-8 text-xl bg-slate-200  rounded-md   fixed top-2 right-2"
            onClick={onClose}
          >
            X
          </button>
          <div className="content">
            <h1 className="text-3xl mb-9 text-center">{title}</h1>

            <p>{description}</p>
          </div>
          {/* <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>, I love NFT's
            </button>
            <button className="btnOutline">
              <span className="bold">NO</span>, thanks
            </button>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}

export default Modal;
