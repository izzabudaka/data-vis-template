import React, { PureComponent } from 'react';
import {ResponsiveLine} from "nivo"

class Line extends PureComponent {
  render() {
    return (
        <ResponsiveLine
        data={[
  {
    "id": "whisky",
    "color": "hsl(189, 70%, 50%)",
    "data": [
      {
        "color": "hsl(294, 70%, 50%)",
        "x": "BG",
        "y": 23
      },
      {
        "color": "hsl(236, 70%, 50%)",
        "x": "DE",
        "y": 51
      },
      {
        "color": "hsl(351, 70%, 50%)",
        "x": "EE",
        "y": 49
      },
      {
        "color": "hsl(183, 70%, 50%)",
        "x": "MR",
        "y": 25
      },
      {
        "color": "hsl(249, 70%, 50%)",
        "x": "AO",
        "y": 32
      },
      {
        "color": "hsl(44, 70%, 50%)",
        "x": "ZM",
        "y": 11
      },
      {
        "color": "hsl(44, 70%, 50%)",
        "x": "UG",
        "y": 48
      },
      {
        "color": "hsl(100, 70%, 50%)",
        "x": "TR",
        "y": 51
      },
      {
        "color": "hsl(291, 70%, 50%)",
        "x": "HU",
        "y": 31
      }
    ]
  },
  {
    "id": "rhum",
    "color": "hsl(137, 70%, 50%)",
    "data": [
      {
        "color": "hsl(206, 70%, 50%)",
        "x": "BG",
        "y": 21
      },
      {
        "color": "hsl(283, 70%, 50%)",
        "x": "DE",
        "y": 48
      },
      {
        "color": "hsl(82, 70%, 50%)",
        "x": "EE",
        "y": 7
      },
      {
        "color": "hsl(99, 70%, 50%)",
        "x": "MR",
        "y": 5
      },
      {
        "color": "hsl(190, 70%, 50%)",
        "x": "AO",
        "y": 53
      },
      {
        "color": "hsl(169, 70%, 50%)",
        "x": "ZM",
        "y": 36
      },
      {
        "color": "hsl(79, 70%, 50%)",
        "x": "UG",
        "y": 18
      },
      {
        "color": "hsl(150, 70%, 50%)",
        "x": "TR",
        "y": 25
      },
      {
        "color": "hsl(339, 70%, 50%)",
        "x": "HU",
        "y": 38
      }
    ]
  },
  {
    "id": "gin",
    "color": "hsl(291, 70%, 50%)",
    "data": [
      {
        "color": "hsl(82, 70%, 50%)",
        "x": "BG",
        "y": 44
      },
      {
        "color": "hsl(87, 70%, 50%)",
        "x": "DE",
        "y": 48
      },
      {
        "color": "hsl(154, 70%, 50%)",
        "x": "EE",
        "y": 31
      },
      {
        "color": "hsl(129, 70%, 50%)",
        "x": "MR",
        "y": 9
      },
      {
        "color": "hsl(2, 70%, 50%)",
        "x": "AO",
        "y": 39
      },
      {
        "color": "hsl(172, 70%, 50%)",
        "x": "ZM",
        "y": 3
      },
      {
        "color": "hsl(145, 70%, 50%)",
        "x": "UG",
        "y": 6
      },
      {
        "color": "hsl(162, 70%, 50%)",
        "x": "TR",
        "y": 20
      },
      {
        "color": "hsl(160, 70%, 50%)",
        "x": "HU",
        "y": 31
      }
    ]
  },
  {
    "id": "vodka",
    "color": "hsl(81, 70%, 50%)",
    "data": [
      {
        "color": "hsl(74, 70%, 50%)",
        "x": "BG",
        "y": 15
      },
      {
        "color": "hsl(114, 70%, 50%)",
        "x": "DE",
        "y": 42
      },
      {
        "color": "hsl(221, 70%, 50%)",
        "x": "EE",
        "y": 36
      },
      {
        "color": "hsl(30, 70%, 50%)",
        "x": "MR",
        "y": 43
      },
      {
        "color": "hsl(320, 70%, 50%)",
        "x": "AO",
        "y": 54
      },
      {
        "color": "hsl(116, 70%, 50%)",
        "x": "ZM",
        "y": 26
      },
      {
        "color": "hsl(105, 70%, 50%)",
        "x": "UG",
        "y": 1
      },
      {
        "color": "hsl(127, 70%, 50%)",
        "x": "TR",
        "y": 26
      },
      {
        "color": "hsl(79, 70%, 50%)",
        "x": "HU",
        "y": 8
      }
    ]
  },
  {
    "id": "cognac",
    "color": "hsl(129, 70%, 50%)",
    "data": [
      {
        "color": "hsl(202, 70%, 50%)",
        "x": "BG",
        "y": 50
      },
      {
        "color": "hsl(10, 70%, 50%)",
        "x": "DE",
        "y": 25
      },
      {
        "color": "hsl(67, 70%, 50%)",
        "x": "EE",
        "y": 59
      },
      {
        "color": "hsl(13, 70%, 50%)",
        "x": "MR",
        "y": 30
      },
      {
        "color": "hsl(67, 70%, 50%)",
        "x": "AO",
        "y": 38
      },
      {
        "color": "hsl(299, 70%, 50%)",
        "x": "ZM",
        "y": 18
      },
      {
        "color": "hsl(82, 70%, 50%)",
        "x": "UG",
        "y": 7
      },
      {
        "color": "hsl(47, 70%, 50%)",
        "x": "TR",
        "y": 32
      },
      {
        "color": "hsl(123, 70%, 50%)",
        "x": "HU",
        "y": 0
      }
    ]
  }
]}
        margin={{
            "top": 50,
            "right": 110,
            "bottom": 50,
            "left": 60
        }}
        minY="auto"
        stacked={true}
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country code",
            "legendOffset": 36,
            "legendPosition": "center"
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "count",
            "legendOffset": -40,
            "legendPosition": "center"
        }}
        dotSize={10}
        dotColor="inherit:darker(0.3)"
        dotBorderWidth={2}
        dotBorderColor="#ffffff"
        enableDotLabel={true}
        dotLabel="y"
        dotLabelYOffset={-12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "anchor": "bottom-right",
                "direction": "column",
                "translateX": 100,
                "itemWidth": 80,
                "itemHeight": 20,
                "symbolSize": 12,
                "symbolShape": "circle"
            }
        ]}
    />
    );
  }
}

export default Line;
