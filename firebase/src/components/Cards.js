import { data } from "../const/data"

export const Card = () => {
  return data.map((item) => (
    <div
      key={item.id}
      className="flex w-full flex-col items-center justify-center p-6 md:w-1/3"
    >
      <h1 className="text-2xl font-bold text-gray-800">{item.name}</h1>
      <p className="text-gray-600">{item.description}</p>
      <img src={item.image} alt="" className="w-full" />
      <p className="font-bold text-gray-600">{item.price}</p>
      <button className="rounded-full bg-gray-500  py-2 px-4 font-bold text-white hover:bg-white hover:text-gray-500">
        Купить
      </button>
    </div>
  ))
}
