import { Fab, Link } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { phone } from '@/config/default-values';
import { memo } from 'react';

export const FloatBtn = memo(({ handleOpen, isMobile }) => {
    return (
        <>
            {typeof isMobile === 'boolean' &&
            isMobile
                ? (
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
                )
                : (
                    <Fab
                        onClick={handleOpen}
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
                )
            }
        </>
    );
});
