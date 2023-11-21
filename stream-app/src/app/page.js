const Page = () => {
  const data = [
    {
      label: 'Username',
      name: 'username',
      type: 'email'
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password'
    },
    {
      label: 'DOB',
      name: 'dob',
      type: 'date'
    },
    {
      label: 'Gender',
      name: 'gender',
      el: 'select',
      options: [
        {
          name: 'Male',
          value: 'male'
        },
        {
          name: 'Female',
          value: 'female'
        }
      ]
    }
  ]

  const Input = ({ item }) => {
    const design = (
      <div className="mb-3">
        <label className="block mb-2 text-2xl">{item.label}</label>
        <input type={item.type} name={item.name} className="border-blue-900 border p-3 w-full rounded shadow" />
      </div>
    );
    return design;
  }

  const Select = ({ item }) => {
    const design = (
      <div className="mb-3">
        <label className="block mb-2 text-2xl">{item.label}</label>
        <select className="focus:border-blue-900 border p-3 w-full rounded shadow">
          {
            item.options.map((option, index) => {
              return <option value={option.value} key={index}>{option.name}</option>
            })
          }
        </select>
      </div>
    );
    return design;
  }

  // On dev_abdul branch this signup code is stored.
  const design = (
    <>
      <div className="flex items-center justify-center bg-rose-500 min-h-screen">
        <div className="bg-white p-3 sm:p-20 w-full sm:w-6/12 min-h-screen sm:min-h-0 rounded shadow-lg">
          <h2 className="text-2xl mb-3 text-center uppercase">Signup</h2>
          {
            data.map((item, index) => {
              if (item.el == 'select') {
                return <Select key={index} item={item} />
              }
              return <Input key={index} item={item} />
            })
          }
          <button className="bg-rose-600 p-3 w-full mt-3 rounded shadow text-white text-2xl uppercase">Submit</button>
        </div>
      </div>
    </>
  );
  return design;
}

export default Page;