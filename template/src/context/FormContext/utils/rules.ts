import { translate } from '../../../core/I18n';

export const requiredRule = (
  message: string = translate('form.rules.required'),
): { required: string } => ({
  required: message,
});
