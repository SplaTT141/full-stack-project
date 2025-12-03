import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

export function AboutUs() {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-6 col-12 d-flex flex-column justify-content-center mb-4 mb-lg-0">
                    <small className="text-uppercase">Sveiki atvykę į mūsų kelionę</small>
                    <h1 className="h1 mb-4">Apie mūsų kirpyklą</h1>
                    <p className="text-secondary">
                        Leiskitės į kelionę su mumis, nes kiekviename žingsnyje siekiame iš naujo apibrėžti meistriškumą ir naujoves. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat iure laboriosam cum voluptatum, nam minimuma deserunt aut? Distinctio voluptatibus dolor quaerat quo omnis illo sequi at velit, odit quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi vel animi non provident sit illo quaerat voluptatum ratione sunt cumque pariatur maxime, assumenda est consequatur ipsum quam mollitia fugiat delectus architecto quod quis culpa omnis. Excepturi ullam iure est tempora. Nesciunt eos nihil, eveniet, nemo temporibus fugit voluptatum libero repellat excepturi id veritatis sapiente distinctio nulla neque. Culpa pariatur laborum dolores quae alias, quis eos odit iusto voluptate hic accusamus, illo dolorum odio perferendis omnis fuga. In doloribus, doloremque amet laborum unde quibusdam deleniti magni esse eligendi nemo exercitationem vero consequuntur dolore iusto iure porro, accusantium, fuga adipisci velit! doloremque amet laborum unde quibusdam deleniti magni esse eligendi nemo exercitationem vero consequuntur dolore iustoiure porro, accusantium, fuga adipisci velitdoloremque amet laborum unde quibusdam deleniti magni esse eligendi nemoexercitationem vero consequuntur dolore iusto iure porro, accusantium, fuga adipisci velit
                    </p>
                </div>

                <div className="col-lg-6 col-12 d-flex flex-column align-items-center">
                    <img src={image1} className="rounded mb-3 img-fluid" alt="image1" />
                    <img src={image2} className="rounded img-fluid" alt="image2" />
                </div>
            </div>
        </div>
    );
}
