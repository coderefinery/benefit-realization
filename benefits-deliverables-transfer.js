var data = [{
    type: "sankey",
    arrangement: "snap",
    node: {
        label: [
          "[benefit] Community-driven project",            // 0
          "[benefit] Career development",                  // 1
          "[benefit] More reach",                          // 2
          "[benefit] Training portfolio",                  // 3
          "[benefit] Funding applications",                // 4
          "[benefit] Better research software",            // 5
          "[benefit] RSE collaboration",                   // 6
          "[benefit] Training efforts collaborate",        // 7
          "[deliverable] Blogs, newsletter, social media", // 8
          "[deliverable] Lessons and manuals",             // 9
          "[deliverable] Participation data",              // 10
          "[deliverable] Survey and feedback data",        // 11
          "[deliverable] GitLab",                          // 12
          "[deliverable] Source code and data",            // 13
          "[deliverable] Training",                        // 14
          "[transfer] Follow-up organization",             // 15
          "[transfer] Public",                             // 16
          "[transfer] ?",                                  // 17
        ],
        color: [
          "deepskyblue", "deepskyblue", "deepskyblue", "deepskyblue", "deepskyblue", "deepskyblue", "deepskyblue", "deepskyblue",
          "orange", "orange", "orange", "orange", "orange", "orange", "orange",
          "violet", "violet", "violet",
        ],
        x: [
          0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
          0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4,
          0.7, 0.7, 0.7,
        ],
        y: [
          0.1, 0.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
          0.1, 0.2, 0.3, 0.4, 0.6, 0.01, 0.5,
          0.1, 0.4, 0.7,
        ],
        pad: 10
    },
    link: {
        source: [
          0, 2, 6,
          0, 1, 3, 5, 6, 7,
          2,
          2,
          5,
          2, 4, 7,
          8, 9, 10, 11, 13,
          10, 11, 14,
          12,
        ],
        target: [
          8, 8, 8,
          9, 9, 9, 9, 9, 9,
          10,
          11,
          12,
          14, 14, 14,
          15, 15, 15, 15, 15,
          16, 16, 16,
          17,
        ],
        value: [
          0.3, 0.3, 0.3,
          0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
          1.0,
          1.0,
          1.0,
          0.3, 0.3, 0.3,
          0.2, 0.2, 0.2, 0.2, 0.2,
          0.3, 0.3, 0.3,
          1.0,
        ]
    }
}]

var layout = {
    "title": "mapping benefits to deliverables to recipients"
}

Plotly.newPlot('benefits-deliverables-transfer', data, layout)
