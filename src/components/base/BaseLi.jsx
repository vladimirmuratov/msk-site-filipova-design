import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LocalHospital } from '@mui/icons-material';
import { BaseText } from '@/components/base/BaseText';
import React, { memo } from 'react';

export const BaseLi = memo(({ label = '', component = 'h3' }) => (
    <ListItem sx={{ gap: '10px' }}>
        <ListItemIcon sx={{ minWidth: 0 }}>
            <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
        </ListItemIcon>
        <ListItemText>
            <BaseText component={component}>
                {label}
            </BaseText>
        </ListItemText>
    </ListItem>
));
