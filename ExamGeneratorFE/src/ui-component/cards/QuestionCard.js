import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { useTheme } from '@mui/system';

// assets

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  color: '#fff',
  overflow: 'hidden'
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const QuestionCard = ({ isLoading }) => {
  const theme = useTheme();

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

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
                <RadioGroup aria-label="gender" name="gender1">
                  <FormControlLabel
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: theme.palette.secondary[200]
                    }}
                    value="total_earning1"
                    control={<Radio />}
                    label="hier Religionsfreiheit gilt."
                  />
                  <FormControlLabel
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: theme.palette.secondary[200]
                    }}
                    value="total_earning2"
                    control={<Radio />}
                    label="die Menschen Steuern zahlen."
                  />
                  <FormControlLabel
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: theme.palette.secondary[200]
                    }}
                    value="total_earning3"
                    control={<Radio />}
                    label="die Menschen das Wahlrecht haben."
                  />
                  <FormControlLabel
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: theme.palette.secondary[200]
                    }}
                    value="total_earning4"
                    control={<Radio />}
                    label="hier Meinungsfreiheit gilt."
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

QuestionCard.propTypes = {
  isLoading: PropTypes.bool
};

export default QuestionCard;
