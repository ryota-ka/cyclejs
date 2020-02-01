import {MemoryStream, Stream} from 'xstream';
import {PreventDefaultOpt} from './fromEvent';
import {MainDOMSource} from './MainDOMSource';
import {DocumentDOMSource} from './DocumentDOMSource';
import {BodyDOMSource} from './BodyDOMSource';

export interface EventsFnOptions {
  useCapture?: boolean;
  passive?: boolean;
  bubbles?: boolean;
  preventDefault?: PreventDefaultOpt;
}

export interface DOMSource {
  select(selector: string): DOMSource;
  elements(): MemoryStream<
    Array<Document> | Array<HTMLBodyElement> | Array<Element> | string
  >;
  element(): MemoryStream<Document | HTMLBodyElement | Element | string>;
  events<K extends keyof HTMLElementEventMap>(
    eventType: K,
    options?: EventsFnOptions,
    bubbles?: boolean
  ): Stream<HTMLElementEventMap[K]>;
  events(eventType: string, options?: EventsFnOptions): Stream<Event>;
}
