import * as yup from "yup";

const RegFormSchema = yup.object().shape({
  name: yup.string().min(3).required("You must enter a name"),
  username: yup.string().required("You must enter a username"),
  email: yup.string().required("You must enter an email address"),
  password: yup.string().max(50).required("You must enter a password"),
});

export default RegFormSchema;
