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
            <div id="gallery" className="flex flex-col items-center">
                <h1 className="text-6xl md:text-8xl font-bold my-11 mt-12">Gallery</h1>
                <div style={{gridAutoRows: '10px'}} className="m-auto grid w-full lg:w-[75vw] md:w-[80vw]  grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <Pin size="xs" img="https://cdn.leonardo.ai/users/92db7968-e495-4c6d-8e45-87e8f4a4de4b/generations/b4edbe23-29e5-4deb-9fd9-780adf9a21ff/variations/Default_A_detailed_illustration_of_a_cute_and_quirky_little_de_2_b4edbe23-29e5-4deb-9fd9-780adf9a21ff_1.jpg"/>
                    <Pin size="large" img="https://cdn.leonardo.ai/users/27a015bb-7dd1-44bb-9041-f689119f8139/generations/6e57d856-5663-48cf-b349-a8302e6adae8/variations/Default_Beautiful_anime_watercolor_painting_of_Firefox_logo_su_1_6e57d856-5663-48cf-b349-a8302e6adae8_1.jpg" />
                    <Pin size="large" img="https://cdn.leonardo.ai/users/17dfe286-39dd-4c7e-b9e6-631034fa4cd6/generations/e445498b-12e5-43ca-805d-f89292e111ab/variations/Default_sticker_of_ultra_detailed_portrait_of_Vincent_high_qua_3_e445498b-12e5-43ca-805d-f89292e111ab_1.jpg"/>
                    <Pin size="xs" img="https://cdn.leonardo.ai/users/6445edca-6935-48c0-aa60-cc3179373bc4/generations/bb29ed30-6b1d-459f-881f-72aa9eba693f/variations/Default_samurai_blood_moon_night_battle_burning_village_0_bb29ed30-6b1d-459f-881f-72aa9eba693f_1.jpg"/>
                    <Pin size="small" img="https://cdn.leonardo.ai/users/edd71919-5187-46e2-bfe3-b7a6f66565e0/generations/5fe2ac77-b7fb-4e50-b3c7-1465e3898373/variations/Default_cat_fire_abstract_beauty_centered_looking_at_the_camera_appro_0_5fe2ac77-b7fb-4e50-b3c7-1465e3898373_1.jpg" />
                    <Pin size="medium" img="https://cdn.leonardo.ai/users/3910dc13-8db8-4b39-8a1e-3da296c19cc8/generations/d6608e57-9d58-4ec2-b06c-a8a2d72274d8/variations/Default_epic_photo_of_ancient_greek_sculpture_of_philosopher_sitting_2_d6608e57-9d58-4ec2-b06c-a8a2d72274d8_1.jpg"/>
                    <Pin size="large" img="https://cdn.leonardo.ai/users/33b77635-5046-4c27-9f6c-a9b4b19f492c/generations/19721703-6651-49e9-b76e-34ceaa34c09c/variations/Default_tattooed_Teddi_Mansueto_full_body_length_standing_of_a_0_19721703-6651-49e9-b76e-34ceaa34c09c_1.jpg"/>
                    <Pin size="small" img="https://cdn.leonardo.ai/users/3fa81708-5812-4dd2-9ea5-bd53eb636877/generations/911ddbe9-2dee-4f31-a929-0622b2c9d505/variations/Default_A_detailed_illustration_a_Dead_Skull_wearing_trendy_su_0_911ddbe9-2dee-4f31-a929-0622b2c9d505_1.jpg" />
                    <Pin size="large" img="https://cdn.leonardo.ai/users/91df3f14-1db0-4ea3-ac1c-cf1d50f6bc88/generations/f032b73d-6fca-4df8-a814-8037ea7d7cd2/variations/Default_Create_a_medium_shot_colored_digital_line_art_portrait_0_f032b73d-6fca-4df8-a814-8037ea7d7cd2_1.jpg?w=512"/>
                    <Pin size="large" img="https://cdn.leonardo.ai/users/3b1d0167-e31a-463c-96db-7681cc4ba644/generations/ced218e6-5d7b-4549-8297-1d97b2ec486f/variations/Default_Clara_Crawford_photorealistic_beautiful_woman_light_ha_0_ced218e6-5d7b-4549-8297-1d97b2ec486f_1.jpg"/>
                    <Pin size="medium" img="https://cdn.leonardo.ai/users/dec8dd12-7ebd-4c21-9168-8d04a8b3f1a7/generations/f530b22b-201f-45dd-bc2d-1dbaf055508c/variations/Default_A_lighthouse_mashup_with_cross_vector_art_vectorize_m_1_f530b22b-201f-45dd-bc2d-1dbaf055508c_1.jpg?w=512" />
                    <Pin size="xl" img="https://cdn.leonardo.ai/users/a1e6ab45-eaef-4d57-b8bb-430eb56b2c48/generations/b5d299c5-8726-407a-a518-f3f04f8b0d75/variations/Default_The_artwork_should_have_photorealistic_ultrarealistic_0_b5d299c5-8726-407a-a518-f3f04f8b0d75_1.jpg" />
                    <Pin size="xs" img="https://cdn.leonardo.ai/users/8a0901b3-12ce-418c-9727-c9bda1627dfb/generations/105f0647-6717-46b0-86d5-05df5e924b4e/variations/Default_a_silhouette_design_of_a_lion_sunset_design_t_shirt_a_0_105f0647-6717-46b0-86d5-05df5e924b4e_1.jpg?w=512" />
                    <Pin size="large" img="https://cdn.leonardo.ai/users/bb765c72-7477-4b9e-a35b-ae59369a62f6/generations/687aac0a-a681-4b29-89ec-e628ca5b35ff/variations/Default_a_masterpiece_sticker_of_a_batgirlsupergirl_from_dc_co_2_687aac0a-a681-4b29-89ec-e628ca5b35ff_1.jpg" />
                    <Pin size="medium" img="https://cdn.leonardo.ai/users/deb0777f-c341-4859-b7da-ad739f7eeceb/generations/37c200d4-d914-4ed4-8b98-59ee9d6b351f/variations/Default_spalsh_art_wide_angle_Fully_centered_Skeleton_head_wearing_3_37c200d4-d914-4ed4-8b98-59ee9d6b351f_1.jpg?w=512" />
                    <Pin size="medium" img="https://cdn.leonardo.ai/users/3942fa26-6fbc-471f-b22a-0e80c33f52b2/generations/edea25e1-b8fb-4483-b3a6-96c30ec4b120/variations/Default_a_masterpiece_wearing_alternate_disney_Princess_Jasmin_1_edea25e1-b8fb-4483-b3a6-96c30ec4b120_1.jpg?w=512" />
                    <Pin size="large" img="https://cdn.leonardo.ai/users/a89cdc0d-2101-4a01-aadf-f6d285678619/generations/c9356f46-67e8-4bfc-b93d-f743234a2538/variations/Default_Jellyfish_ultra_detailed_artistic_photography_midnight_aura_n_0_c9356f46-67e8-4bfc-b93d-f743234a2538_1.jpg" />
                </div>
                
            </div>
    );
};



export default Gallery;
