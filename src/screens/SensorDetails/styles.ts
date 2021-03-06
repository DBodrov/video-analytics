import styled from '@emotion/styled';

export const CameraBox = styled.div`
  display: grid;
  grid-template: 570px / 920px minmax(350px, 1fr);
  background-color: var(--color-form);
  margin-bottom: 30px;
`;

export const CameraInfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 110px 120px auto 1fr;
`;
