var data = [{
    type: "sankey",
    arrangement: "snap",
    node: {
        label: [
          "[change] Report to the public",               // 0
          "[change] Community-steered governance",       // 1
          "[change] Easier contribution and onboarding", // 2
          "[change] Citable output",                     // 3
          "[change] Large-scale workshops",              // 4
          "[change] Multiplier effect",                  // 5
          "[change] International collaboration",        // 6
          "[change] Co-organized workshops",             // 7
          "[change] Reusable output",                    // 8
          "[benefit] Community-driven project",          // 9
          "[benefit] Career development",                // 10
          "[benefit] More reach",                        // 11
          "[benefit] Training portfolio",                // 12
          "[benefit] Funding applications",              // 13
          "[benefit] Better research software",          // 14
          "[benefit] RSE collaboration",                 // 15
          "[benefit] Training efforts collaborate",      // 16
          "[metric] Participation stats",                // 17
          "[metric] Citations",                          // 18
          "[metric] Number of applications",             // 19
          "[metric] Usage stats",                        // 20
          "[metric] Survey data",                        // 21
          "[metric] Feedback data",                      // 22
          "[metric] Testimonials",                       // 23
          "[metric] Workshop stats",                     // 24
        ],
        color: [
          "darkred", "darkred", "darkred", "darkred", "darkred", "darkred", "darkred", "darkred", "darkred",
          "deepskyblue", "deepskyblue", "deepskyblue", "deepskyblue", "deepskyblue", "deepskyblue", "deepskyblue", "deepskyblue",
          "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua",
        ],
        x: [
          0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
          0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4,
          0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7,
        ],
        y: [
          0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
          0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,
          0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1.0, 1.15,
        ],
        pad: 10
    },
    link: {
        source: [
          0, 1, 2,
          2, 3,
          4, 5,
          5, 6,
          6,
          7,
          7,
          7, 8,
          9, 11, 12, 16,
          10, 11, 12, 16,
          11, 13,
          11, 14,
          11, 14,
          11, 14,
          11, 14,
          9, 11, 12, 15, 16,
        ],
        target: [
          9, 9, 9,
          10, 10,
          11, 11,
          12, 12,
          13,
          14,
          15,
          16, 16,
          17, 17, 17, 17,
          18, 18, 18, 18,
          19, 19,
          20, 20,
          21, 21,
          22, 22,
          23, 23,
          24, 24, 24, 24, 24,
        ],
        value: [
          0.3, 0.3, 0.3,
          0.5, 0.5,
          0.5, 0.5,
          0.5, 0.5,
          1.0,
          1.0,
          1.0,
          0.5, 0.5,
          0.25, 0.25, 0.25, 0.25,
          0.25, 0.25, 0.25, 0.25,
          0.5, 0.5,
          0.5, 0.5,
          0.5, 0.5,
          0.5, 0.5,
          0.5, 0.5,
          0.2, 0.2, 0.2, 0.2, 0.2,
        ]
    }
}]

var layout = {
    "title": "mapping changes to benefits to metrics"
}

Plotly.newPlot('changes-benefits-metrics', data, layout)
