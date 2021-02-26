import {PipelinesGetResponse200Pipelines} from '@/backend/main';
export type TStep = 'ADD_TEMPLATE' | 'RULE_ACTIVATE' | 'SET_SENSOR' | 'CONFIG_RULE';
export type TStepStatus = 'inactive' | 'active' | 'done';

export type TStepsStatuses = Record<TStep, TStepStatus>;

export type TStepConfig = Record<TStep, {title: string; description: string;}>;

export type TPipeline = PipelinesGetResponse200Pipelines;
export type TPipelines = TPipeline[];

export interface ISettingsContext {
  stepConfig: TStepConfig;
  stepsStatuses: TStepsStatuses;
  activeStep: TStep;
  currentTemplateId?: number;
  currentChecksIds?: number[];
  currentSensorsIds?: number[];
  pipelines?: TPipelines;
  fetchPipelines: () => void;
  handleSetTemplate: (templateId: number, isEnabled: boolean) => void;
  setCheckId: (checkId: number, isSelected: boolean) => void;
  setSensorId: (sensorId: number) => void;
  openSensorSettings: (ruleId?: number | undefined) => void;
  // fetchRulesByTemplateId: (templateId: number) => void;
}

export type TSettingsState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  step: TStep;
  stepStatus: TStepStatus;
  stepConfig: TStepConfig;
  stepsStatuses: TStepsStatuses;
  enabledTemplatesIds: number[];
  currentTemplateId?: number;
  currentChecksIds: number[];
  currentSensorsIds?: number[];
  pipelines?: TPipelines;
};
