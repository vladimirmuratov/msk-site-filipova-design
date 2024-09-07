import {Banner} from '@/components/for-service-pages/planned-hospital/Banner'
import {PaidHospitalizationBlock} from '@/components/for-service-pages/planned-hospital/PaidHospitalizationBlock'
import {HowToBeHospitalized} from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized'
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock'
import {servicesInfo, stepsHospitalization} from '@/config'

export default function PlanHospital(){
    return(
        <>
            <Banner/>
            <PaidHospitalizationBlock services={servicesInfo}/>
            <HowToBeHospitalized steps={stepsHospitalization}/>
            <StableSummaryBlock/>
        </>
    )
}
