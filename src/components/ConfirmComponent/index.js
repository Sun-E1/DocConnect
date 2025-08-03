const Confirmation = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-[55px] rounded-[10px]">
      <div className="bg-green-500 rounded-full p-4 m-[35px]">
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2
        className="sm:text-[15px] mb-[50px]
      text-green-800 text-xl font-semibold"
      >
        Appointment Booked Successfully!
      </h2>
    </div>
  );
};

export default Confirmation;
