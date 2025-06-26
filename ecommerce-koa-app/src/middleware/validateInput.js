import * as yup from 'yup';

const productSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().positive().required(),
  description: yup.string().required(),
  product: yup.string().required(),
  color: yup.string().required(),
  image: yup.string().url().required(),
});

export const validateProductCreation = async (req, res, next) => {
  try {
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const validateProductUpdate = async (req, res, next) => {
  try {
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};