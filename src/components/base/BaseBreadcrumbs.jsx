import { Box, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

export const BaseBreadcrumbs = memo(({
                                         breadcrumbs = () => {
                                         }
                                     }) => {
    const router = useRouter();

    return (
        <Box sx={{ marginTop: { xs: '15px', sm: '25px' }, marginLeft: { xs: '10px', lg: 0 } }}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" sx={{ color: 'var(--blue)' }} />}
                         aria-label="breadcrumb">
                {breadcrumbs(router)}
            </Breadcrumbs>
        </Box>
    );
});
