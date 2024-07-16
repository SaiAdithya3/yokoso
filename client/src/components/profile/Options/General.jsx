import { Button } from '@/components/ui/button';
import Avatar from 'boring-avatars';
import React from 'react';

const GeneralDetails = () => {
  return (
    <>
      <div className="flex w-full flex-col bg-white p-10">
        <div className="flex w-full items-center justify-between">
          <h1 className='font-semibold py-2 pb-6 text-xl'>Personal Information: </h1>
          <button className="bg-zinc-900 text-zinc-100 popp text-sm px-4 py-1.5 rounded-md">Request Edit</button>
          {/* <Button className=''>Request Edit</Button> */}
        </div>
        <div className="flex w-full items-start justify-between">
          <div className="left w-1/4 flex flex-col gap-3 items-center popp">
            <Avatar size={100} name="barackoba" variant="beam" className="rounded-full" />
            <label className="text-zinc-900 font-semibold text-md">ID : 847596812</label>
          </div>
          <div className="right w-3/4 flex flex-col items-center gap-6">
            <div className="right w-full flex flex-col gap-3 border bg-white p-2 px-7 rounded-2xl">
              <div className="flex popp items-center gap-2 py-2">
                <label className="text-zinc-950 w-1/3 text-md">Name: </label>
                <input type="text" disabled value="Jon Snow Targerean" className="text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
              <div className="flex popp items-center py-2 gap-2">
                <label className="text-zinc-950 text-md w-1/3">Gender : </label>
                <input type="text" disabled value="Male" className="text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
              <div className="flex popp items-center py-2 gap-2">
                <label className="text-zinc-950 text-md w-1/3">Date Of Birth: </label>
                <input type="text" disabled value="31st December 1998" className="text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
              <div className="flex popp items-center py-2 gap-2">
                <label className="text-zinc-950 text-md w-1/3">Mobile Number: </label>
                <input type="text" disabled value="8697458152" className="text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
              <div className="flex popp items-center py-2 gap-2">
                <label className="text-zinc-950 text-md w-1/3">Student Mail: </label>
                <input type="text" disabled value="itsmail@college.co" className=" text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
              <div className="flex popp items-center py-2 gap-2">
                <label className="text-zinc-950 text-md w-1/3">Fathers Name: </label>
                <input type="text" disabled value="Daemon Targerean" className="text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
              <div className="flex popp items-center py-2 gap-2">
                <label className="text-zinc-950 text-md w-1/3">Mothers Name: </label>
                <input type="text" disabled value="Minazuki" className="text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
            </div>
            <div className="right w-full flex flex-col gap-3 border bg-white p-2 px-7 rounded-2xl">
              <div className="flex popp items-center gap-2 py-2">
                <label className="text-zinc-950 w-1/3 text-md">Batch: </label>
                <input type="text" disabled value="B.Tech R22  [ 2023 - 2027 ] " className="text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
              <div className="flex popp items-center py-2 gap-2">
                <label className="text-zinc-950 text-md w-1/3">Roll Number : </label>
                <input type="text" disabled value="21H231A45H3" className="text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
              <div className="flex popp items-center py-2 gap-2">
                <label className="text-zinc-950 text-md w-1/3">Year: </label>
                <input type="text" disabled value="1 Year" className="text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
              <div className="flex popp items-center py-2 gap-2">
                <label className="text-zinc-950 text-md w-1/3">Current Term: </label>
                <input type="text" disabled value="I Year II Semester" className="text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
              <div className="flex popp items-center py-2 gap-2">
                <label className="text-zinc-950 text-md w-1/3">Section: </label>
                <input type="text" disabled value="CSE[2023-2027] - C" className=" text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
              <div className="flex popp items-center py-2 gap-2">
                <label className="text-zinc-950 text-md w-1/3">Room: </label>
                <input type="text" disabled value="317" className="text-sm w-full cursor-pointer border-2 outline-none bg-white border-zinc-800/30 rounded-md p-1 px-3 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralDetails;
