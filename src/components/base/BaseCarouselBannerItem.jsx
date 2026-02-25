import { memo } from 'react';
import { Box, Typography } from '@mui/material';

export const BaseCarouselBannerItem = memo(({ title, subTitle, image }) => {
  return (
    <Box
      component="figure"
      sx={{
        position: 'relative',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '40%' },
          left: '5%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h1"
          className="banner-title"
          sx={{
            color: 'var(--light-blue)',
            textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
            fontSize: { xs: 18, sm: 24, md: 34, lg: 46 },
            marginBottom: '10px',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h2"
          className="banner-subtitle"
          sx={{
            color: 'var(--light-blue)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            fontSize: { xs: 14, sm: 16, md: 24, lg: 34 },
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
});
