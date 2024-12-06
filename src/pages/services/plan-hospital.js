import {Banner} from '@/components/for-service-pages/planned-hospital/Banner'
import {PaidHospitalizationBlock} from '@/components/for-service-pages/planned-hospital/PaidHospitalizationBlock'
import {HowToBeHospitalized} from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized'
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock'
import {servicesInfo, stepsHospitalization} from '@/config'
import Head from 'next/head'

export default function PlanHospital(){
    return(
        <>
            <Head>
                <title>Платная госпитализация 8(499)719-81-00, 24/7</title>
                <meta name="description" content="Откройте для себя возможности платной госпитализации в Москве. Федеральные и ведомственные медучреждения предлагают высококачественные медицинские услуги."/>
                <meta name="keywords" content="платная госпитализация, госпитализация в стационар платно, госпитализация с платной скорой, госпитализация в платную клинику, нужна платная госпитализация"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Banner/>
            <PaidHospitalizationBlock services={servicesInfo}/>
            <HowToBeHospitalized steps={stepsHospitalization}/>
            <StableSummaryBlock/>
        </>
    )
}
