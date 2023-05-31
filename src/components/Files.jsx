import React from "react";
import { PieChart } from "react-minimal-pie-chart";
const Files = () => {
  return (
    <div>
      <div className="flex flex-col shadow-xl rounded-full justify-center items-center h-72 w-72">
        <PieChart className="rounded-full"
          data={[
            { title: "One", value: 60, color: "blue", },
            { title: "Two", value: 10, color: "yellow" },
            { title: "Three", value: 30, color: "red" },
            { title: "Four", value: 30, color: "green" },
          ]}
          lineWidth={17}
          paddingAngle={15}
          rounded
          animate
          background="rgb(243 244 246)"
          segmentsStyle={{filter:"drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))"}}
        />
        <div className="absolute z-50 flex flex-col items-center">
          <h1 className="font-bold text-3xl text-gray-700">
            60GB
          </h1>
          <span className="font-semibold text-xl text-gray-500">of 146GB used</span>
        </div>
      </div>
    </div>
  );
};

export default Files;
