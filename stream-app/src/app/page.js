'use client';

import { FormDesign, Input } from "../../Tailwind";

const Page = () => {

  const design = (
    <>
      <FormDesign
        onSubmit={() => alert()}
      >
        <div className="flex flex-col gap-3 w-4/12">
          <Input name={'fullname'} placeholder='Fullname' />
          <Input name={'email'} type="email" placeholder='Email' />
          <Input name={'password'} type="password" placeholder='Password' />
          <Input name={'address'} textarea={true} placeholder='address' />
        </div>
      </FormDesign>
    </>
  );
  return design;
}

export default Page;