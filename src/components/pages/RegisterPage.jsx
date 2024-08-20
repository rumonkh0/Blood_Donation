import { useEffect, useState } from "react";
import "../../assets/img/correct.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import divisionData from "../../assets/division";

const RegisterPage = () => {
  // console.log(divisionData[0].district[0].district);

  const [divisionIdx, setDivisionIdx] = useState(-1);
  const [districtIdx, setDistrictIdx] = useState(-1);
  const [formData, setFormData] = useState({
    FastName: "",
    email: "",
    gender: "",
    bloodGroup: "",
    lastDonate: Date.now(),
    birth: Date.now(),
    division: "",
    district: "",
    upazilla: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" 	">
      {/* flex items-center justify-center min-h-screen bg-gray-100 */}
      <div className=" bg-white p-8 rounded-lg shadow-md ">
        {/* max-w-md w-full */}
        <div
          className="bg-gradient-to-l"
          style={{
            background:
              "linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%)",
            background:
              "-moz-linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%)",
            background:
              "-webkit-linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%)",
            filter:
              'progid:DXImageTransform.Microsoft.gradient(startColorstr="#46052d", endColorstr="#b32346", GradientType=1)',
          }}
        >
          {/* <!-- Your content here --> */}
          <h2 className=" text-white	py-[60px] font-roboto	 text-4xl font-medium mb-6 text-center">
            Register As Donor
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-24">
            <div>
              <label
                className="text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                htmlFor=""
              >
                Fast Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
                required
              />
            </div>

            <div>
              <label
                className="text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                htmlFor=""
              >
                Last Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div>
              <label
                className=" text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                htmlFor=""
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
                required
              />
            </div>

            <div>
              <label
                className="text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                htmlFor=""
              >
                Mobile Number:
              </label>
              <input
                type="text"
                id="number"
                name="number"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300  rounded-md focus:outline-none  "
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div className="mb-4">
              <label className=" text-sm font-medium font-roboto text-[#4D4D4D] text-left">
                Blood Group:
              </label>
              <select
                id="blood-group"
                name="bloodGroup"
                onChange={handleChange}
                className="mt-1  w-full py-2 px-3 border bg-white border-gray-300  rounded-md shadow-sm focus:outline-none  sm:text-sm"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div></div>
          </div>

          <div className="mb-4">
            <label className=" text-sm font-medium font-roboto text-[#4D4D4D] text-left">
              Gender:
            </label>
            <div className="mt-2 flex items-center">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="form-radio h-4 w-4  border-gray-300 "
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="form-radio h-4 w-4  border-gray-300 "
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={handleChange}
                  className="form-radio h-4 w-4 border-gray-300 "
                />
                <span className="ml-2 text-gray-700">Other</span>
              </label>
            </div>
          </div>
          <div className="">
            <label
              className=" text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
              htmlFor=""
            >
              Date Of Birth:
            </label>
            <DatePicker
              className="w-full px-3 py-2 mb-4 ms-4 border border-gray-300 rounded-md focus:outline-none  "
              selected={formData.birth}
              //   onSelect={handleDateSelect}
              onChange={(date) => {
                setFormData({
                  ...formData,
                  birth: date,
                });
              }}
            />
          </div>

          <div>
            <label
              className=" text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
              htmlFor=""
            >
              Last Donate:
            </label>
            <DatePicker
              className="w-full px-3 py-2 mb-4 ms-4 border border-gray-300 rounded-md focus:outline-none  focus:border-red-500"
              selected={formData.lastDonate}
              //   onSelect={handleDateSelect}
              onChange={(date) => {
                setFormData({
                  ...formData,
                  lastDonate: date,
                });
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div className="mb-4">
              <label className=" text-sm font-medium font-roboto text-[#4D4D4D] text-left">
                Division:
              </label>
              <select
                id="division"
                name="division"
                value={formData.division}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    division: e.target.value,
                    district: "",
                    upazilla: "",
                  });
                  setDistrictIdx(-1);
                  setDivisionIdx(e.target.selectedIndex - 1);
                }}
                className="mt-1  w-full py-2 px-3 border bg-white border-gray-300  rounded-md shadow-sm focus:outline-none  sm:text-sm"
              >
                <option value={""}>Please select a division</option>
                {divisionData.map((division, index) => (
                  <option value={division.division} key={index}>
                    {division.division}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium font-roboto text-[#4D4D4D] text-left">
                District:
              </label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={(e) => {
                  // handleChange(e);
                  setFormData({
                    ...formData,
                    district: e.target.value,
                    upazilla: "",
                  });
                  setDistrictIdx(e.target.selectedIndex - 1);
                }}
                className="mt-1 bg-white  w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none  sm:text-sm"
              >
                {divisionIdx == -1 ? (
                  <option value={""}>Please select a division first</option>
                ) : (
                  <option value={""}>Please select a district</option>
                )}

                {divisionIdx !== -1 &&
                  divisionData[divisionIdx].district.map((district, index) => (
                    <option value={district.district} key={index}>
                      {district.district}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div className="mb-4">
              <label className="text-sm font-medium font-roboto text-[#4D4D4D] text-left">
                Upazilla:
              </label>
              <select
                id="upazilla"
                name="upazilla"
                value={formData.upazilla}
                onChange={handleChange}
                className="mt-1  bg-white w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none  sm:text-sm"
              >
                {districtIdx !== -1 ? (
                  <option value={""}>Please select an upazilla</option>
                ) : (
                  <option value={""}>Please select a District first</option>
                )}
                {districtIdx !== -1 &&
                  divisionData[divisionIdx].district[districtIdx].upazilla.map(
                    (upazilla, index) => (
                      // eslint-disable-next-line react/jsx-key
                      <option value={upazilla} key={index} ind={index}>
                        {upazilla}
                      </option>
                    )
                  )}
              </select>
            </div>

            <div></div>
          </div>

          <div className="mt-6 text-right">
            <button
              type="submit"
              className=" border drop-shadow-lg px-12 py-3 font-roboto  text-black font-bold text-sm rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
