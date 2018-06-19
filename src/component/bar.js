import React, { PureComponent } from 'react';
import {ResponsiveBar} from "nivo"

class Bar extends PureComponent {
  render() {
    return (
        <ResponsiveBar
        data={[
  {
    "country": "AD",
    "hot dog": 149,
    "hot dogColor": "hsl(224, 70%, 50%)",
    "burger": 53,
    "burgerColor": "hsl(326, 70%, 50%)",
    "sandwich": 190,
    "sandwichColor": "hsl(148, 70%, 50%)",
    "kebab": 80,
    "kebabColor": "hsl(252, 70%, 50%)",
    "fries": 89,
    "friesColor": "hsl(8, 70%, 50%)",
    "donut": 200,
    "donutColor": "hsl(270, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 5,
    "hot dogColor": "hsl(134, 70%, 50%)",
    "burger": 56,
    "burgerColor": "hsl(118, 70%, 50%)",
    "sandwich": 31,
    "sandwichColor": "hsl(267, 70%, 50%)",
    "kebab": 15,
    "kebabColor": "hsl(79, 70%, 50%)",
    "fries": 124,
    "friesColor": "hsl(206, 70%, 50%)",
    "donut": 119,
    "donutColor": "hsl(239, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 122,
    "hot dogColor": "hsl(213, 70%, 50%)",
    "burger": 194,
    "burgerColor": "hsl(138, 70%, 50%)",
    "sandwich": 156,
    "sandwichColor": "hsl(346, 70%, 50%)",
    "kebab": 19,
    "kebabColor": "hsl(74, 70%, 50%)",
    "fries": 92,
    "friesColor": "hsl(32, 70%, 50%)",
    "donut": 66,
    "donutColor": "hsl(80, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 40,
    "hot dogColor": "hsl(293, 70%, 50%)",
    "burger": 13,
    "burgerColor": "hsl(174, 70%, 50%)",
    "sandwich": 70,
    "sandwichColor": "hsl(278, 70%, 50%)",
    "kebab": 89,
    "kebabColor": "hsl(136, 70%, 50%)",
    "fries": 104,
    "friesColor": "hsl(241, 70%, 50%)",
    "donut": 60,
    "donutColor": "hsl(155, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 70,
    "hot dogColor": "hsl(269, 70%, 50%)",
    "burger": 158,
    "burgerColor": "hsl(347, 70%, 50%)",
    "sandwich": 42,
    "sandwichColor": "hsl(259, 70%, 50%)",
    "kebab": 48,
    "kebabColor": "hsl(9, 70%, 50%)",
    "fries": 37,
    "friesColor": "hsl(155, 70%, 50%)",
    "donut": 123,
    "donutColor": "hsl(133, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 121,
    "hot dogColor": "hsl(150, 70%, 50%)",
    "burger": 14,
    "burgerColor": "hsl(143, 70%, 50%)",
    "sandwich": 34,
    "sandwichColor": "hsl(260, 70%, 50%)",
    "kebab": 103,
    "kebabColor": "hsl(93, 70%, 50%)",
    "fries": 25,
    "friesColor": "hsl(308, 70%, 50%)",
    "donut": 188,
    "donutColor": "hsl(241, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 91,
    "hot dogColor": "hsl(348, 70%, 50%)",
    "burger": 177,
    "burgerColor": "hsl(62, 70%, 50%)",
    "sandwich": 73,
    "sandwichColor": "hsl(38, 70%, 50%)",
    "kebab": 141,
    "kebabColor": "hsl(123, 70%, 50%)",
    "fries": 90,
    "friesColor": "hsl(70, 70%, 50%)",
    "donut": 98,
    "donutColor": "hsl(55, 70%, 50%)"
  }
]}
        keys={[
            "hot dog",
            "burger",
            "sandwich",
            "kebab",
            "fries",
            "donut"
        ]}
        indexBy="country"
        margin={{
            "top": 50,
            "right": 130,
            "bottom": 50,
            "left": 60
        }}
        padding={0.3}
        colors="nivo"
        colorBy="id"
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "#38bcb2",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "#eed312",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
        fill={[
            {
                "match": {
                    "id": "fries"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "sandwich"
                },
                "id": "lines"
            }
        ]}
        borderColor="inherit:darker(1.6)"
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country",
            "legendPosition": "center",
            "legendOffset": 36
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "food",
            "legendPosition": "center",
            "legendOffset": -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "dataFrom": "keys",
                "anchor": "bottom-right",
                "direction": "column",
                "translateX": 120,
                "itemWidth": 100,
                "itemHeight": 20,
                "itemsSpacing": 2,
                "symbolSize": 20
            }
        ]}
        theme={{
            "tooltip": {
                "container": {
                    "fontSize": "13px"
                }
            },
            "labels": {
                "textColor": "#555"
            }
        }}
    />
    );
  }
}

export default Bar;
