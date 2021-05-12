import React from 'react';
import {Button} from 'neutrino-ui';
import {ThresholdForm} from './ThresholdForm';
import {NotificationForm} from './NotificationForm';
import {TabsSection, TabsList, Pane, TabContent, TabsFooter} from './styles';

type TTabsProps = {
  children: React.ReactNode;
};

export function Tabs() {
  const [activeTab, setActiveTab] = React.useState('pane-1');

  const handleTabClick = (e: React.PointerEvent<HTMLButtonElement>) => {
    const paneId = e.currentTarget.name;
    setActiveTab(paneId);
    // console.log(paneId);
  };

  return (
    <TabsSection>
      <TabsList>
        <li css={{height: '100%'}}>
          <Pane isActive={activeTab === 'pane-1'} onClick={handleTabClick} name="pane-1">
            Срабатывание инцидентов
          </Pane>
        </li>
        <li css={{height: '100%'}}>
          <Pane isActive={activeTab === 'pane-2'} onClick={handleTabClick} name="pane-2">
            Информирование
          </Pane>
        </li>
      </TabsList>
      <TabContent>{activeTab === 'pane-1' ? <ThresholdForm /> : <NotificationForm />}</TabContent>
      <TabsFooter>
        <Button variant="primary" flat css={{minHeight: 36, height: 36, fontSize: 14, width: 112, minWidth: 112}}>Сохранить</Button>
      </TabsFooter>
    </TabsSection>
  );
}
