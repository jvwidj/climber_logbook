import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | Minimal-UI`}</title>
      
    </Helmet>

    <Box ref={ref} {...other} >
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  
};

export default Page;
