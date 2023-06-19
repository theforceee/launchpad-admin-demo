import { FieldErrors } from "react-hook-form";
import { RegisterInputs } from "../constants/poolDetail";

export const renderError: any = (
  errors: FieldErrors<RegisterInputs>,
  prop: keyof RegisterInputs,
) => {
  if (!prop || typeof prop !== "string") return "";
  const error = errors[prop];
  if (!error) return "";

  const errorName = prop.split("_").join(" ");
  const errorType = error?.type;

  switch (errorType) {
    case "maxLength":
      return error.message;
    case "required":
      return "This field is required";
    case "greaterOrEqualToday":
      return `The ${errorName} must be after current date.`;
    case "lessOrEqualEndTime":
      return "This start time must be before the end time";
    case "greaterOrEqualStartTime":
      return "This end time must be after the start time";
    case "validAddress":
      return "Address receive is invalid.";
    case "invalidToken":
      return error.message;
      case "max":
        return error.message;
    default:
      return "";
  }
};
