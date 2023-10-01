import React from "react";
import Image from "next/image";
import results from "./data.json";

export default function ResultsSummary() {
  return (
    <div className="bg-indigo-50 md:h-screen flex">
      <div className="flex flex-col bg-white md:rounded-xl md:m-auto w-full md:w-[736px] drop-shadow-xl md:flex-row">
        <div className="rounded-b-xl md:rounded-xl bg-indigo-600 md:w-2/4 flex flex-col items-center p-10">
          <h2 className="text-3xl text-indigo-200">Your Result</h2>
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-indigo-600 p-12 m-10 rounded-full">
            <p className="text-white text-6xl font-semibold">76</p>
            <p className="text-indigo-200">of 100</p>
          </div>
          <p className="text-white text-3xl">Great</p>
          <p className="text-center mt-3 text-indigo-200 text-sm w-4/5">
            Your performance exceeds 65% of the people conducting the test here!
          </p>
        </div>
        <div className="flex flex-col items-center p-10 md:w-2/4">
          <h2 className="text-3xl text-slate-950 w-full mb-6">Summary</h2>
          <div className="w-full space-y-3">
            {results.map((result, i) => (
              <div
                className={`flex ${result.bgcolor} px-4 py-3 justify-between w-full rounded-lg text-lg`}
                key={i}
              >
                <div className="flex">
                  <Image src={result.icon} width={20} height={20} alt="" />
                  <h3 className={`${result.textcolor} ml-4`}>
                    {result.category}
                  </h3>
                </div>
                <div className="flex">
                  <p className="font-bold text-slate-950 mr-2">
                    {result.score}
                  </p>
                  <p className="text-slate-400">/</p>
                  <p className="ml-2 text-slate-400">100</p>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-indigo-500 w-full rounded-full mt-10 p-3 text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
