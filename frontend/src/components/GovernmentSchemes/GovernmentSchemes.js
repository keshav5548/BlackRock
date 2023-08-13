import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function NewFormTemplate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    salary: "",
    occupation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.occupation === "farmer") {
      navigate("/farmer");
    }
    if (formData.occupation === "student") {
      navigate("/student");
    }
    if (formData.occupation === "labour") {
      navigate("/labour");
    }
    console.log("Form data submitted:", formData);
    // You can perform further actions with the form data here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h2 className="text-lg font-semibold mb-4">Survey Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="age" className="block font-medium">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block font-medium">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="salary" className="block font-medium">
              Salary:
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>
          <div>
            <label htmlFor="occupation" className="block font-medium">
              Occupation:
            </label>
            <select
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            >
              <option value="">Select Occupation</option>
              <option value="farmer">Farmer</option>
              <option value="student">Student</option>
              <option value="labour">Labour</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewFormTemplate;
