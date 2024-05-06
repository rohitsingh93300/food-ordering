import React from 'react'

function SectionHeaders({subHeader, mainHeader}) {
  return (
    <>
     <h3 className="text-gray-500 font-semibold uppercase leading-4">{subHeader}</h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
    </>
  )
}

export default SectionHeaders
