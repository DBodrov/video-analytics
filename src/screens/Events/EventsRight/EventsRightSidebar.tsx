import React from 'react';
import {
  SidebarTextTitle,
  SidebarTextSubTitle,
  RightSidebar,
  IncidentText,
  ChartsWrapper,
  ChartContainer,
  ChartBlock,
  ChartTextContainer,
  ChartTextTitle,
  SidebarTextMeta,
  SidebarBlockWrapper,
  IncidentRow,
  ImageWrapper,
} from './styles';
import {IncidentsDailyChart} from './components';
import {CircleChart} from '@/components';
import {useSensorsStats} from './use-sensors-stats';

export function EventsRightSidebar() {
  const {
    totalStats,
    counts,
    fetchSensorsStats,
    isIdle,
    isError,
    isLoading,
    isSuccess,
    error,
    totalIncidents,
  } = useSensorsStats();

  React.useEffect(() => {
    if (!counts) {
      fetchSensorsStats();
    }
  }, [counts, fetchSensorsStats]);

  if (isIdle || isLoading) {
    return (
      <div>
        <span>Получаем статистику...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <div></div>
        <span css={{color: 'var(--color-secondary)'}}>{error.message}</span>
      </div>
    );
  }

  if (isSuccess) {
    const inOutPercent = totalStats
      ? (totalStats?.allIncidents / (totalStats?.allIncidents + totalStats.allEvents)) * 100
      : 0;

    return (
      <RightSidebar>
        <ChartsWrapper>
          <SidebarTextTitle>Суммарно за 1 день</SidebarTextTitle>
          <ChartContainer>
            <ChartBlock>
              <CircleChart color="#2498f1" emptyColor="var(--color-mts)" percent={inOutPercent} />
            </ChartBlock>
            <ChartTextContainer>
              <ChartTextTitle>
                {totalStats?.allEvents} / {totalStats?.allIncidents}
              </ChartTextTitle>
              <SidebarTextMeta>События / Инциденты</SidebarTextMeta>
            </ChartTextContainer>
          </ChartContainer>
        </ChartsWrapper>
        <SidebarBlockWrapper>
          <SidebarTextTitle>Инциденты</SidebarTextTitle>
          <SidebarTextMeta>Активность за сутки</SidebarTextMeta>
          <IncidentsDailyChart incidentsCounts={totalIncidents} />
        </SidebarBlockWrapper>
        <SidebarBlockWrapper>
          <SidebarTextTitle>Последние инциденты</SidebarTextTitle>

          <IncidentRow>
            <ImageWrapper>
              <img
                alt="thumb"
                style={{maxWidth: '100%', borderRadius: '4px'}}
                src="data:image/gif;base64, /9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAA0AFwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDkYvDd9GxlaAQ/KWDuwAH09aT7NO5QYEjlivy56ivVp/CrpbW9zpgi3XFnCZhOchQUILAnvmsSzkt7W1juXyrJcyff2/MP50AcqmjXi2M100DIi5CBwwLkYzjjHeqA0u4RoZ2YRJJgDOVGeen5V1uo+IftJZVBCZYdeDnBP9axLmczxRQyKCkXKe3+eaAK97bg27wPJkq6EHjpz3rPGmq8jyblRWYlVycL/WrDt+8Ut0z1JqxbB7Z5FWUsB1+XH86ANixe6FjGFhiZVXAfcRu96f599uwIIz/wKsttRugNokYL0Apo1K6Tne340Aa5ub1eDZIf+BVFcz3jRHGlKx/3s1ktrF2WJLGmHX75TgOSO/AoAyJ7c3RmumWOORGIeJBjHvzWWSAeuPpV+/uJLm4zKB7AKB/Kq72rKxBKk+zCkI9GbxFcy2tpCJmIgjVd307H86x7m5aQ7d+VOTg+prPt7iaMn5cg84Kmp47pA5MsbNnptfaR+lMYiRyuQqRlyecAVq2mi3Nyqmf9wozyev5U61120t0AFo4P97eCT9anPie0PBSZf+Aj/GgCePRLGAqWXe6nIJPOasNEjfKsS4+lU7K4TU7154g/lxx7QSMZJPNa6KFHHWgCqtjEo+aNefaq8umQyHCoB+daROTgVNHFxQBz7eH5HyUER9jkVSk8P3YJxFGPoxFdhzG1PIWReOtAHnN14b1CQMUtySnPGOfpzWJtVWZZRhwcEGvXMGJs1GyWTsWktImY9WMYOaAODieLbwx/A04srMQHYH3q4tx5a7bnS4VPum008XemkAS6cD2yHOaAKYijYZIB/DFRQ6bc3F0sKxlSxwM+/wD9atq1Oj3G9EilifaSuXOP51qaXpwsJJJ5n3Nny4/pQBNBBFZRJYxD/VICzepJ/wDrVL14HSq1uWdmdzksinP4mrQoAkjQZq0uBUEfAz61YQHueKABkVl9DVZg6NVskk9se9IyhhggUAQrIrjD014Bu4bApssRTkciqjXTKcc/nQBsyQx3OkTRyoGUoeo6cdRXmL9aKKALFkB5w/D+Yrsrr/l3/wCuo/kaKKAKtr93/gK/1q0nJFFFAFmPlqsZ7UUUABOBmmmQgjpRRQBE0hMrLgYxmsy4A840UUAf/9k="
              />
            </ImageWrapper>
            <div>
              <SidebarTextSubTitle>Отсутствуют перчатки</SidebarTextSubTitle>
              <IncidentText>
                <span>09:22 | </span>
                <span>09 июня 2020</span>
              </IncidentText>
            </div>
          </IncidentRow>
        </SidebarBlockWrapper>
      </RightSidebar>
    );
  }
  return <span>Unknown status</span>;
}
