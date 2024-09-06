import React from 'react'
import {Box, Link} from '@mui/material'
import {headerServiceLinks} from '@/config'

const HeaderServiceBlock = () => {
    return(
        <Box
        sx={{
            backgroundColor: 'var(--blue)',
            display: {xs: 'none', sm: 'grid'},
            gridTemplateColumns: {sm: 'repeat(4, 1fr)'},
            gap: '20px',
            padding: '20px'
        }}
        >

            {headerServiceLinks.map(({id, label, path}) =>(
                <Link
                    key={id}
                    href={path}
                    target='_blank'
                    sx={{
                        color: 'var(--light-gray) !important',
                        fontSize: '14px',
                        '&:hover':{
                            textDecoration: 'underline !important'
                        }
                    }}
                >{label}</Link>
            ))}

        </Box>
    )
}

export default React.memo(HeaderServiceBlock)
