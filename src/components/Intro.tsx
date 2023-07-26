import React from 'react'

const Intro = () => {
    return (
        <div className="w-full px-5 md:mt-4 lg:px-[60px] h-[90vh] gap-5 flex flex-col items-center justify-start">
            <h1 className="text-2xl md:text-5xl lg:text-6xl w-full md:w-[95%] lg:w-[70%] font-extrabold">Welcome To My Personal AI Art Gallery</h1>
            <div className="grid md:w-[95%] lg:w-[70%] w-full h-[85%] gap-2 md:gap-5 md:h-[70%] grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2">
                <div className=" col-span-1 row-span-2 md:order-1 order-4 rounded-xl overflow-hidden">
                    <img src="https://cdn.leonardo.ai/users/7f534f86-9477-4e53-a2fe-876d77a51a0c/generations/8bce8342-2cd0-4dc3-948e-2f375f4a9ddc/DreamShaper_32_Anime_boy_with_hoodie_neon_outline_colourful_1.jpg" alt="picture" className="h-full w-full lg:w-auto" />
                </div>
                <div className=" mt-0 col-span-2 md:order-2 order-1 overflow-hidden row-span-1 rounded-xl ">
                    <img src="https://cdn.leonardo.ai/users/42d93b1f-9a82-4822-ab89-27319b84c1cd/generations/25063732-ac91-431e-93ec-d51fcd0a9e9e/variations/Default_mexican_beauty_centered_looking_at_the_camera_approaching_per_1_25063732-ac91-431e-93ec-d51fcd0a9e9e_1.jpg?w=512" alt="picture" className=" " />
                </div>
                <div className="col-span-1 row-span-2 md:order-3 order-5 overflow-hidden rounded-xl  bg-blue-400">
                    <img src="https://cdn.leonardo.ai/users/d29a7919-acaa-4f02-ba54-4385aa2d33fa/generations/9ff4d01b-17f8-4a37-bcfe-2cc248036bec/variations/Default_Splash_art_music_album_art_cover_drawing_a_woman_with_1_9ff4d01b-17f8-4a37-bcfe-2cc248036bec_1.jpg?w=512" alt="picture" className="h-full w-full lg:w-auto" />
                </div>
                <div className=" mb-0 col-span-1 row-span-1 md:order-4 order-2 rounded-xl overflow-hidden  bg-violet-400">
                    <img src="https://cdn.leonardo.ai/users/967cccbb-8315-4bb1-90b8-516c7144e1ab/generations/b0a4e5c5-349d-44a3-bd81-059044e12f6f/variations/Default_A_detailed_illustration_a_head_of_elephant_wearing_tre_2_b0a4e5c5-349d-44a3-bd81-059044e12f6f_1.jpg?w=512/generations/a45a1fd7-af2d-4d4a-b004-0247247554d3/variations/Default_a_masterpiece_sticker_of_a_batgirlsupergirl_from_dc_co_3_a45a1fd7-af2d-4d4a-b004-0247247554d3_1.jpg" alt="picture" className="h-full w-full lg:w-auto " />

                </div>
                <div className=" mb-0 col-span-1 row-span-1 md:order-5 order-3 overflow-hidden rounded-xl bg-violet-400">
                    <img src="https://cdn.leonardo.ai/users/f9f44d7d-2853-4882-b6a3-71ee78aac30d/generations/724c3eba-f3d6-4d90-b1e1-6a736c4f1969/variations/Default_An_adorable_cute_fluffy_baby_cat_character_Dressed_in_0_724c3eba-f3d6-4d90-b1e1-6a736c4f1969_1.jpg" alt="picture" className="h-full w-full lg:w-auto" />

                </div>
            </div>
        </div>
    )
}

export default Intro