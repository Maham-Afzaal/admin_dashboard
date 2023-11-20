import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const HalfRedHalfBlueProgressBar = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <CircularProgress
        variant="determinate"
        value={50}
        size={100}
        thickness={2}
        style={{ color: 'red', clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
      />
      <CircularProgress
        variant="determinate"
        value={50}
        size={100}
        thickness={2}
        style={{ color: 'blue', clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
      />
    </div>
  );
};

export default HalfRedHalfBlueProgressBar;
