// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar';
import {
    TextField,
    Grid,
    makeStyles,
    Container,
    Button,
    Typography,
} from "@material-ui/core";
import Card from '@mui/material/Card';
const useStyles = makeStyles((theme) => ({
    root: {
       
        height:"300px",
        width:"350px"
    },
    padding: {
        paddingTop: theme.spacing(3),
        textAlign: "center"
    },
    bottomText:{
        bottom:"0",
        
    verticalAlign: "bottom",
    },
    relative:{
        
        verticalAlign: "bottom",
 verticalAlign: "bottom",

        
    },
    typogr:{
        height:"100px",
    },
    card:{
        display:"flex",
        justifyContent: "center",
    },
    content:{
        marginTop:"20px",
        justifyContent: "center",
        display:"flex",
        // padding:"30px",
        flexBasis: "50%",
    }

}));

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data =[
    {
      "group": "2113",
      "A": 4,
      "AColor": "hsl(105, 70%, 50%)",
      "B": 16,
      "AColor": "hsl(105, 70%, 50%)",
      "C": 1,
      "AColor": "hsl(105, 70%, 50%)",
    //   "D": 94,
    //   "DColor": "hsl(186, 70%, 50%)",
      "F": 0,
      "AColor": "hsl(105, 70%, 50%)",
      "FX": 0,
      "AColor": "hsl(105, 70%, 50%)",
      
    },
    {
      "group": "2114",
      "A": 7,
      "AColor": "hsl(105, 70%, 50%)",
      "B": 14,
      "AColor": "hsl(105, 70%, 50%)",
      "C": 2,
      "AColor": "hsl(105, 70%, 50%)",
    //   "D": 94,
    //   "DColor": "hsl(186, 70%, 50%)",
      "F": 1,
      "AColor": "hsl(105, 70%, 50%)",
      "FX": 0,
      "AColor": "hsl(105, 70%, 50%)",
    },
    {
      "group": "2115",
      "A": 5,
      "AColor": "hsl(105, 70%, 50%)",
      "B": 15,
      "AColor": "hsl(105, 70%, 50%)",
      "C": 1,
      "AColor": "hsl(105, 70%, 50%)",
    //   "D": 94,
    //   "DColor": "hsl(186, 70%, 50%)",
      "F": 0,
      "AColor": "hsl(105, 70%, 50%)",
      "FX": 0,
      "AColor": "hsl(105, 70%, 50%)",
    },
    {
      "group": "2116",
      "A": 4,
      "AColor": "hsl(105, 70%, 50%)",
      "B": 17,
      "AColor": "hsl(105, 70%, 50%)",
      "C": 3,
      "AColor": "hsl(105, 70%, 50%)",
    //   "D": 94,
    //   "DColor": "hsl(186, 70%, 50%)",
      "F": 1,
      "AColor": "hsl(105, 70%, 50%)",
      "FX": 0,
      "AColor": "hsl(105, 70%, 50%)",
    },
    
  ]
function MyResponsiveBar ()  {
    const classes = useStyles();
    return(
     <div className={classes.root}>
     <ResponsiveBar
            data={data}
            keys={['FX', 'F', 'C', 'B', 'A']}
            indexBy="group"
            colorBy='id'
            margin={{ top: 10, right: 80, bottom: 50, left: 70 }}
            padding={0.3}
            layout="horizontal"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
             colors={{ scheme: 'blues' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    // color: '#38bcb2',
                    size: 14,
                    padding: 5,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 30,
                    spacing: 5
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'students',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 1,
                tickRotation: 0,
                legend: 'Flow estimation among SIS',
                legendPosition: 'middle',
                legendOffset: -45,
             
                ticksPosition: 'before',
            }}
            labelSkipWidth={10}
            labelSkipHeight={10}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in group: " + e.indexValue; } } />
            </div>
    )
    }
export default MyResponsiveBar;