import * as yup from "yup";

const RegFormSchema = yup.object().shape({
  first_name: yup.string().required("You must enter a first name"),
  last_name: yup.string().required("You must enter a last name"),
  username: yup.string().required("You must choose a user name"),
  password: yup.string().max(50).required("You must choose a password"),
});

export default RegFormSchema;
