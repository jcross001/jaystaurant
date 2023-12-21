import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
  return (
    <section className="flex flex-wrap text-red-500">
      {pizzas.map((p) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50"
          href={`/product/${p.id}`}
          key={p.id}
        >
          {/* IMAGE CONTAINER */}
          {p.img && (
            <div className="relative h-[80%]">
              <Image src={p.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{p.title}</h1>
            <h2 className="group-hover:hidden text-xl">{p.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CategoryPage;
