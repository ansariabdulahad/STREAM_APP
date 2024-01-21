'use client';

import Homepage from "../../Components/Homepage/Homepage";
import Template from "../../Components/Template/Template";

const getData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/movies/latest`);

    if (!response.ok) {
      const errorText = `Failed to retrieve movies from database. Status: ${response.status} - ${response.statusText}`;
      throw new Error(errorText);
    }

    return response.json();
  } catch (error) {
    const errorMessage = `Error fetching data: ${error.message}`;
    return Promise.reject(new Error(errorMessage));
  }
}

const Page = async () => {

  const data = await getData();

  const design = (
    <>
      <Template>
        <Homepage latestMovies={data && data.data} />
      </Template>
    </>
  );
  return design;
}

export default Page;