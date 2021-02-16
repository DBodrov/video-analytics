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
        name: 'Мосинжиниринг',
        url: 'rtmp://10.72.20.113:8088/stream/0d9269c420e0376448842374d3b627b5',
        description: 'Мосинжиниринг',
        company_id: 1,
        location_id: 1,
        address: '1',
      },
      status: {id: 6, code: 'in_use', name: 'В работе', description: 'В работе'},
      metrics: {
        active_check_category_ids: [1],
        active_check_ids: [3],
        active_incident_ids: [1],
        inactive_check_ids: [],
        inactive_incident_ids: [],
      },
    },
    {
      ref: {
        id: 2,
        code: '2',
        name: 'Гормост',
        url: 'rtmp://10.72.20.113:8088/stream/0aa17cb215b5d0737dfc3d9a9c5bdba4',
        description: 'Гормост',
        company_id: 1,
        location_id: 1,
        address: '2',
      },
      status: {id: 6, code: 'in_use', name: 'В работе', description: 'В работе'},
      metrics: {
        active_check_category_ids: [],
        active_check_ids: [],
        active_incident_ids: [],
        inactive_check_ids: [],
        inactive_incident_ids: [],
      },
    },
    {
      ref: {
        id: 4,
        code: '4',
        name: 'Эталон',
        url: 'rtmp://10.72.20.113:8088/stream/8bbb5a249bfd91a80a7d632c8d748c72',
        description: 'Эталон',
        company_id: 1,
        location_id: 1,
        address: '4',
      },
      status: {id: 6, code: 'in_use', name: 'В работе', description: 'В работе'},
      metrics: {
        active_check_category_ids: [],
        active_check_ids: [],
        active_incident_ids: [],
        inactive_check_ids: [],
        inactive_incident_ids: [],
      },
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
