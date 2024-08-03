function Card({ title, backgroundImage })  {
  return (
    
   <div className="card w-52 h-60 rounded-md "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-2xl text-white capitalize text-center font-extrabold mt-48">{title}</h2>
    </div>
  );
};

export default Card;