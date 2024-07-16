import React from "react";
import logo from '../assets/logo.png'

const SignUp = () => {
    return(
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
                <div className="w-full flex-col justify-center items-center gap-4 flex">
                    <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">Sign up to an account</h2>
                    <p className="max-w-4xl text-center text-gray-500 text-base font-normal leading-relaxed"></p>
                </div>
                <div className="w-full flex-col justify-start items-start gap-6 flex">
                    <h4 className="text-gray-900 text-xl font-semibold leading-loose">Personal Details</h4>
                    <div className="w-full flex-col justify-start items-start gap-8 flex">
                        <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                            {/** First Name */}
                            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                                <label for="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">First Name
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
                                    </svg>
                                </label>
                                <input type="text" className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="John" />
                            </div>
                            {/** Last Name */}
                            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                                <label for="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Last Name
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
                                    </svg>
                                </label>
                                <input type="text" className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="Smith" />
                            </div>
                        </div>
                            {/** Phone Number*/}
                        <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                                <label for="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Phone Number
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
                                    </svg>
                                </label>
                                <input type="text" className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="028 2154-2541" />
                            </div>
                            {/** Email */}
                            <div class="w-full flex-col justify-start items-start gap-1.5 flex">
                                <label for="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Email
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
                                    </svg>
                                </label>
                                <input type="text" className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="Johnsmith@gmail.com" />
                            </div>
                        </div>

                        <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                            <div class="w-full flex-col justify-start items-start gap-1.5 flex">
                                <label for="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">confirm your password
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
                                    </svg>
                                </label>
                                <input type="text" className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="5 Year" />
                            </div>

                            <div class="w-full flex-col justify-start items-start gap-1.5 flex">
                                <label for="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">confirm your password
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
                                    </svg>
                                </label>
                                <input type="text" className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="5 Year" />
                            </div>
                        </div>
                    </div>
                </div>

                <button className="mx-auto sm:w-fit w-full px-9 py-3 bg-indigo-600 hover:bg-indigo-700 ease-in-out transition-all duration-700 rounded-xl shadow justify-center items-center flex">
                    <span className="px-3.5 text-center text-white text-lg font-semibold leading-8">Submit</span>
                </button>
            </div>
        </div>
    );
}

const SignUp1 = () => {
    return(
        <div className=" flex items-center relative justify-center overflow-x-hidden ">
         <img className="" src={logo}/>
  <form action="" method="POST">
    <input type="hidden" name="_token" value="7DTUeYngmjEirGGRwMJ7mAPKCFfKQ90Q1tcleqRf" autocomplete="off" />

    <div class="relative 2xl:mb-8 xl:mb-4 lg:mb-4 md:mb-4 mb-4">
        <label class="flex items-center mb-2 text-gray-600 text-sm font-medium">Full name</label>
        <input type="text" id="default-search" name="name"
            class="block w-full h-12 px-5 py-3 text-base leading-8 font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder="Enter full name.." required />
    </div>

    <div class="relative 2xl:mb-8 xl:mb-6 lg:mb-6 md:mb-6 mb-4">
        <label class="flex items-center mb-2 text-gray-600 text-sm font-medium">Email</label>
        <input type="text" name="email" id="default-search"
            class="block w-full h-12 px-5 py-3 text-base leading-8 font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder="Enter your email.." required />
    </div>

    <div class="relative 2xl:mb-8 xl:mb-6 lg:mb-6 md:mb-6 mb-4">
        <label class="flex items-center mb-2 text-gray-600 text-sm font-medium">Password</label>
        <input type="password" name="password" id="default-search"
            class="block w-full h-12 px-5 py-3 text-base leading-8 font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder="Enter your password.." required />
    </div>

    <button type="submit"
        class="w-full py-3 px-5 text-base bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 h-12 hover:bg-indigo-700 mb-10">
        Register
    </button>

    <p class="text-center">
        <a href="https://pagedone.io/user-login" class="font-normal text-base leading-7 text-indigo-600 text-right w-full">
            Already have an account?
        </a>
    </p>
</form>

        </div>
  );
}      
export default SignUp1
