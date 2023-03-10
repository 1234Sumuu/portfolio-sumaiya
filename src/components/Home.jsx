import React from "react";
// import SumuImage from "../assets/SumuImage.png";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div 
            name="hone"
            className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-gray-500 py-500 py-4 max-w-md">
                        I'm a Full-Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quas recusandae harum quidem facere cumque quod, saepe laborum minus neque eveniet ab adipisci cupiditate libero labore ad obcaecati error impedit.

                    </p>

                    <div>
                        <Link
                        to="portfolio"
                        smooth
                        duration={500}
                        className= "group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio 
                            <span className="group-hover:rotare-90 duration-300">
                                <MdOutlineKeyboardArrowRight size = {25} className= "ml-1" />
                           </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src="{SumuImage}" alt="my profile" 
                    className="round-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>

        </div>
    );
};

export default Home;