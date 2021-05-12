export const pipelinesMock = {
  pipelines: [
    {
      id: 1,
      company_id: 1,
      enabled: false,
      by_sensor: [
        {
          id: 1,
          status_id: 6,
          detector: {id: 1, parameters: {}},
          tracker: {id: 1, parameters: {}},
          deploy: {},
          checks: [
            {id: 101, enabled: true, parameters: {}, next_ids: []},
            {id: 103, enabled: true, parameters: {}, next_ids: []},
            {id: 104, enabled: true, parameters: {}, next_ids: []},
            {id: 105, enabled: true, parameters: {}, next_ids: []},
          ],
          incidents: [{id: 1, check_ids: [101], parameters: {}}],
        },
        {
          id: 2,
          status_id: 6,
          detector: {id: 1, parameters: {}},
          tracker: {id: 1, parameters: {}},
          deploy: {},
          checks: [
            {id: 101, enabled: true, parameters: {}, next_ids: []},
            {id: 103, enabled: true, parameters: {}, next_ids: []},
            {id: 104, enabled: true, parameters: {}, next_ids: []},
            {id: 105, enabled: true, parameters: {}, next_ids: []},
          ],
          incidents: [],
        },
      ],
    },
    {
      id: 2,
      company_id: 1,
      enabled: true,
      by_sensor: [
        {
          id: 2,
          status_id: 6,
          detector: {id: 1, parameters: {}},
          tracker: {id: 1, parameters: {}},
          deploy: {},
          checks: [
            {id: 101, enabled: true, parameters: {}, next_ids: []},
            {id: 103, enabled: true, parameters: {}, next_ids: []},
            {id: 104, enabled: true, parameters: {}, next_ids: []},
            {id: 105, enabled: true, parameters: {}, next_ids: []},
          ],
          incidents: [],
        },
      ],
    },
  ],
};

export const pipelineChecksMock = {
  checks: [
    {
      id: 1,
      pipeline_id: 1,
      check_id: 1,
      enabled: true,
    },
    {
      id: 2,
      pipeline_id: 1,
      check_id: 101,
      enabled: false,
    },
  ],
};

export const pipelineSensorCheck = {
  id: 0,
  enabled: true,
  parameters: {},
  markup: {
    polygons: [
      [
        {x: 0.2625, y: 0.2153846153846154, sequence: 0},
        {x: 0.5145833333333333, y: 0.2153846153846154, sequence: 1},
        {x: 0.5145833333333333, y: 0.6285714285714286, sequence: 2},
        {x: 0.2625, y: 0.6285714285714286, sequence: 3},
      ],
      [
        {x: 0.6041666666666666, y: 0.2, sequence: 0},
        {x: 0.8489583333333334, y: 0.2, sequence: 1},
        {x: 0.8489583333333334, y: 0.5538461538461539, sequence: 2},
        {x: 0.6041666666666666, y: 0.5538461538461539, sequence: 3},
      ],
      [
        {x: 0.065625, y: 0.1054945054945055, sequence: 0},
        {x: 0.071875, y: 0.6153846153846154, sequence: 1},
      ],
      [
        {x: 0.140625, y: 0.17142857142857143, sequence: 0},
        {x: 0.13854166666666667, y: 0.5868131868131868, sequence: 1},
      ],
    ],
  },
};
