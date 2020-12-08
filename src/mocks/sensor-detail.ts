export const sensorDetail: any = {
  sensor: {
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
};

export const sensorStats = {
  stats: [
    {
      period: 'string',
      location_id: 0,
      sensor_id: 0,
      toc_id: 0,
      events: 10,
      incidents: 20,
    },
  ],
  //stats: [],
  period: {tz_offset: 3, start_time: '2020-12-08 00:47:15', end_time: '2020-12-09 00:47:15'},
};
