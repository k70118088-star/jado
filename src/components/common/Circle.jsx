import React from 'react'
import CountUp from 'react-countup'

const Circle = ({ className, number, support, text }) => {
  return (
    <div
      className={`flex flex-col gap-0.5 justify-center items-center border bg-[#FDF6EF] border-[#EF7D00] rounded-full ${className}`}
    >
      {number ? (
        <span className="flex gap-1 text-[40px] font-normal">
          <CountUp end={number} duration={3} enableScrollSpy />+
        </span>
      ) : (
        <span className="text-[40px] font-normal">{support}</span>
      )}

      <h4 className="text-[16x] font-normal">{text}</h4>
    </div>
  )
}

export default Circle;