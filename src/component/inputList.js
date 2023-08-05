import '../style/style.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function InputList({ AddData }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleAddData = (data) => {
    if (data.firstName.trim() !== '' && data.lastName.trim() !== '' && data.email.trim() !== '' && data.age.trim() !== '') {
      AddData(data.firstName, data.lastName, data.email, data.age);
      reset();
    }
  };

  const onSubmit = (data) => {
    handleAddData(data);
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setAge('');
  };

  return (
    <div className='inputList'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", { required: true })}
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <input
          {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <input
          {...register("email", { required: true })}
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          {...register("age", { required: true })}
          type='number'
          placeholder='Your Age'
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />

        <button style={{ width: 60 }} className='blueButton' type="submit">
          Add
        </button>

        <button style={{ width: 60 }} className='redButton' type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <div className='errors'>
        {errors.firstName && <p>First Name is required.</p>}
        {errors.lastName && <p>Last Name is required and should contain only letters.</p>}
        {errors.email && <p>Email is required.</p>}
        {errors.age && <p>Age is required.</p>}
      </div>
    </div>
  );
}
