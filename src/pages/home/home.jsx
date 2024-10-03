import React from "react";
import { Header } from "../../layout/header/header";
import { Banner } from "../../components/banner/banner";
import { data } from "../../data/category-data";
import { CategoryCard } from "../../components/card/category-card"

export const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <div>
                {data.map((item) => {
                    return <CategoryCard key={item.id} {...item} />
                })}
            </div>
        </>
    );
};