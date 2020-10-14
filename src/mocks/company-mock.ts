export const locationsMock: any = {
  locations: [
    {
      id: 0,
      code: 'undefined',
      name: 'Площадка 1',
      description: 'Площадка 1',
      company_id: 1,
      category: {
        id: 1,
        code: 'standard',
        name: 'Площадка',
        description: 'Обычная площадка',
      },
      by_default: false,
    },
    {
      id: 1,
      code: 'location1',
      name: 'Площадка 1',
      description: 'Площадка 1',
      company_id: 1,
      category: {
        id: 1,
        code: 'standard',
        name: 'Площадка',
        description: 'Обычная площадка',
      },
      by_default: false,
    },
  ],
};

export const sensorsMock: any = {
  sensors: [
    {
      ref: {
        id: 1,
        code: '1',
        name: 'gormost_second_http',
        url: 'http://prep-app-0001.msk.mts.ru:9511',
        description: 'gormost_second_http',
        company_id: 1,
        category: null,
        by_default: null,
        location_id: 1,
        address: '1',
      },
      status: {id: 6, code: 'in_use', name: 'В работе', description: 'В работе'},
      metrics: {active_checks: 1},
    },
    {
      ref: {
        id: 2,
        code: '2',
        name: 'mosengineering_http',
        url: 'http://prep-app-0001.msk.mts.ru:9513',
        description: 'mosengineering_http',
        company_id: 1,
        category: null,
        by_default: null,
        location_id: 1,
        address: '2',
      },
      status: {id: 6, code: 'in_use', name: 'В работе', description: 'В работе'},
      metrics: {active_checks: 0},
    },
    {
      ref: {
        id: 3,
        code: '3',
        name: 'avantage_2_sc',
        url: 'rtsp://user:Cam12345@prep-app-0001.msk.mts.ru:9522',
        description: 'avantage_2_sc',
        company_id: 1,
        category: null,
        by_default: null,
        location_id: 1,
        address: '3',
      },
      status: {id: 6, code: 'in_use', name: 'В работе', description: 'В работе'},
      metrics: {active_checks: 0},
    },
  ],
};


export const pipelinesMock = {
  pipelines: [
    {
      id: 1,
      company_id: 1,
      by_sensor: [
        {
          id: 1,
          detector: {id: 1, parameters: {}, model: {id: 5, parameters: {}}},
          tracker: {id: 1, parameters: {}, model: {id: 5, parameters: {}}},
          deploy: {},
          checks: [{id: 1, parameters: {}, next_ids: [], model: {id: 5, parameters: {}}}],
          incidents: [{id: 1, parameters: {}}],
        },
      ],
    },
  ],
};
