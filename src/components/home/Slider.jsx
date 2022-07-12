import Slider from "react-slick";

export default function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                <div className="bg-projectNavy">
                    <img className="w-3/12" src="https://asset.kompas.com/crops/6k-KnbtmM-IHe8a5mUY3_gqQIik=/202x0:1282x720/750x500/data/photo/2022/02/06/61ff8e88a094a.jpg" />
                </div>
            </Slider>
        </div>
    );
}