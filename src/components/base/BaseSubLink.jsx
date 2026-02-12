import React from 'react';
import { Box, Link } from '@mui/material';

export const BaseSubLink = React.memo(({
                                          Icon = <></>,
                                          bgColor = 'red',
                                          color = 'white!important',
                                          duration = 0.3,
                                          delay = 0,
                                          isOpen = false,
                                          link
                                      }) => {
    return (
        <Link
          href={link}
          target='_blank'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                padding: '10px',
                backgroundColor: bgColor,
                color: color,
                transition: `opacity ${duration}s ease-in-out ${delay}s, transform ${duration}s ease-in-out`,
                opacity: isOpen ? 1 : 0,
                '&:hover': {
                    backgroundColor: bgColor,
                    transform: 'scale(1.2)'
                }
            }}
        >

            <Icon />
        </Link>
    );
});
