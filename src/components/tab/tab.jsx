import React from 'react';
import data from '../../data/data';
import style from '../navbar/style.module.scss'
export const Tab = () => {
  const [activeTab, setActiveTab] = React.useState(1); 

  const tabContent =
    activeTab === 1 ? data.tabs.tab2 : activeTab === 2 ? data.tabs.tab1 : data.tabs.tab3;

  return (
 <div className={style.container}>
     <div className=" mx-auto p-6">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab(1)}
          className={`${
            activeTab === 1 ? 'bg-[#EFF2F4] text-black' : 'bg-white text-black'
          } px-6 py-2 rounded-lg focus:outline-none`}
        >
          Хиты
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`${
            activeTab === 2 ?  'bg-[#EFF2F4] text-black' : 'bg-white text-black'
          } px-6 py-2 rounded-lg focus:outline-none`}
        >
          Скидки
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`${
            activeTab === 3 ?  'bg-[#EFF2F4] text-black' : 'bg-white text-black'
          } px-6 py-2 rounded-lg focus:outline-none`}
        >
          Новинки
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {tabContent?.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">{item.price}</div>
              {item.sale && <div className="line-through text-gray-500">{item.sale}</div>}
            </div>
            {item.eko && <div className="text-sm text-[#D5AF86]">{item.eko}</div>}
            <div className="flex justify-between mt-4">
              <button className="bg-[#0E2149] text-white px-4 py-2 rounded-lg">Купить</button>
              <button className="bg-[#D5AF86] text-white px-4 py-2 rounded-lg">В 1 клик</button>
            </div>
          </div>
        ))}
      </div>
    </div>
 </div>
  );
};
