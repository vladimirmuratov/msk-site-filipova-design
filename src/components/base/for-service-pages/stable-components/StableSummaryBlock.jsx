import React from 'react'
import {WhatWeOffer} from '@/components/base/for-service-pages/stable-components/WhatWeOffer'
import {FormBlock} from '@/components/base/for-service-pages/stable-components/FormBlock'
import {ContactBlock} from '@/components/base/for-service-pages/stable-components/ContactBlock'
import PartnersBlock from '@/components/PartnersBlock'
import {partners} from '@/config'

const StableSummaryBlock = () => (
    <>
        <PartnersBlock partners={partners}/>
        <WhatWeOffer/>
        <FormBlock/>
        <ContactBlock/>
    </>
)

export default React.memo(StableSummaryBlock)