import CertificateCard from '@/components/common/certificate-card'
import React from 'react'

function CertificateCardContainer() {
  return (
    <div className='flex gap-2 flex-wrap'>
      <CertificateCard />
      <CertificateCard />
      <CertificateCard />
    </div>
  )
}

export default CertificateCardContainer