interface Props {
  img: string;
  title: string;
}
function SideMovie(props: Props) {
  return (
    <div className="transition duration-700 relative text-center mx-16 hidden xl:flex flex-col justify-center items-center max-w-[250px]">
      {/* <div className="absolute top-[-85px] p-5"> */}
      {/* <h2 className=" text-xl font-semibold my-2">{props.title}</h2> */}
      {/* </div> */}
      <img className="py-3 " src={props.img} alt={props.title} />
    </div>
  );
}
export default SideMovie;
