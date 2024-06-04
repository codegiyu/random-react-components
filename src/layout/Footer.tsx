export const Footer = () => {
  return (
    <footer className="flex justify-between container-128 items-baseline py-2 bg-darkBg">
      <a href="https://portfolio-codegiyu.vercel.app" className="">
        <p className="text-white text-[20px] font-semibold font-lobster">
          <span className="text-[32px]">C</span>
          ode
          <span className="text-rouge">giyu</span>
        </p>
      </a>
      <div className="">
        <p className="text-ash">Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
