import Image from "next/image";
import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <Link
      href={`countries/${country.name.common}`}
      className="w-[80%] max-w-[260.8px] h-80 rounded-[5px] shadow-md cursor-pointer hover:scale-105 transition ease-out duration-300 md:w-[16.5rem] md:max-w-[262px] dark:bg-[#2b3945]"
    >
      <div className="relative h-1/2">
        <Image
          src={country.flags.png}
          alt={country.name.common}
          priority={true}
          fill
          className="object-cover rounded-t-[5px]"
        />
      </div>
      <div className="h-1/2 px-2 py-3">
        <h2 className="text-lg font-bold mb-3">{country.name.common}</h2>
        <p className="text-sm font-semibold mb-2">
          Population:{" "}
          <span className="font-normal">
            {country.population.toLocaleString()}
          </span>
        </p>
        <p className="text-sm font-semibold mb-2">
          Region: <span className="font-normal">{country.region}</span>
        </p>
        <p className="text-sm font-semibold mb-2">
          Capital:{" "}
          {country.capital ? (
            <span className="font-normal">{country.capital[0]}</span>
          ) : (
            " "
          )}
        </p>
      </div>
    </Link>
  );
}
