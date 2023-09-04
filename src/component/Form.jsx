import React from "react";

const Form = () => {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-2/3 h-1/2 "
            src="logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Customized SOP Generator
          </h2>
          <p className="m-2 p-2 text-lg leading-8 text-gray-600">
            Fill this questionnaire for the student. After submitting, you will
            receive an email at the email address that you have provided with a
            Statement of Purpose customized for you. You can use and modify that
            as per your needs.
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block m-1 p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="fullname"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block m-1 p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="age"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  Age
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="text"
                  autoComplete="current-age"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="edu"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  Highest level of Education
                </label>
              </div>
              <div className="mt-2">
                <select
                  id="edu"
                  name="edu"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                >
                  <option disabled>Choose</option>
                  <option>Grade 12</option>
                  <option>Diploma</option>
                  <option>Bachelors Degree</option>
                  <option>Masters Degree</option>
                  <option>PhD</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="fullname"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  Institute where you completed your highest level of education
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="fullname"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  What did you study
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="work_exp"
                  className="block m-1.5  text-sm font-medium leading-6 text-gray-900"
                >
                  Do you have any relevant work experience?
                </label>
              </div>
              <div>
                <div className="m-2 p-2">
                  <p>
                    {" "}
                    Write None if no work experience. Provide the following
                    details if yes:{" "}
                  </p>
                  <ol className="list-style m-2 p-2">
                    <li>Job Title </li>
                    <li>Company Name</li>
                    <li>Job duties</li>
                  </ol>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Sample Answer: I worked as a Sales Manager at Effizient
                    Immigration Inc from Jan 2022 till Feb 2023. In this role, I
                    managed sales operations, reaching out to leads, lead the
                    outreach program, ensured meeting monthly targets.
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <textarea
                  id="work_exp"
                  name="work_exp"
                  rows={3}
                  className="block m-1 p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="admission"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  What institute did you get admitted to in Canada?
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="admission"
                  name="admission"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="program"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  What is your program of study in Canada?
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="program"
                  name="program"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="country"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  Which country are you applying from?
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="country"
                  name="country"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="goals"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  What are your future goals?
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="goals"
                  name="goals"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block m-1.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="listening_score"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  English Scores - Listening
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="listening_score"
                  name="score1"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="reading_score"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  English Scores - Reading
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="reading_score"
                  name="score2"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="speaking_score"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  English Scores - Speaking
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="speaking_score"
                  name="score3"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="writing_score"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  English Scores - Writing
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="writing_score"
                  name="score4"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <fieldset required>
                <legend className="text-sm m-1.5 font-semibold leading-6 text-gray-900">
                  Did you pay your first year tuition?
                </legend>

                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="yes"
                      name="tuition"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="yes"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="no"
                      name="tuition"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="no"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="payment"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  How much tuition fee did you pay?
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="payment"
                  name="payment"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <fieldset required>
              <legend className="text-sm m-1.5 font-semibold leading-6 text-gray-900">
                Did you do a GIC?
              </legend>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="yes"
                    name="gic"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="yes"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="no"
                    name="gic"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="no"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    No
                  </label>
                </div>
              </div>
            </fieldset>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="gic_payment"
                  className="block m-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  How much did you pay towards GIC?
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="gic_payment"
                  name="gic_payment"
                  type="text"
                  autoComplete="current-fullname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Clear Form
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
