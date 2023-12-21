// import { menu } from "@/data";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed!");
  }
  return res.json();
};

const MenuPage = async () => {
  const menu = await getData();
  return (
    <section className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((m) => (
        <Link
          href={`/menu/${m.slug}`}
          key={m.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${m.img})` }}
        >
          <div className={`text-${m.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{m.title}</h1>
            <p className="text-sm my-8">{m.desc}</p>
            <button
              className={`hidden 2xl:block bg-${m.color} text-${
                m.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default MenuPage;
