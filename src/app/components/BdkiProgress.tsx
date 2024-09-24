'use client'

import React, { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

interface BdkiProgressProps {
    progress: number,
    label: string
}

const BdkiProgress: React.FC<BdkiProgressProps> = ({ progress, label }) => {
  
  return (
    <div className='w-full h-1/6 rotate-[270deg]'>
      <ProgressBar completed={progress} customLabel={label} height='100%' 
                    barContainerClassName='bdki-progress-bar-container'
                    labelClassName='bdki-progress-bar-label'
      />
    </div>
  )
}

export default BdkiProgress
