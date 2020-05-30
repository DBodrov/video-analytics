import { InterfaceToIndexed } from '@/common/types/helpers-types';
import EventEmitter from 'eventemitter3';
import { singleton } from 'tsyringe';
import { StoreEvents } from './event-bus-types';

@singleton()
export class EventBus extends EventEmitter<InterfaceToIndexed<StoreEvents>> {}
