import React from 'react';
import { Fab, Link } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { phone } from '@/config/default-values';

export const FloatBtnMobile = React.memo(() => {
    return (
        <Link href={`tel:${phone}`}>
            <Fab
                color="error"
                sx={{
                    position: 'fixed',
                    bottom: { xs: '10px', sm: '30px', md: '50px' },
                    right: { xs: '10px', sm: '30px', md: '50px' }
                }}>
                <PhoneEnabledIcon />
                <span className="pulse-button__rings"></span>
                <span className="pulse-button__rings"></span>
                <span className="pulse-button__rings"></span>
            </Fab>
        </Link>
    );
});
