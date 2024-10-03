import React from 'react';
import style from "./style.module.scss";

export const Card = ({ data }) => {
  return (
 <div className={style.conatainer}>
     <div className=" mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.slice(0, 3).map((item, index) => (
          <div key={index} className="bg-gradient-to-r from-orange-400 to-pink-500 p-4 rounded-lg shadow-md flex">
            <div className="ml-4 flex flex-col justify-center">
              <h1 className="text-lg font-bold">{item.title}</h1>
              <h3 className="text-sm mt-2">{item.desc}</h3>
            </div>
            <img src={item.img} alt={item.title} className="w-1/2 h-full object-cover rounded-md" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.slice(3, 5).map((item, index) => (
          <div key={index} className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg shadow-md flex">
            <div className="ml-4 flex flex-col justify-center">
              <h1 className="text-lg font-bold">{item.title}</h1>
              <h3 className="text-sm mt-2">{item.desc}</h3>
            </div>
            <img src={item.img} alt={item.title} className="w-1/2 h-full object-cover rounded-md" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.slice(5, 8).map((item, index) => (
          <div key={index} className="bg-gradient-to-r from-purple-400 to-indigo-500 p-4 rounded-lg shadow-md flex">
            <div className="ml-4 flex flex-col justify-center">
              <h1 className="text-lg font-bold">{item.title}</h1>
              <h3 className="text-sm mt-2">{item.desc}</h3>
            </div>
            <img src={item.img} alt={item.title} className="w-1/2 h-full object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
 </div>
  );
};
