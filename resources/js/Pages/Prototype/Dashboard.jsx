import FeatureMovie from "@/Components/FeatureMovie";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/inertia-react";
import Flickity from "react-flickity-component";

function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {/* Movie thumbnail */}
                    {[1, 2, 3, 4].map((i) => (
                        <FeatureMovie
                            key={i}
                            slug=""
                            name="The Batman in Love"
                            category="Action • Horror"
                            thumbnail="/assets/images/featured-1.png"
                            rating="4.5/5.0"
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}

export default Dashboard;
