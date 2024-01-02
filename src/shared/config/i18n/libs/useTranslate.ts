import { useTranslation } from 'react-i18next';
import { Layer } from '../types';


export const useTranslate = (type: string | null = null, layer: Layer[] = [],) => {
	const { t } = useTranslation(type);
	const translation: Record<string, any> = {};

	layer && layer.map((arg: Layer) => {
		const typeArg = typeof (arg) === 'object';
		const translateKey: string = String(typeArg ? arg[0] : arg);
		const returnObjects: boolean = Boolean(typeArg && arg[1] ? arg[1] : false);

		return translation[translateKey] = t(translateKey, { returnObjects });
	});


	return { translation, type };

};