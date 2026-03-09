import React from 'react'
import CountUp from 'react-countup'

const Circle = ({ className, number, support, text }) => {
  return (
    <div
      className={`flex flex-col gap-0.5 justify-center items-center border bg-[#FDF6EF] border-[#EF7D00] rounded-full ${className}`}
    >
      {number ? (
        <span className="flex gap-1 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#1D1F26] font-normal">
          <CountUp end={number} duration={3} enableScrollSpy />+
        </span>
      ) : (
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal">{support}</span>
      )}

      <h4 className="text-sm sm:text-[16x] font-normal text-[#4C4C4C] ">{text}</h4>
    </div>
  )
}

export default Circle;