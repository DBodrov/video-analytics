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
      id: 1,
      code: '1',
      name: 'gormost_second_http',
      url: 'http://prep-app-0001.msk.mts.ru:9511',
      description: 'gormost_second_http',
      company_id: 1,
      location_id: 1,
      address: '1',
    },
    {
      id: 2,
      code: '2',
      name: 'mosengineering_http',
      url: 'http://prep-app-0001.msk.mts.ru:9513',
      description: 'mosengineering_http',
      company_id: 1,
      location_id: 1,
      address: '2',
    },
    {
      id: 3,
      code: '3',
      name: 'avantage_2_sc',
      url: 'rtsp://user:Cam12345@prep-app-0001.msk.mts.ru:9522',
      description: 'avantage_2_sc',
      company_id: 1,
      location_id: 1,
      address: '3',
    },
  ],
};
