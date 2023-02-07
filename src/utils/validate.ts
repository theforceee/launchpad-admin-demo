import { FieldErrors } from "react-hook-form";
import { RegisterInputs } from "../constants/poolDetail";

export const renderError = (
  errors: FieldErrors<RegisterInputs>,
  prop: keyof RegisterInputs,
) => {
  if (errors[prop]) {
    const errorName = prop.split("_").join(" ");
    const errorType = errors[prop]?.type;

    switch (errorType) {
      case "required": {
        return "This field is required";
      }
      case "greaterOrEqualToday": {
        return `The ${errorName} must be after current date.`;
      }
      case "greateOrEqualStartTime": {
        return "This finish time must be after the start time";
      }
      case "greaterOrEqualFinishTime": {
        return "This relase time must be after the finish time";
      }
      case "validAddress": {
        return "Address receive is invalid.";
      }
      case "invalidToken": {
        return errors[prop]?.message;
      }
      case "tokenAlreadyUsed": {
        return "Token address is already in use.";
      }
    }
  }

  return;
};
