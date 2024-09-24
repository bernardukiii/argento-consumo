'use client'

import React, { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

interface BdkiProgressProps {
    progress: number
}

const BdkiProgress: React.FC<BdkiProgressProps> = ({ progress }) => {
  
  return (
    <div className='w-full h-1/6 rotate-90'>
      <ProgressBar completed={progress} />
    </div>
  )
}

export default BdkiProgress
