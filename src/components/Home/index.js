import { Component } from "react";

import "./index.css";

import DoctorDetails from "../DoctorDetails";

const doctorInfo = [
  {
    id: 1,
    name: "Dr. Aisha Khan",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    availability: "Available Today",
  },
  {
    id: 2,
    name: "Dr. Samuel Patel",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    availability: "Fully Booked",
  },
  {
    id: 3,
    name: "Dr. Emily Garcia",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    availability: "On Leave",
  },
  {
    id: 4,
    name: "Dr. Rajesh Sharma",
    specialization: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    availability: "Available Today",
  },
  {
    id: 5,
    name: "Dr. Julia Roberts",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    availability: "Fully Booked",
  },
  {
    id: 6,
    name: "Dr. Ankit Mehta",
    specialization: "General Physician",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    availability: "On Leave",
  },
  {
    id: 7,
    name: "Dr. Priya Verma",
    specialization: "Dentist",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    availability: "Available Today",
  },
  {
    id: 8,
    name: "Dr. Michael Zhang",
    specialization: "Ophthalmologist",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    availability: "Fully Booked",
  },
  {
    id: 9,
    name: "Dr. Sofia Ahmed",
    specialization: "Gynecologist",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    availability: "Available Today",
  },
  {
    id: 10,
    name: "Dr. John Kim",
    specialization: "ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    availability: "On Leave",
  },
  {
    id: 11,
    name: "Dr. Kavita Rao",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    availability: "Available Today",
  },
  {
    id: 12,
    name: "Dr. Nikhil Bansal",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    availability: "Fully Booked",
  },
  {
    id: 13,
    name: "Dr. Linda Johnson",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    availability: "Available Today",
  },
  {
    id: 14,
    name: "Dr. Vivek Desai",
    specialization: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    availability: "On Leave",
  },
  {
    id: 15,
    name: "Dr. Neha Thomas",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    availability: "Fully Booked",
  },
  {
    id: 16,
    name: "Dr. Arjun Gupta",
    specialization: "General Physician",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    availability: "Available Today",
  },
  {
    id: 17,
    name: "Dr. Rachel Fernandes",
    specialization: "Dentist",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    availability: "On Leave",
  },
  {
    id: 18,
    name: "Dr. Hitesh Nayak",
    specialization: "Ophthalmologist",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    availability: "Fully Booked",
  },
  {
    id: 19,
    name: "Dr. Meera Chopra",
    specialization: "Gynecologist",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    availability: "Available Today",
  },
  {
    id: 20,
    name: "Dr. Steve Wong",
    specialization: "ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    availability: "Available Today",
  },
  {
    id: 21,
    name: "Dr. Zara Malik",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    availability: "Fully Booked",
  },
  {
    id: 22,
    name: "Dr. Ramesh Iyer",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    availability: "On Leave",
  },
  {
    id: 23,
    name: "Dr. Angela Smith",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    availability: "Available Today",
  },
  {
    id: 24,
    name: "Dr. Karan Sinha",
    specialization: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    availability: "Fully Booked",
  },
  {
    id: 25,
    name: "Dr. Tanya Reddy",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    availability: "Available Today",
  },
  {
    id: 26,
    name: "Dr. Mohit Arora",
    specialization: "General Physician",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    availability: "On Leave",
  },
  {
    id: 27,
    name: "Dr. Sneha Nair",
    specialization: "Dentist",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    availability: "Available Today",
  },
  {
    id: 28,
    name: "Dr. Kevin Das",
    specialization: "Ophthalmologist",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    availability: "Fully Booked",
  },
  {
    id: 29,
    name: "Dr. Sana Qureshi",
    specialization: "Gynecologist",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    availability: "Available Today",
  },
  {
    id: 30,
    name: "Dr. Ryan Paul",
    specialization: "ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    availability: "On Leave",
  },

  {
    id: 31,
    name: "Dr. Leena Kapoor",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    availability: "Available Today",
  },
  {
    id: 32,
    name: "Dr. Om Prakash",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    availability: "Fully Booked",
  },
  {
    id: 33,
    name: "Dr. Ashley Brown",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    availability: "On Leave",
  },
  {
    id: 34,
    name: "Dr. Rohit Singh",
    specialization: "General Physician",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    availability: "Available Today",
  },
  {
    id: 35,
    name: "Dr. Monica Das",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    availability: "Fully Booked",
  },
  {
    id: 36,
    name: "Dr. Amit Joshi",
    specialization: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    availability: "On Leave",
  },
  {
    id: 37,
    name: "Dr. Anjali Desai",
    specialization: "Dentist",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    availability: "Available Today",
  },
  {
    id: 38,
    name: "Dr. Rehan Khan",
    specialization: "Ophthalmologist",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    availability: "Fully Booked",
  },
  {
    id: 39,
    name: "Dr. Kavya Jain",
    specialization: "Gynecologist",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    availability: "Available Today",
  },
  {
    id: 40,
    name: "Dr. Dinesh Nair",
    specialization: "ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    availability: "On Leave",
  },
  {
    id: 41,
    name: "Dr. Isha Mehra",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    availability: "Available Today",
  },
  {
    id: 42,
    name: "Dr. Sunil Rathi",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    availability: "Fully Booked",
  },
  {
    id: 43,
    name: "Dr. Ritu Sinha",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    availability: "On Leave",
  },
  {
    id: 44,
    name: "Dr. Prakash Kulkarni",
    specialization: "General Physician",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    availability: "Available Today",
  },
  {
    id: 45,
    name: "Dr. Simran Kaul",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    availability: "Fully Booked",
  },
  {
    id: 46,
    name: "Dr. Nilesh Tiwari",
    specialization: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    availability: "Available Today",
  },
  {
    id: 47,
    name: "Dr. Fatima Shaikh",
    specialization: "Dentist",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    availability: "On Leave",
  },
  {
    id: 48,
    name: "Dr. Arvind Pillai",
    specialization: "Ophthalmologist",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    availability: "Available Today",
  },
  {
    id: 49,
    name: "Dr. Shruti Bhatt",
    specialization: "Gynecologist",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    availability: "Fully Booked",
  },
  {
    id: 50,
    name: "Dr. Suresh Menon",
    specialization: "ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    availability: "Available Today",
  },
];

class Home extends Component {
  state = {
    searchInput: "",
    usersDetailsList: doctorInfo,
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { searchInput, usersDetailsList } = this.state;
    const searchResults = usersDetailsList.filter((eachUser) =>
      eachUser.name.includes(searchInput)
    );
    return (
      <div
        className="h-full w-screen flex flex-col bg-[linear-gradient(to_bottom,_#FFFFFF,_#F0F9FF,_#F0FDF4,_#ccffff,_#e6ffee)]
      lg:min-h-screen"
      >
        <div className="font-oblique san-font flex flex-row justify-center font-bold">
          <h1
            className="text-[#1F2937] 
          sm:text-[25px]
          md:text-[30px]
          lg:text-[50px]"
          >
            <span className="text-[#3AB4F2]">Doc</span>Connect
          </h1>
        </div>
        <div className="sm:mb-[0px] p-[25px] ">
          <h1
            className="san-font font-oblique 
          sm:text-[18px]
          md:text-[25px]
          lg:text-[30px]"
          >
            Welcome to DocConnect
          </h1>
          <p
            className=" san-font
          sm:text-[13px] 
          md:text-[15px]
          lg:text-[25px]"
          >
            Finding the right doctor shouldn’t be hard. At DocConnect, we make
            it easy to connect with trusted, qualified medical professionals
            across specialties all in one place. Whether you need expert advice,
            a second opinion, or a routine checkup, you’re just a few clicks
            away from scheduling your next appointment with confidence.
          </p>
        </div>
        <div className="sm:mb-[10px]  flex flex-row justify-center items-center mb-[15px]">
          <input
            className="text-[#1F2937] outline-none p-[15px] san-font font-oblique border-[2px] 
            border-[#D1D5DB] rounded-[4px] m-[5px] focus:ring-2 focus:#3AB4F2 shadow-[0_4px_12px_rgba(0,0,0,0.1)]
            sm:h-[35px] w-[50%] text-[11px] m-[0px]
            md:h-[40px] w-[50%] text-[16px]
            lg:h-[55px] text-[20px]"
            type="text"
            placeholder="Search Your Docter"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>

        <div className="flex flex-row">
          <ul className="flex flex-row w-full justify-center items-center flex-wrap">
            {searchResults.map((eachItem) => (
              <DoctorDetails docterDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
