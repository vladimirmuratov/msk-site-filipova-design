import React from 'react'
import {Box, Link} from '@mui/material'
import Image from 'next/image'
import {phoneTelegram, phoneViber, phoneWhatsApp} from '@/config'

const SocialBlock = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            <Link target="_blank" href={`https://wa.me/${phoneWhatsApp}`}>
                <Image
                    src="/images/social/whatsapp.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
            <Link target="_blank" href={`https://t.me/${phoneTelegram}`}>
                <Image
                    src="/images/social/telegram.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
            <Link href={`viber://chat?number=${phoneViber}`}>
                <Image
                    src="/images/social/viber.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
        </Box>
    )
}

export default React.memo(SocialBlock)
