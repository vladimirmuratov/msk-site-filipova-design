import { Banner4 } from '@/components/Banner/Banner4';
import { VideoBanner } from '@/components/VideoBanner';
import DescriptionBlock from '@/components/DescriptionBlock';
import { WhyWeBlock } from '@/components/WhyWeBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import { stepsPlanHospitalization } from '@/config/steps';
import PartnersBlock from '@/components/PartnersBlock';
import DirectionsBlock from '@/components/DirectionsBlock';
import { directionsList } from '@/config/directions/directions-list';
import ServiceBlock from '@/components/ServiceBlock';
import { services } from '@/config/services';
import { DiseasesBlock } from '@/components/DiseasesBlock';
import { diseasesList } from '@/config/diseases/diseases-list';
import { ReviewsBlock } from '@/components/ReviewsBlock';
import { reviews } from '@/config/reviews';
import { Loader } from '@/components/loader/Loader';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useScrollPosition } from '@/lib/useScrollPosition ';
import { Open_Sans } from 'next/font/google';
import { FearBlock } from '@/components/FearBlock';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { FormBlock } from '@/components/base/for-service-pages/stable-components/FormBlock';
import { Box } from '@mui/material';

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] });

export const MainPageContent = () => {
    const router = useRouter();
    const [isMobile, setMobile] = useState(undefined);

    useEffect(() => {
        const os = navigator.userAgentData.platform;

        if (os === 'Android' || os === 'iOS') {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, []);

    useScrollPosition('Home');

    return (
        <>
            {typeof isMobile === 'boolean' ? (
                <main className={openSans.className}>
                    {isMobile ? <Banner4 /> : <VideoBanner />}
                    <BaseCallBlock text="Ответим на любые вопросы по госпитализации и лечению. Звоните!" />
                    <DescriptionBlock />
                    <WhyWeBlock />
                    <FearBlock />
                    <HowToBeHospitalized
                        steps={stepsPlanHospitalization}
                        title="как это работает"
                    />
                    <BaseCallBlock
                        text="Остались вопросы? Позвоните нам — и мы развеем все ваши сомнения лично. Платная госпитализация в Москве — это доступ к качественной медицине без бюрократии и ожидания. Доверьте организацию профессионалам." />
                    <PartnersBlock />
                    <DirectionsBlock directions={directionsList} router={router} />
                    <ServiceBlock services={services} />
                    <DiseasesBlock diseases={diseasesList} />
                    <BaseCallBlock text='Запись на консультацию возможна по телефону или через форму' />

                    <Box
                        sx={{
                            paddingY: { xs: '25px', sm: '50px' },
                            marginX: { xs: '10px', lg: 0 },
                        }}
                    >
                        <FormBlock />
                    </Box>

                    <ReviewsBlock reviews={reviews} isMobile={isMobile} />

                </main>
            ) : (
                <Loader />
            )}
        </>
    );
};
