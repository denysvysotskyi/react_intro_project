const FeedbackSection = () => (
  <section>
    <h3> Обратний зв'язок </h3>

    <form>
      <label htmlFor='name'> Ваше ім'я </label>
      <input type='text'
             id='name'
             className='control'/>
      <label htmlFor='reason'> Причина звернення </label>
      <select id='reason'
              className='control'>
        <option value='help'> Потрібна допомога </option>
        <option value='error'> Виникла помилка </option>
        <option value='notWorked'> Щось не працює </option>
      </select>
    </form>
  </section>
)

export default FeedbackSection