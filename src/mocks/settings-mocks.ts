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
