import { Link } from "react-router-dom";

const DoctorDetails = (props) => {
  const { docterDetails } = props;
  const { id, name, specialization, availability, image } = docterDetails;

  return (
    <Link
      className="bg-[#ffffff] flex flex-row w-[350px] h-[100px] justify-around items-center border-[2px] border-grey-800 rounded-[9px] m-[6px] cursor-pointer
      sm:h-[100px] 
      md:h-[120px]
      lg:h-[130px]
      lg:transition-transform lg:hover:scale-105 lg:hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out"
      to={`doctor-info/${id}`}
    >
      <img
        src={image}
        alt="User"
        className=" rounded-[25%] rounded-tr-none rounded-bl-none
         sm: h-[80%] w-[70px]
         md: w-[80px]
         lg: w-[100px]"
      />
      <div
        className="items-center w-[150px] flex-wrap
      sm: w-[55%]"
      >
        <h1
          className="text-[22px] san-font font-oblique text-[#1F2937] 
        sm:text-[15px]
        md:text-[18px]"
        >
          {name}
        </h1>
        <p className="text-[15px] san-font text-[#3AB4F2] sm:text-[12px]">
          {specialization}
        </p>
        <p
          className={`
            sm:text-[12px]
            text-[15px] san-font >  ${
              availability === "Available Today"
                ? "text-green-500"
                : availability === "On Leave"
                ? "text-red-500"
                : availability === "Fully Booked"
                ? "text-yellow-500"
                : "text-gray-500"
            }
          
          `}
        >
          {availability}
        </p>
      </div>
    </Link>
  );
};
export default DoctorDetails;
