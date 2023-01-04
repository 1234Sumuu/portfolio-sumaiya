import React from 'react';
import { FaGitHub, FaLinkedin } from "react-icons/fa";
import { HiOutLineMail } from "react-icons/hi";
import { BsFillPersonalLisnesFill } from "react-icons/bs"

function SocialLinks() {
    const Links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size = {30} />
                </>
            ),
            href: "https://linkedin.com",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGitHub size={30} />
                </>
            ),
            href: "https://github.com/1234Sumuu",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutLineMail size={30} />
                </>
            ),
            href: "mailto:foo@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonalLisnesFill size ={30} />
                </>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({})

            )
            }
        </ul>
    </div>
  )
}

export default SocialLinks;