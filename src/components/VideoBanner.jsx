import React from 'react';
import { Box, Typography } from '@mui/material';

export const VideoBanner = React.memo(() => {

    return (
        <Box
            sx={{
                position: 'relative',
                paddingY: { xs: '25px', sm: '50px' },
            }}
        >
            <video
                onContextMenu={(event) => event.preventDefault()}
                className="video-banner"
                autoPlay
                loop
                muted
            >
                <source src={`/video/video-banner-0.webm`} type="video/webm" />
                Your browser does not support the video tag.
                <a href="https://ru.freepik.com/free-video/close-up-view-senior-caucasian-female-doctor-hands-typing-laptop-desktop_473369#fromView=search&page=1&position=0&uuid=f225933e-fd27-40a6-b1e8-6c837f0f2fe9">Видео
                    от freepik</a>
            </video>

            <Typography
                variant="h1"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: { xs: 24, sm: 42, md: 58, lg: 68 },
                    fontWeight: 400,
                    color: 'var(--red)',
                    textShadow: '2px 2px 2px white',
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    width: '100%',
                    textWrap: 'balance'
                }}>
                Лечение в лучших клиниках Москвы
                {/*Платная<br/>*/}
                {/*госпитализация*/}
            </Typography>

        </Box>
    );
});
