const HeadBar = () => {
  return (
    <div className="w-full hidden 3xl:block 2xl:block desktop:block laptop:block bg-[#4864EC]"> {/* Added bg-blue-500 class */}
      <div className="w-full overflow-hidden">
        <div className="flex justify-center">
          <div className="w-full">
            <p
              className="text-sm text-stone-50 font-semibold px-4 py-4 text-center"
            >
              The Web Application is under Development. You can try for demo use. Our Application will be fully functional very soon. Keep patience and stay with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBar;