import React from "react";
import Pytanie from "./Pytanie";

const PytanieView = ({ items }) => (
    <>
        {items.length ? (
            <>
                {items.map(item => (
                    <Pytanie key={item.pytanie} {...item} />
                ))}
            </>
        ) : (
            <div className="card shadow mb-4">
            <div className="card-body">
                Pusto, dodaj Pytania!
    </div>
        </div>
            )}
    </>
);

export default PytanieView;
