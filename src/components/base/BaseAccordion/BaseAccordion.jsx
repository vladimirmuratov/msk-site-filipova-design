import { Box, Typography } from '@mui/material';
import { BaseAccordionItem } from '@/components/base/BaseAccordion/BaseAccordionItem';

export const BaseAccordion = ({ items = [] }) => {

    return (
        <Box>
            {items.map((item) => <BaseAccordionItem key={item.id} {...item} />)}
        </Box>
    );
};
