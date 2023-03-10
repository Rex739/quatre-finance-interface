const BgVector = () => {
  return (
    <div className="hidden xl:block absolute top-0 h-full w-full z-0">
      <span
        className={[
          "bg-[#25B15F]/[0.15] backdrop-blur-[px] backdrop-saturate-[180%]",
          " h-60 w-52 absolute rounded-full shadow-[0px_0px_200px_210px]",
          "shadow-[#25B15F]/[0.15] top-32 left-0",
        ].join(" ")}
      ></span>
      <span
        className={[
          "bg-[#25B15F]/[0.15] backdrop-blur-[px] backdrop-saturate-[180%]",
          " h-60 w-52 absolute rounded-full shadow-[0px_0px_200px_210px]",
          "shadow-[#25B15F]/[0.15] right-[50%] top-80",
        ].join(" ")}
      ></span>
      <span
        className={[
          "bg-[#25B15F]/[0.15] backdrop-blur-[px] backdrop-saturate-[180%]",
          " h-60 w-52 absolute rounded-full shadow-[0px_0px_200px_210px]",
          "shadow-[#25B15F]/[0.15] top-32  right-0",
        ].join(" ")}
      ></span>
    </div>
  );
};

export default BgVector;
