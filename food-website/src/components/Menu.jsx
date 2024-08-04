import MenuCards from "./MenuCards";

function Menu() {
  return (
   <>
     <div className="bg-gradient-to-r from-neutral-300 to-stone-400 w-full h-fit  lg:m-0 md:mt-25px sm:mt-[200px]">
     <h1 className='text-center p-6 mt-2 capitalize font-bold text-2xl xl:m-none '>food menu</h1>
     <div className="menu-cards flex justify-center gap-12 flex-wrap mt-3 mb-3 p-4  ">
        <MenuCards  image="https://i.pinimg.com/474x/a5/7b/50/a57b5068f66f901aa3796dc8553f8c33.jpg" title="Pizza" desc="Lorem ipsum dolor sit amet. " price="$2.3"/>
        <MenuCards  image="https://i.pinimg.com/564x/33/6f/49/336f4969f18cc575675c4f485443c383.jpg" title="Burger" desc="Lorem ipsum dolor sit amet. " price="$2.3"/>
        <MenuCards  image="https://i.pinimg.com/474x/4a/86/41/4a8641ee96aa08c42cea166581f50ab4.jpg" title="Grill Sandwich" desc="Lorem ipsum dolor sit amet. " price="$2.3"/>
        <MenuCards  image="https://i.pinimg.com/474x/da/25/92/da2592e0d25f079cbf9aedf436cabf6f.jpg" title="Chicken Biryani" desc="Lorem ipsum dolor sit amet. " price="$2.3"/>
        <MenuCards  image="https://i.pinimg.com/474x/2c/6e/04/2c6e0474ef6f30cfaf36b4527b4357ff.jpg" title="Fruits" desc="Lorem ipsum dolor sit amet. " price="$2.3"/>
        <MenuCards  image="https://i.pinimg.com/474x/76/9b/15/769b1539645f0ccf0d77d5e8f25a102d.jpg" title="Platter" desc="Lorem ipsum dolor sit amet." price="$2.3"/>
     </div>
     <h4 className="text-center text-pink-600 capitalize font-semibold p-2"> see all foods</h4>
     </div>
   </>
  )
}

export default Menu;