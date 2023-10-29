import * as yup from 'yup';

export const itemFormSchema = yup.object().shape({
    item: yup.string().required('Item is required')
});