import { Link } from "@inertiajs/inertia-react";
import React from "react";
import ReactPlayer from "react-player";

function Show() {
    return (
        <section
            className="mx-auto w-screen h-screen relative watching-page font-poppins bg-form-bg"
            id="stream"
        >
            <div className="pt-[100px]">
                <ReactPlayer
                    controls
                    width={"100%"}
                    height={"850px"}
                    url="https://www.youtube.com/watch?v=G1lAl3AVGw8"
                />
            </div>

            <div className="absolute top-5 left-5 z-20">
                <Link href={route("prototype.dashboard")}>
                    <img
                        src="/assets/icons/ic_arrow-left.svg"
                        className="transition-all btn-back w-[46px]"
                        alt="stream"
                    />
                </Link>
            </div>

            <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                    Details Screen Part Final
                </span>
            </div>
        </section>
    );
}

export default Show;
