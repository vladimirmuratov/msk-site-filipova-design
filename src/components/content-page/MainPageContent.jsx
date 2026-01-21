import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useScrollPosition } from '@/lib/useScrollPosition ';
import { Open_Sans } from 'next/font/google';

import { Banner4 } from '@/components/Banner/Banner4';
// import { VideoBanner } from '@/components/VideoBanner';
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
import { FearBlock } from '@/components/FearBlock';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { FormBlock } from '@/components/base/for-service-pages/stable-components/FormBlock';
import { Box } from '@mui/material';
import { DescriptionBlockVer2 } from '@/components/DescriptionBlock/DescriptionBlock-ver-2';
import { WhyWeBlockVer2 } from '@/components/WhyWeBlock/WhyWeBlock-ver-2';

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
                    {/*{isMobile ? <Banner4 /> : <VideoBanner />}*/}
                    <Banner4 />
                    <BaseCallBlock text="Ответим на любые вопросы по госпитализации и лечению. Звоните!" />
                    <DescriptionBlockVer2 />
                    <WhyWeBlockVer2 />
                    <FearBlock />
                    <HowToBeHospitalized
                        steps={stepsPlanHospitalization}
                        title="как это работает"
                    />
                    <BaseCallBlock
                        text="Если вопросы остались — позвоните нам без стеснения! За годы работы мы видели самые разные ситуации: от экстренных неврологических перевозок до плановых исследований для сложных пациентов из регионов. Всё решаемо — главное сделать первый шаг к надежной медицине без суеты и формализма." />
                    <PartnersBlock />
                    <DirectionsBlock directions={directionsList} router={router} />
                    <ServiceBlock services={services} />
                    <DiseasesBlock diseases={diseasesList} />
                    <BaseCallBlock text="Запись на консультацию возможна по телефону или через форму" />

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
