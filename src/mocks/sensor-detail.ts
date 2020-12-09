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
    {period: '2020-12-08 14:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 1, incidents: 1},
    {period: '2020-12-08 18:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 3, incidents: 3},
    {period: '2020-12-08 16:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 70, incidents: 68},
    {period: '2020-12-09 04:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 1, incidents: 1},
    {period: '2020-12-08 21:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 2, incidents: 2},
    {period: '2020-12-09 07:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 13, incidents: 13},
    {period: '2020-12-08 15:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 97, incidents: 65},
    {period: '2020-12-08 12:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 7, incidents: 7},
    {period: '2020-12-09 02:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 2, incidents: 2},
    {period: '2020-12-09 01:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 1, incidents: 1},
    {period: '2020-12-08 13:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 1, incidents: 1},
    {period: '2020-12-08 23:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 1, incidents: 1},
    {period: '2020-12-08 19:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 5, incidents: 5},
    {period: '2020-12-09 08:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 2, incidents: 2},
    {period: '2020-12-08 17:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 4, incidents: 4},
    {period: '2020-12-08 22:00:00', location_id: 1, sensor_id: 1, toc_id: 9, events: 5, incidents: 5},
  ],
  period: {tz_offset: 3, start_time: '2020-12-08 11:51:39', end_time: '2020-12-09 11:51:39'},
};
