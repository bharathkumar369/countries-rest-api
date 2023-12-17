# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 




### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*



- Solution URL: https://github.com/bharathkumar369/countries-rest-api
- Live Site URL: https://countries-rest-api-kappa.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- 
- fetch
- [React](https://reactjs.org/) - JS library
- 
- [Styled Components](https://styled-components.com/) - For styles

 

### What I learned

i have learned a lot with this project.. Form in React, prop-drilling and many more ... this was not easy but i am glad i completed this project

```
const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    const filtered = inputValue
      ? countries.filter((country) => {
          const countryName = country.name.common.toLowerCase();
          return countryName.includes(inputValue.toLowerCase());
        })
      : [];

    setFilteredCountries(filtered);
  };
  React.useEffect(() => {
    // Close dropdown when clicking outside of it
    const closeDropdown = (e) => {
      // Check if the clicked element is within the dropdown or the toggle button
      if (
        !e.target.closest(".flag--search__filter") &&
        !e.target.classList.contains("flag--search__toggle")
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);
```


