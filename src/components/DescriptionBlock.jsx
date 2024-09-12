import {Box, Typography} from '@mui/material'
import React from 'react'

const DescriptionBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: {xs: '25px', sm: '50px'},
                paddingX: {xs: '10px', lg: 0},
                display: 'grid',
                gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr'},
                gap: {xs: '10px', sm: '80px'}
            }}
        >
            <Box component="article">
                <Typography
                    sx={{
                        color: 'var(--blue)',
                        fontSize: {xs: '16px', sm: '18px'},
                        fontWeight: 400,
                        marginBottom: {xs: '5px', sm: '10px'}
                    }}
                >
                    Центр госпитализации и сопровождения пациентов <span
                    style={{fontWeight: 600, whiteSpace: 'nowrap'}}>МСК-Групп</span> является официальным и
                    аккредитованным партнером медицинских учреждений
                    Москвы, ведомственных организаций здравоохранения, федеральных медицинских учреждений Управления
                    делами Президента РФ.
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--blue)',
                        fontSize: {xs: '16px', sm: '18px'},
                        fontWeight: 400
                    }}
                >
                    Верность традициям российской клинической медицины и современные технологии, высочайший
                    уровень медицинской помощи и трогательная
                    забота о пациенте по праву определяют больницы, с которыми работает Центр госпитализации и
                    сопровождения пациентов <span style={{fontWeight: 600, whiteSpace: 'nowrap'}}>МСК-Групп</span> как
                    флагманов
                    здравоохранения не только в России, но и за ее
                    пределами.
                </Typography>
            </Box>

            <Box
                component="article"
                sx={{
                    margin: {xs: 0, sm: '0 auto'}
                }}
            >
                <Typography
                    variant='h1'
                    sx={{
                        color: 'var(--red)',
                        fontSize: {xs: '18px', sm: '32px'},
                        fontWeight: 300,
                        lineHeight: 1.4,
                        width: {xs: '100%', sm: '50%'}
                    }}
                >
                    МСК Групп —
                    официальный
                    координатор
                    по госпитализации в
                    федеральные медицинские учреждения
                    г.Москвы
                </Typography>
            </Box>
        </Box>
    )
}

export default React.memo(DescriptionBlock)
