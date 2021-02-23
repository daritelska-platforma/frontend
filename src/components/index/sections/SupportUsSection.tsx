import { Grid, Typography, Box } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import FinancesIcon from '../../icons/support-us-icons/FinancesIcon'
import LabourIcon from '../../icons/support-us-icons/LabourIcon'
import MediaIcon from '../../icons/support-us-icons/MediaIcon'
import PartnershipIcon from '../../icons/support-us-icons/PartnershipIcon'

const useStyles = makeStyles((theme) =>
  createStyles({
    icon: {
      fontSize: theme.spacing(10),
      fill: 'none'
    },
  }),
)

export default function SupportUsSection() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box component="section" mb={10} textAlign="center">
      <Typography variant="h5" paragraph>
        {t('index:support-us-section.heading')}
      </Typography>
      <Grid container direction="row">
        <Box display="flex" justifyContent="space-between" flexWrap="wrap" width="100%">
          <Box textAlign="center">
            <FinancesIcon className={classes.icon}/>
            <Typography variant="subtitle1" paragraph>
              {t('index:support-us-section.financial-support')}
            </Typography>
          </Box>
          <Box textAlign="center">
            <LabourIcon className={classes.icon}/>
            <Typography variant="subtitle1" paragraph>
              {t('index:support-us-section.labour-support')}
            </Typography>
          </Box>
          <Box textAlign="center">
            <MediaIcon className={classes.icon}/>
            <Typography variant="subtitle1" paragraph>
              {t('index:support-us-section.media-support')}
            </Typography>
          </Box>
          <Box textAlign="center">
            <PartnershipIcon className={classes.icon}/>
            <Typography variant="subtitle1" paragraph>
              {t('index:support-us-section.become-a-partner')}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}