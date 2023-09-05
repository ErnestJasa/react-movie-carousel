import Modal from "../modal/Modal";
import { useState } from "react";

interface Props {
  title: string;
  img: string;
  description: string;
  clickable: boolean;
}

function Movie(props: Props) {
  const [openModal, setOpenModal] = useState(false);
  // const [clickable, setClickable] = useState(props.clickable);

  return (
    <>
      <div className="text-center w-[350px] xl:w-[450px] p-5 mx-5 xl:mx-[-26px] flex-col justify-center items-center flex">
        <Modal
          img={props.img}
          title={props.title}
          description={props.description}
          onClose={() => setOpenModal(false)}
          open={openModal}
        />
        {/* <div className="text-center mx-16 opacity-100 hidden xl:flex flex-col justify-center items-center max-w-[450px] transition transform duration-200 translate-x-10 "> */}
        <h2 className=" text-2xl font-semibold my-2">{props.title}</h2>
        {props.clickable ? (
          <img
            onClick={() => setOpenModal(true)}
            className="py-3 cursor-pointer"
            src={props.img}
            alt={props.title}
          />
        ) : (
          <img className="py-3" src={props.img} alt={props.title} />
        )}
      </div>
    </>
  );
}
export default Movie;
