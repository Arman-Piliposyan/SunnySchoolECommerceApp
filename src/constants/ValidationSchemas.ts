import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    .oneOf([yup.ref('password'), null], 'Please enter identical passwords')
    .required('Required*'),
  imageUrl: yup.string().url().required('Required*'),
  email: yup.string().email().required('Required*'),
  phone: yup.string().min(12).required('Required*'),
  firstName: yup.string().required('Required*'),
  password: yup.string().required('Required*'),
  lastName: yup.string().required('Required*'),
});

export const SignInSchema = yup.object().shape({
  email: yup.string().email().required('Required*'),
  password: yup.string().required('Required*'),
});

export const ProfileSchema = yup.object().shape({
  imageUrl: yup.string().url().required('Required*'),
  email: yup.string().email().required('Required*'),
  phone: yup.string().min(12).required('Required*'),
  firstName: yup.string().required('Required*'),
  lastName: yup.string().required('Required*'),
});

export const AddProductSchema = yup.object().shape({
  price: yup
    .number()
    .min(1, 'Hey! Your duration must be greater than or equal to 1!')
    .typeError('Required*')
    .required('Required*'),
  imageUrl: yup.string().url().required('Required*'),
  description: yup.string().required('Required*'),
  title: yup.string().required('Required*'),
});
