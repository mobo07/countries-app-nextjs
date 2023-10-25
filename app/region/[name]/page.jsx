import BackToTopButton from "../../components/BackToTopButton";
import CountriesContainer from "../../components/CountriesContainer";
import DropDown from "../../components/DropDown";
import SearchBar from "../../components/SearchBar";

const fetchCountriesByRegion = async (region) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`, {
      next: { revalidate: 60 },
    });

    const countries = res.json();
    return countries;
  } catch (error) {
    throw new Error("Failed to fetch countries");
  }
};

const CountriesByRegion = async ({ params }) => {
  try {
    const countries = await fetchCountriesByRegion(params.name);
    return (
      <div className="mt-16 px-3 md:mt-14">
        <div className="w-full md:flex md:items-center md:justify-between">
          <SearchBar
            countries={countries.map((country) => country.name.common)}
          />
          <DropDown title={params.name} />
        </div>
        <CountriesContainer countries={countries} />
        <BackToTopButton />
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
};

export default CountriesByRegion;
