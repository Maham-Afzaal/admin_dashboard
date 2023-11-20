import { Box, Button, IconButton, Typography, useTheme,Grid } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Pie from "../../components/Pie";
import StaticsBox from "../../components/StaticsBox";
import ProgressBar from "../../components/ProgressBar";

const Dashboardss = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
       display="grid"
        sx={{mb:'20px',gridTemplateColumns:{xs:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)',xl:'repeat(4, 1fr)'},width:{xs:'50%',sm:'50%',md:'100%',lg:'100%',xl:'100%'}}}
        gridAutoRows="140px"
        gap="20px">
      <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StaticsBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StaticsBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StaticsBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StaticsBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
      <Grid
      container
      spacing={2}
      sx={{
        maxWidth: { xs: '90%', sm: '90%', md: '100%' },
      }}
    >
      {/* ROW 2 */}
      <Grid item xs={12} md={6} lg={6}> 
        {/* ROW 2 */}
        <Box
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="15px 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Statistical Analysis 
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,34.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>

        <Box
        maxHeight="300px" // Set the maximum height for 2 or 3 rows
        overflow="auto"
          backgroundColor={colors.primary[400]}
          mt={{xs:'0px',sm:'0px',lg:'25px',md:'25px',xl:'25px'}}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                maxWidth='40%'
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>

        {/* ROW 3 */}
        <Box
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Revenue Generated
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressBar size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>

        <Box
          //gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>

        <Box
          //gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Pie Based Traffic
          </Typography>
          <Box height="200px">
            <Pie isDashboard={true} />
          </Box>
        </Box>
      </Grid>
    </Grid>
    </Box>
  );
};

export default Dashboardss;