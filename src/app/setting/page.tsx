"use client"

import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

function SettingPage() {
  useEffect(() => {
    redirect('/setting/my-info')
  })

  return null;
}

export default SettingPage