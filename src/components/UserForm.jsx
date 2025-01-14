import './UserForm.css'

const UserForm = ({data, updateFieldHandler}) => {

  return (
    <>
      <div className='form-control'>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text"
            name='name'
            id='name'
            placeholder='Digite o seu nome'
            required
            value={data.name || ''}
            onChange={(e) => updateFieldHandler('name', e.target.value)}
          />
      </div>

      <div className='form-control'>
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            name='email'
            id='email'
            placeholder='Digite o seu e-mail'
            required
            value={data.email || ''}
            onChange={(e) => updateFieldHandler('email', e.target.value)}
          />
      </div>
    </>
  )
}

export default UserForm