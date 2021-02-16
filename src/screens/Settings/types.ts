export type TStep = 'ADD_TEMPLATE' | 'RULE_ACTIVATE' | 'SET_SENSOR' | 'CONFIG_RULE';
export type TStepStatus = 'inactive' | 'active' | 'done';

export type TStepsStatuses = Record<TStep, TStepStatus>;

export type TStepConfig = Record<TStep, {title: string; description: string;}>;

export interface ISettingsContext {
  stepConfig: TStepConfig;
  stepsStatuses: TStepsStatuses;
  activeStep: TStep;
  handleSetTemplate: (templateId: number) => void;
}

export type TSettingsState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  step: TStep;
  stepStatus: TStepStatus;
  stepConfig: TStepConfig;
  stepsStatuses: TStepsStatuses;
  enabledTemplatesIds: number[];
  currentTemplateId?: number;
};
