import { styled } from '@mui/system';
 
export const NewsList = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridColumnGap: '10px',
    gridRowGap: '10px'
});