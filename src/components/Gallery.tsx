import Pin from "./Pin";


const pins = [
    {
        id: 1,
        imageUrl: 'https://i.pinimg.com/564x/da/f0/38/daf0382b44e58bf0727f7e550485d0b0.jpg',
        title: 'Pin Title 1',
        author: 'Author 1',
    },
    {
        id: 2,
        imageUrl: 'https://i.pinimg.com/236x/e2/b7/10/e2b710ef0f79f257d08b423be2bd7980.jpg',
        title: 'Pin Title 2',
        author: 'Author 2',
    },
    {
        id: 3,
        imageUrl: 'https://i.pinimg.com/236x/05/c8/d6/05c8d6fa88b227fe81856538e2eed2a8.jpg',
        title: 'Pin Title 2',
        author: 'Author 2',
    },
    {
        id: 4,
        imageUrl: 'https://i.pinimg.com/236x/f3/35/22/f33522b6d1cd6eeacdd20057865ae806.jpg',
        title: 'Pin Title 2',
        author: 'Author 2',
    },
    {
        id: 5,
        imageUrl: 'https://i.pinimg.com/236x/63/10/d8/6310d879a4f78ab46f6163b2ad5bfe87.jpg',
        title: 'Pin Title 2',
        author: 'Author 2',
    },
  // Add more pins as needed
];


const Gallery: React.FC = () => {
    return (
            <div className="flex flex-col items-center">
                <h1 className="text-8xl font-bold my-11">Gallory</h1>
                <div style={{gridAutoRows: '10px'}} className="m-auto grid w-[90vw] lg:w-[75vw] md:w-[80vw]  grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <Pin size="small" img="https://i.pinimg.com/236x/30/a9/f2/30a9f248facef126f775aec2d98a688d.jpg"/>
                    <Pin size="medium" img="https://i.pinimg.com/236x/2b/b9/82/2bb98296b5d724c007d55a2b3e462121.jpg" />
                    <Pin size="large" img="https://i.pinimg.com/236x/1b/24/27/1b2427b42480b93f7cb92ab720f12d94.jpg"/>
                    <Pin size="small" img="https://i.pinimg.com/236x/f3/24/dc/f324dcbb200a856c702a228456031a62.jpg"/>
                    <Pin size="medium" img="https://i.pinimg.com/236x/2b/b9/82/2bb98296b5d724c007d55a2b3e462121.jpg" />
                    <Pin size="small" img="https://i.pinimg.com/236x/f3/24/dc/f324dcbb200a856c702a228456031a62.jpg"/>
                    <Pin size="large" img="https://cdn.leonardo.ai/users/33b77635-5046-4c27-9f6c-a9b4b19f492c/generations/19721703-6651-49e9-b76e-34ceaa34c09c/variations/Default_tattooed_Teddi_Mansueto_full_body_length_standing_of_a_0_19721703-6651-49e9-b76e-34ceaa34c09c_1.jpg"/>
                    <Pin size="medium" img="https://cdn.leonardo.ai/users/3fa81708-5812-4dd2-9ea5-bd53eb636877/generations/911ddbe9-2dee-4f31-a929-0622b2c9d505/variations/Default_A_detailed_illustration_a_Dead_Skull_wearing_trendy_su_0_911ddbe9-2dee-4f31-a929-0622b2c9d505_1.jpg" />
                    <Pin size="small" img="https://i.pinimg.com/236x/f3/24/dc/f324dcbb200a856c702a228456031a62.jpg"/>
                    <Pin size="large" img="https://cdn.leonardo.ai/users/3b1d0167-e31a-463c-96db-7681cc4ba644/generations/ced218e6-5d7b-4549-8297-1d97b2ec486f/variations/Default_Clara_Crawford_photorealistic_beautiful_woman_light_ha_0_ced218e6-5d7b-4549-8297-1d97b2ec486f_1.jpg"/>
                    <Pin size="medium" img="https://cdn.leonardo.ai/users/dec8dd12-7ebd-4c21-9168-8d04a8b3f1a7/generations/f530b22b-201f-45dd-bc2d-1dbaf055508c/variations/Default_A_lighthouse_mashup_with_cross_vector_art_vectorize_m_1_f530b22b-201f-45dd-bc2d-1dbaf055508c_1.jpg?w=512" />
                </div>
            </div>
    );
};



export default Gallery;
