import * as yup from "yup";

const RegFormSchema = yup.object().shape({
  first_name: yup.string().min(3).required("You must enter a name"),
  last_name: yup.string().required("You must enter a username"),
  username: yup.string().required("You must enter an email address"),
  password: yup.string().max(50).required("You must enter a password"),
});

export default RegFormSchema;
