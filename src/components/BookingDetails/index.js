import { Component } from "react";

import ConfirmComponent from "../ConfirmComponent";

class BookingDetails extends Component {
  state = { email: "", name: "", error: "", showConformation: false };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email } = this.state;

    if (!name.trim() || !email.trim()) {
      this.setState({ error: "*Please fill in all required fields" });
    } else if (email.trim() !== "" && !email.includes("@")) {
      this.setState({
        showConformation: false,
        error: "*Please enter a valid Email",
      });
    } else {
      this.setState({ error: "", showConformation: true });
    }
  };

  render() {
    const { name, email, showConformation } = this.state;
    return (
      <div className="h-screen flex flex-col justify-center items-center p-[25px]">
        <div className="font-oblique text-[50px] san-font flex flex-row justify-center font-bold">
          <h1 className="text-[#1F2937] sm:text-[25px] md:text-[30px]">
            <span className="text-[#3AB4F2]">Doc</span>Connect
          </h1>
        </div>
        <div
          className=" h-[780px] w-full flex flex-row justify-center items-center p-[25px] bg-[linear-gradient(259deg,_rgba(238,174,233,1)_0%,_rgba(148,187,233,1)_100%)]
        rounded-[30px]"
        >
          {!showConformation ? (
            <form
              className="bg-white rounded-[5px] sm:w-[90%] md:w-[60%] lg:w-[30%]"
              onSubmit={this.handleSubmit}
            >
              <div className="flex flex-col justify-center p-[15px]">
                <label className=" sm:text-[12px] text-[#475569] font-bold">
                  Name
                </label>
                <input
                  className=" sm:h-[25px] text-[12px]
                  h-[35px] rounded-[2px] bg-[#e2e8f0]  p-[15px]"
                  type="text"
                  value={name}
                  onChange={this.onChangeName}
                  placeholder="Required"
                />
              </div>
              <div className="flex flex-col p-[15px]">
                <label
                  className="sm:text-[12px]
                text-[#475569] font-bold"
                >
                  Email
                </label>
                <input
                  className="sm:h-[25px] text-[12px] 
                  h-[35px] rounded-[2px] bg-[#e2e8f0] p-[15px]"
                  type="text"
                  value={email}
                  onChange={this.onChangeEmail}
                  placeholder="Required"
                />
              </div>
              <div className="flex flex-col p-[15px]">
                <label
                  className="sm:text-[12px]
                text-[#475569] font-bold"
                >
                  Date / Time
                </label>
                <input
                  className="sm:h-[25px] 
                  h-[35px] rounded-[2px] bg-[#e2e8f0]  p-[15px] text-[15px]"
                  type="datetime-local"
                  defaultValue={new Date(
                    Date.now() - new Date().getTimezoneOffset() * 60000
                  )
                    .toISOString()
                    .slice(0, 16)}
                />
              </div>
              <div className="flex justify-center mb-[15px] p-[15px]">
                <button
                  className=" sm:text-[18px] h-[35px] 
                  san-font  bg-[#4D9EFA] text-[25px] text-[#ffffff] h-[48px] w-full rounded-[5px]"
                  type="submit"
                >
                  Confirm
                </button>
              </div>

              {this.state.error && (
                <p className="text-red-500 text-sm m-[15px] san-font font-bold">
                  {this.state.error}
                </p>
              )}
            </form>
          ) : (
            <ConfirmComponent />
          )}
        </div>
      </div>
    );
  }
}

export default BookingDetails;
