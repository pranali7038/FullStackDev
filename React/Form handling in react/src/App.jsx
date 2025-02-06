import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onSubmit(data) {

    await new Promise((resolve)  =>setTimeout(resolve,5000));
    console.log("Submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> First Name </label>
        <input
          className={errors.firstName ? 'input-err' : ""}
          {...register('firstName', {
            required: "First name is required",
            maxLength: { value: 6, message: "Max length is 6" },
            minLength: { value: 3, message: "Min length is 3" },
          })}
        />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>

      <div>
        <label> Middle Name </label>
        <input {...register('middleName')} />
      </div>

      <div>
        <label> Last Name </label>
        <input
          className={errors.lastName ? 'input-err' : ""}
          {...register('lastName', {
            required: "Last name is required",
            maxLength: { value: 6, message: "Max length is 6" },
            minLength: { value: 3, message: "Min length is 3" },
          })}
        />
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>

      <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting  ? "Submitting":"submit"}/>
    </form>
  );
}

export default App;
