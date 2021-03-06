import React, { PureComponent } from 'react';
import {ResponsiveSunburst} from "nivo"

class SunBurst extends PureComponent {


  render() {
    return (
        <ResponsiveSunburst
            data={{
  "name": "nivo",
  "color": "hsl(247, 70%, 50%)",
  "children": [
    {
      "name": "viz",
      "color": "hsl(131, 70%, 50%)",
      "children": [
        {
          "name": "stack",
          "color": "hsl(57, 70%, 50%)",
          "children": [
            {
              "name": "chart",
              "color": "hsl(14, 70%, 50%)",
              "loc": 2903
            },
            {
              "name": "xAxis",
              "color": "hsl(150, 70%, 50%)",
              "loc": 88181
            },
            {
              "name": "yAxis",
              "color": "hsl(130, 70%, 50%)",
              "loc": 99849
            },
            {
              "name": "layers",
              "color": "hsl(159, 70%, 50%)",
              "loc": 155936
            }
          ]
        },
        {
          "name": "pie",
          "color": "hsl(175, 70%, 50%)",
          "children": [
            {
              "name": "chart",
              "color": "hsl(240, 70%, 50%)",
              "children": [
                {
                  "name": "pie",
                  "color": "hsl(345, 70%, 50%)",
                  "children": [
                    {
                      "name": "outline",
                      "color": "hsl(115, 70%, 50%)",
                      "loc": 192888
                    },
                    {
                      "name": "slices",
                      "color": "hsl(147, 70%, 50%)",
                      "loc": 154566
                    },
                    {
                      "name": "bbox",
                      "color": "hsl(278, 70%, 50%)",
                      "loc": 127464
                    }
                  ]
                },
                {
                  "name": "donut",
                  "color": "hsl(177, 70%, 50%)",
                  "loc": 9738
                },
                {
                  "name": "gauge",
                  "color": "hsl(209, 70%, 50%)",
                  "loc": 4789
                }
              ]
            },
            {
              "name": "legends",
              "color": "hsl(221, 70%, 50%)",
              "loc": 124182
            }
          ]
        }
      ]
    },
    {
      "name": "colors",
      "color": "hsl(258, 70%, 50%)",
      "children": [
        {
          "name": "rgb",
          "color": "hsl(218, 70%, 50%)",
          "loc": 77990
        },
        {
          "name": "hsl",
          "color": "hsl(172, 70%, 50%)",
          "loc": 125171
        }
      ]
    },
    {
      "name": "utils",
      "color": "hsl(343, 70%, 50%)",
      "children": [
        {
          "name": "randomize",
          "color": "hsl(75, 70%, 50%)",
          "loc": 137883
        },
        {
          "name": "resetClock",
          "color": "hsl(41, 70%, 50%)",
          "loc": 173063
        },
        {
          "name": "noop",
          "color": "hsl(35, 70%, 50%)",
          "loc": 44191
        },
        {
          "name": "tick",
          "color": "hsl(119, 70%, 50%)",
          "loc": 98023
        },
        {
          "name": "forceGC",
          "color": "hsl(152, 70%, 50%)",
          "loc": 61954
        },
        {
          "name": "stackTrace",
          "color": "hsl(246, 70%, 50%)",
          "loc": 191204
        },
        {
          "name": "dbg",
          "color": "hsl(177, 70%, 50%)",
          "loc": 81170
        }
      ]
    },
    {
      "name": "generators",
      "color": "hsl(228, 70%, 50%)",
      "children": [
        {
          "name": "address",
          "color": "hsl(120, 70%, 50%)",
          "loc": 135939
        },
        {
          "name": "city",
          "color": "hsl(353, 70%, 50%)",
          "loc": 196012
        },
        {
          "name": "animal",
          "color": "hsl(323, 70%, 50%)",
          "loc": 142433
        },
        {
          "name": "movie",
          "color": "hsl(335, 70%, 50%)",
          "loc": 31515
        },
        {
          "name": "user",
          "color": "hsl(124, 70%, 50%)",
          "loc": 422
        }
      ]
    },
    {
      "name": "set",
      "color": "hsl(276, 70%, 50%)",
      "children": [
        {
          "name": "clone",
          "color": "hsl(181, 70%, 50%)",
          "loc": 191326
        },
        {
          "name": "intersect",
          "color": "hsl(166, 70%, 50%)",
          "loc": 165077
        },
        {
          "name": "merge",
          "color": "hsl(47, 70%, 50%)",
          "loc": 47150
        },
        {
          "name": "reverse",
          "color": "hsl(97, 70%, 50%)",
          "loc": 53322
        },
        {
          "name": "toArray",
          "color": "hsl(213, 70%, 50%)",
          "loc": 42096
        },
        {
          "name": "toObject",
          "color": "hsl(165, 70%, 50%)",
          "loc": 96243
        },
        {
          "name": "fromCSV",
          "color": "hsl(300, 70%, 50%)",
          "loc": 15179
        },
        {
          "name": "slice",
          "color": "hsl(180, 70%, 50%)",
          "loc": 140452
        },
        {
          "name": "append",
          "color": "hsl(126, 70%, 50%)",
          "loc": 122108
        },
        {
          "name": "prepend",
          "color": "hsl(302, 70%, 50%)",
          "loc": 79569
        },
        {
          "name": "shuffle",
          "color": "hsl(173, 70%, 50%)",
          "loc": 159995
        },
        {
          "name": "pick",
          "color": "hsl(47, 70%, 50%)",
          "loc": 95903
        },
        {
          "name": "plouc",
          "color": "hsl(245, 70%, 50%)",
          "loc": 165091
        }
      ]
    },
    {
      "name": "text",
      "color": "hsl(49, 70%, 50%)",
      "children": [
        {
          "name": "trim",
          "color": "hsl(323, 70%, 50%)",
          "loc": 169524
        },
        {
          "name": "slugify",
          "color": "hsl(220, 70%, 50%)",
          "loc": 89761
        },
        {
          "name": "snakeCase",
          "color": "hsl(140, 70%, 50%)",
          "loc": 163981
        },
        {
          "name": "camelCase",
          "color": "hsl(287, 70%, 50%)",
          "loc": 153779
        },
        {
          "name": "repeat",
          "color": "hsl(110, 70%, 50%)",
          "loc": 158743
        },
        {
          "name": "padLeft",
          "color": "hsl(251, 70%, 50%)",
          "loc": 97082
        },
        {
          "name": "padRight",
          "color": "hsl(320, 70%, 50%)",
          "loc": 116097
        },
        {
          "name": "sanitize",
          "color": "hsl(150, 70%, 50%)",
          "loc": 184098
        },
        {
          "name": "ploucify",
          "color": "hsl(235, 70%, 50%)",
          "loc": 52051
        }
      ]
    },
    {
      "name": "misc",
      "color": "hsl(340, 70%, 50%)",
      "children": [
        {
          "name": "whatever",
          "color": "hsl(356, 70%, 50%)",
          "children": [
            {
              "name": "hey",
              "color": "hsl(86, 70%, 50%)",
              "loc": 78703
            },
            {
              "name": "WTF",
              "color": "hsl(249, 70%, 50%)",
              "loc": 83968
            },
            {
              "name": "lol",
              "color": "hsl(145, 70%, 50%)",
              "loc": 147749
            },
            {
              "name": "IMHO",
              "color": "hsl(315, 70%, 50%)",
              "loc": 188313
            }
          ]
        },
        {
          "name": "other",
          "color": "hsl(216, 70%, 50%)",
          "loc": 134090
        },
        {
          "name": "crap",
          "color": "hsl(118, 70%, 50%)",
          "children": [
            {
              "name": "crapA",
              "color": "hsl(305, 70%, 50%)",
              "loc": 191558
            },
            {
              "name": "crapB",
              "color": "hsl(232, 70%, 50%)",
              "children": [
                {
                  "name": "crapB1",
                  "color": "hsl(132, 70%, 50%)",
                  "loc": 188590
                },
                {
                  "name": "crapB2",
                  "color": "hsl(211, 70%, 50%)",
                  "loc": 110998
                },
                {
                  "name": "crapB3",
                  "color": "hsl(9, 70%, 50%)",
                  "loc": 30903
                },
                {
                  "name": "crapB4",
                  "color": "hsl(109, 70%, 50%)",
                  "loc": 184018
                }
              ]
            },
            {
              "name": "crapC",
              "color": "hsl(311, 70%, 50%)",
              "children": [
                {
                  "name": "crapC1",
                  "color": "hsl(313, 70%, 50%)",
                  "loc": 86907
                },
                {
                  "name": "crapC2",
                  "color": "hsl(165, 70%, 50%)",
                  "loc": 49408
                },
                {
                  "name": "crapC3",
                  "color": "hsl(5, 70%, 50%)",
                  "loc": 185180
                },
                {
                  "name": "crapC4",
                  "color": "hsl(44, 70%, 50%)",
                  "loc": 85213
                },
                {
                  "name": "crapC5",
                  "color": "hsl(296, 70%, 50%)",
                  "loc": 130662
                },
                {
                  "name": "crapC6",
                  "color": "hsl(335, 70%, 50%)",
                  "loc": 51595
                },
                {
                  "name": "crapC7",
                  "color": "hsl(271, 70%, 50%)",
                  "loc": 104501
                },
                {
                  "name": "crapC8",
                  "color": "hsl(141, 70%, 50%)",
                  "loc": 35961
                },
                {
                  "name": "crapC9",
                  "color": "hsl(87, 70%, 50%)",
                  "loc": 33367
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}}
            margin={{
                "top": 40,
                "right": 20,
                "bottom": 20,
                "left": 20
            }}
            identity="name"
            value="loc"
            cornerRadius={2}
            borderWidth={1}
            borderColor="white"
            colors="nivo"
            colorBy="id"
            childColor="inherit"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
        />
    );
  }
}

export default SunBurst;
