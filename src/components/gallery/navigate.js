export function ArrowLeft(props) {
  return (
    <button onClick={props.onClick} className="h-10 w-10 rounded-lg text-white flex justify-center items-center bg-[#0E4236]">
      <img src="images/gallery/prev.svg" alt="previous button" />
    </button>
  );
}
export function ArrowRight(props) {
  return (
    <button onClick={props.onClick} className="h-10 w-10 rounded-lg text-white flex justify-center items-center bg-[#0E4236]">
      <img src="images/gallery/next.svg" alt="next button" />
    </button>
  );
}
