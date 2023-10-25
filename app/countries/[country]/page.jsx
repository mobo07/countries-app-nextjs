import Image from "next/image";
import BackButton from "../../components/BackButton";
import BorderCountries from "../../components/BorderCountries";

const getCountry = async (countryName) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  const countryDetails = await res.json();
  return countryDetails;
};

export default async function CountryPage({ params }) {
  const [countryDetails] = await getCountry(params.country);

  return (
    <div className="mt-14 p-5">
      <BackButton />
      <div className="mt-7 md:flex md:mt-24">
        {/* Image wrapper */}
        <div className="w-full max-w-[420px] h-48 mx-auto mb-7 shadow-md relative md:flex-[40%] md:h-[17rem] md:max-h-[17rem] md:max-w-[31rem]">
          <Image
            src={countryDetails.flags.png}
            alt={`flag of ${countryDetails.name.common}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Country Details */}
        <div className="md:flex-[60%] md:flex md:flex-col md:px-[64px]">
          <div className="md:flex gap-[60px]">
            <div className="mb-7">
              <h3 className="text-lg font-bold mb-3">
                {countryDetails.name.common}
              </h3>
              <p className="text-sm font-semibold mb-2">
                Native Name:{" "}
                <span className="font-normal">
                  {countryDetails.name.official}
                </span>
              </p>
              <p className="text-sm font-semibold mb-2">
                Population:{" "}
                <span className="font-normal">
                  {countryDetails.population.toLocaleString()}
                </span>
              </p>
              <p className="text-sm font-semibold mb-2">
                Region:{" "}
                <span className="font-normal">{countryDetails.region}</span>
              </p>
              <p className="text-sm font-semibold mb-2">
                Sub Region:{" "}
                <span className="font-normal">{countryDetails.subregion}</span>
              </p>
              <p className="text-sm font-semibold mb-2">
                Capital:{" "}
                <span className="font-normal">
                  {countryDetails.capital || `nil`}
                </span>
              </p>
            </div>
            <div className="mb-5 md:mt-[2.3rem]">
              <p className="text-sm font-semibold mb-2">
                Top Level Domain:{" "}
                <span className="font-normal">{countryDetails.tld}</span>
              </p>
              <p className="text-sm font-semibold mb-2">
                Currencies:{" "}
                <span className="font-normal">
                  {
                    countryDetails.currencies[
                      Object.keys(countryDetails.currencies)
                    ].name
                  }{" "}
                  (
                  {
                    countryDetails.currencies[
                      Object.keys(countryDetails.currencies)
                    ].symbol
                  }
                  )
                </span>
              </p>
              <p className="text-sm font-semibold mb-2">
                Languages:{" "}
                <span className="font-normal">
                  {Object.entries(countryDetails.languages)
                    .map((language) => language[1])
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div>
            <BorderCountries borderCountries={countryDetails.borders} />
          </div>
        </div>
      </div>
    </div>
  );
}
