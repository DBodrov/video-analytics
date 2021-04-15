import React from 'react';
import {TriggerForm} from './TriggerForm';
import {TabsSection, TabsList, Pane, TabContent} from './styles';


type TTabsProps = {
  children: React.ReactNode;
};

export function Tabs() {
  const [activeTab, setActiveTab] = React.useState('pane-1');

  const handleTabClick = (e: React.PointerEvent<HTMLButtonElement>) => {
    const paneId = e.currentTarget.name;
    setActiveTab(paneId);
    // console.log(paneId);
  }

  return (
    <TabsSection>
      <TabsList>
        <li css={{height: '100%'}}><Pane isActive={activeTab === 'pane-1'} onClick={handleTabClick} name="pane-1">Срабатывание инцидентов</Pane></li>
        <li css={{height: '100%'}}><Pane isActive={activeTab === 'pane-2'} onClick={handleTabClick} name="pane-2">Информирование</Pane></li>
      </TabsList>
      <TabContent>
        {activeTab === 'pane-1' ? <TriggerForm /> : null}
      </TabContent>
    </TabsSection>
  );
}
