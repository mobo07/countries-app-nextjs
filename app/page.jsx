import BackToTopButton from "./components/BackToTopButton";
import CountriesContainer from "./components/CountriesContainer";
import DropDown from "./components/DropDown";
import SearchBar from "./components/SearchBar";

const getAllCountries = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all", {
      next: { revalidate: 60 },
    });

    const countries = res.json();
    return countries;
  } catch (error) {
    throw new Error("Failed to fetch countries");
  }
};

export default async function HomePage() {
  try {
    const countries = await getAllCountries();

    return (
      <div className="mt-16 px-3 md:mt-14 dark:bg-[#202c37]">
        <div className="w-full md:flex md:items-center md:justify-between dark:bg-inherit">
          <SearchBar
            countries={countries.map((country) => country.name.common)}
          />
          <DropDown title="Filter by Region" />
        </div>
        <CountriesContainer countries={countries} />
        <BackToTopButton />
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
