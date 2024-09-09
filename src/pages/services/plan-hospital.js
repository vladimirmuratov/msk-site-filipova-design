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
                <title>МСК-Групп | Платная госпитализация</title>
                <meta name="keywords" content="платная госпитализация, госпитализация в стационар платно, госпитализация с платной скорой, госпитализация в платную клинику"/>
                <meta name="description" content="госпитализация в федеральные и ведомственные медучреждения Москвы"/>
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
