import * as yup from "yup";

export const registerSchema = yup.object().shape({
    mainTask: yup
    .string()
    .required("This field is required."),

    estimatedHours: yup
    .string()
    .required("This field is required."),

    assignedTo: yup
    .string()
    .required("This field is required."),

    progress: yup
    .string()
    .required("This field is required."),

    startDate: yup
    .string()
    .required("This field is required."),

    subTask: yup
    .string()
    .required("This field is required."),
});