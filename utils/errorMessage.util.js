export default function getFormErrorMessage(errors, name = null) {
  return errors[name] && <small className="p-error">{errors[name].message}</small>;
}
