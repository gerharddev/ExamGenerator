// material-ui
import { Grid } from '@mui/material';
import QuestionCard from 'ui-component/cards/QuestionCard';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const ExamTrainerPage = () => (
  <MainCard title="Exam trainer">
    <Grid container>
      <Grid item xs={10}>
        <QuestionCard></QuestionCard>
      </Grid>
    </Grid>
  </MainCard>
);

export default ExamTrainerPage;
