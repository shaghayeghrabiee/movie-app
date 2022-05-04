###How it was implemented

Explanation of how the movie app works.

### Components

- Services
  1.  apiCalls
      In this component I put all functions for fetching data via APIand axios
- Context
  1.  movieContextProvider
      fetch whole data and pass to the child components by this context provider. Also because I wanted to sort data I defined functions for fetching sorted data based on most popular or high-rated data and pass these functions to sort component.
  2.  FavoriteMovieContextProvider
      this context provider was created for saving favorite items in context and I used `useReducer` to determine actions because I need to `ADD_ITEM` or `REMOVE_ITEM` as a favorite item.
- MoviesList
  First I get data by using `useContext` from `movieContextProvider` and send them as props another component called `Movies`
  in Movies I showed data in details and use `FavoriteMovieContextProvider` to select each item as favorite or dislike them after selecting as a favorite item.
- Sort
  in this component I fetch functions determined in `movieContextProvider` and by clicking each button my data will be sorted. I developed by `<Modal/>` in `<NavBar/>`
