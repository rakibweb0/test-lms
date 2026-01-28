import { getData } from "./data-access-layer/getData";

export default async function Home() {
  const data = await getData()

  if (!data) return <div>No data</div>

  return (
    <div>Hello {data[0]?.name} and your email is {data[0]?.email}</div>
  );
}
