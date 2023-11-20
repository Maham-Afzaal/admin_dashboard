import React from 'react'
import { useTheme } from '@emotion/react'
import { tokens } from '../theme'
import { Box, Typography } from '@mui/material'
import copy from '../copyRight.png'
const CopyRight = () => {
    const theme=useTheme();
    const colors = tokens(theme.palette.mode);
    
  return (
    <Box sx={{
        backgroundColor: theme.palette.mode==='dark'?colors.primary[400]:'#f2f0f0',
    }}>
        <Box sx={{padding:'20px',display:'flex',justifyContent:'space-between'}}>
            <img src={copy} width={40} height={35}/>
            <Typography color={colors.grey[100]}>@2023 Maham Afzaal. All rights Reserved</Typography>
        </Box>
        
    </Box>
  )
}

export default CopyRight