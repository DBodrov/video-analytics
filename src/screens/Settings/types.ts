import {PipelinesGetResponse200Pipelines} from '@/backend/main';
export type TStep = 'ADD_TEMPLATE' | 'RULE_ACTIVATE' | 'SET_SENSOR' | 'CONFIG_RULE';
export type TStepStatus = 'inactive' | 'active' | 'done';

export type TStepsStatuses = Record<TStep, TStepStatus>;

export type TPipeline = PipelinesGetResponse200Pipelines;
export type TPipelines = TPipeline[];

export type TPolygons = {
  x: number;
  y: number;
  sequence: number;
}[][];

export interface ISettingsContext {
  stepsStatuses: TStepsStatuses;
  activeStep: TStep;
  currentTemplateId?: number;
  currentChecksIds?: number[];
  currentSensorsIds?: number[];
  pipelines?: TPipelines;
  fetchPipelines: () => void;
  handleSetTemplate: (templateId: number, isEnabled: boolean) => void;
  setCheckId: (checkId: number, isSelected: boolean) => void;
  setSensorId: (sensorId: number, isSelected: boolean) => void;
  openSensorSettings: (ruleId?: number | undefined) => void;
  openRuleEditor: () => void;
}

export type TSettingsState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  step: TStep;
  stepStatus: TStepStatus;
  stepsStatuses: TStepsStatuses;
  enabledTemplatesIds: number[];
  currentTemplateId?: number;
  currentChecksIds: number[];
  currentSensorsIds: number[];
  pipelines?: TPipelines;
};
