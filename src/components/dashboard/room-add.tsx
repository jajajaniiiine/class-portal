import ClassroomApi from "@/api/classroom-api";
import React, { useState } from "react";

interface FormData {
  classroomName: string;
  profAssigned: string;
  students: Array<string>;
}

export default function RoomAdd() {
  const [formData, setFormData] = useState<FormData>({
    classroomName: "",
    profAssigned: "",
    students: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  };

  const saveAsDraft = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("saveAsDraft =>", formData)
    const values = {
      ...formData,
      type: "draft",
    }
    await ClassroomApi.AddNewClassroom(values);
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const values = {
      ...formData,
      type: "published",
    }
    await ClassroomApi.AddNewClassroom(values)
  };

  return (
    <form className="bg-white p-5 drop-shadow-md" autoComplete="off" noValidate onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label className="text-left block text-sm font-medium leading-6 text-gray-900">
                Classroom Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="classroomName"
                  id="classroomName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label className="text-left block text-sm font-medium leading-6 text-gray-900">
                Professor Assigned
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="profAssigned"
                  id="profAssigned"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label className="text-left block text-sm font-medium leading-6 text-gray-900">
                Add students
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="students"
                  id="students"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="reset"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={saveAsDraft}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save as Draft
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Publish
        </button>
      </div>
    </form>
  );
}
