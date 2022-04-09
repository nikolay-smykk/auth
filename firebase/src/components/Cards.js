import { data } from "../const/data"

export const Card = () => {
  return data.map((item) => (
    <div
      key={item.id}
      className="max-w-sm rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      <img src={item.image} className="rounded-t-lg p-8" alt="" />

      <div class="px-5 pb-5">
        <span href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
        </span>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            {item.price} руб
          </span>
          <span
            href="#"
            class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Добавить в корзину
          </span>
        </div>
      </div>
    </div>
  ))
}
