import type { InternalTypescriptTemplateProperties } from './properties';

export type TypescriptTemplateInstanceOptions = unknown;

export type InternalTypescriptTemplateState<T> = {
	globalState: T;
	_coreState: T;
	_options: TypescriptTemplateInstanceOptions;
};

export type InternalTypescriptTemplateInstance<T> =
	InternalTypescriptTemplateProperties<T> & InternalTypescriptTemplateState<T>;

export type TypescriptTemplateInstance<T> = {
	[K in keyof InternalTypescriptTemplateInstance<T> as K extends `_${infer _}`
		? never
		: K]: InternalTypescriptTemplateInstance<T>[K];
};
