'use client'

import React, { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

interface BdkiProgressProps {
    progress: number
}

const BdkiProgress: React.FC<BdkiProgressProps> = ({ progress }) => {
  
  return (
    <div>
      <ProgressBar completed={progress} />
    </div>
  )
}

export default BdkiProgress
