import { useForm, type SubmitHandler } from 'react-hook-form';
import './App.css'

function App() {

  type  FormField = {
    email : string,
    password : string
  }

  const { register, handleSubmit , formState : { errors} } = useForm<FormField>()

  const onSubmission : SubmitHandler<FormField> = ( data) => {
      console.log(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmission)}>
        <label>Email</label>
        <input type='text' />
        <label>Password</label>
        <input type='text'/>
        <button>Login</button>
      </form>
    </>
  )
}

export default App
