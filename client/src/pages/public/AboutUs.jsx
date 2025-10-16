import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

export function AboutUs() {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-6 col-m-3">
                    <div className="row">
                        <div className="col-md-9 mb-3">
                            <img src={image1} className="rounded w-100" alt="image1"/>
                        </div>
                        <div className="col-md-9">
                            <img src={image2} className="rounded w-100" alt="image2"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pt-3">
                    <small className="text-uppercase">Sveiki atvykę į mūsų kelionę</small>
                    <h1 className="h1 mb-4">Apie mūsų kirpyklą</h1>
                    <p className="text-secondary">Leiskitės į kelionę su mumis, nes kiekviename žingsnyje siekiame iš naujo apibrėžti meistriškumą ir naujoves. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat iure laboriosam cum voluptatum, nam minimuma deserunt aut? Distinctio voluptatibus dolor quaerat quo omnis illo sequi at velit, odit quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi vel animi non provident sit illo quaerat voluptatum ratione sunt cumque pariatur maxime, assumenda est consequatur ipsum quam mollitia fugiat delectus architecto quod quis culpa omnis. Excepturi ullam iure est tempora. Nesciunt eos nihil, eveniet, nemo temporibus fugit voluptatum libero repellat excepturi id veritatis sapiente distinctio nulla neque. Culpa pariatur laborum dolores quae alias, quis eos odit iusto voluptate hic accusamus, illo dolorum odio perferendis omnis fuga. In doloribus, doloremque amet laborum unde quibusdam deleniti magni esse eligendi nemo exercitationem vero consequuntur dolore iusto iure porro, accusantium, fuga adipisci velit!
                        doloremque amet laborum unde quibusdam deleniti magni esse eligendi nemo exercitationem vero consequuntur dolore iustoiure porro, accusantium, fuga adipisci velitdoloremque amet laborum unde quibusdam deleniti magni esse eligendi nemoexercitationem vero consequuntur dolore iusto iure porro, accusantium, fuga adipisci velit
                    </p>
                </div>
            </div>
        </div>
    )
}