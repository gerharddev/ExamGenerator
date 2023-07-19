import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { Button } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { useTheme } from '@mui/system';

// assets

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.grey[600],
  overflow: 'hidden'
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const QuestionCard = ({ isLoading }) => {
  const theme = useTheme();

  // const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = () => {
    alert('Check answer');
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                      In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <RadioGroup aria-label="question" name="question" sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: theme.palette.primary,
                  ml: '20px',
                  mt: '10px'
                }}>
                  <FormControlLabel
                    value="total_earning1"
                    control={<Radio />}
                    label="hier Religionsfreiheit gilt."
                  />
                  <FormControlLabel
                    value="total_earning2"
                    control={<Radio />}
                    label="die Menschen Steuern zahlen."
                  />
                  <FormControlLabel
                    value="total_earning3"
                    control={<Radio />}
                    label="die Menschen das Wahlrecht haben."
                  />
                  <FormControlLabel
                    value="total_earning4"
                    control={<Radio />}
                    label="hier Meinungsfreiheit gilt."
                  />
                </RadioGroup>
              </Grid>
              <Grid >
                <Grid container justifyContent="flex-end">
                  <Button
                    disableElevation
                    size="medium"
                    sx={{ color: 'primary', backgroundColor: theme.palette.grey[300], mr: '20px' }}
                    onClick={handleClick}
                  >
                    Check
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper >
      )}
    </>
  );
};

QuestionCard.propTypes = {
  isLoading: PropTypes.bool
};

export default QuestionCard;
