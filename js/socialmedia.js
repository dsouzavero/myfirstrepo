// // shareSocialMedia.json
// function shareSocialMedia(platform) {
//     const parentURL = window.location.href;
  
//     switch (platform) {
//       case "facebook":
//         window.open(
//           `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//             parentURL
//           )}`
//         );
//         break;
//       case "twitter":
//         window.open(
//           `https://twitter.com/intent/tweet?url=${encodeURIComponent(
//             parentURL
//           )}&text=Check%20out%20this%20awesome%20online%20HDmovie%20content!`
//         );
//         break;
//       case "linkedin":
//         window.open(
//           `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
//             parentURL
//           )}`
//         );
//         break;
//       case "whatsapp":
//         window.open(
//           `whatsapp://send?text=Check%20out%20this%20awesome%20movie%20content!%20${encodeURIComponent(
//             parentURL
//           )}`
//         );
//         break;
//       case "email":
//         window.location.href = `mailto:?subject=Check%20out%20this%20awesome%20movie%20content!&body=Check%20out%20this%20awesome%20content!%20${encodeURIComponent(
//           parentURL
//         )}`;
//         break;
//       default:
//         console.log("Unsupported platform.");
//     }
//   }


 // shareSocialMedia.json
function shareSocialMedia(platform) {
  const parentURL = window.location.href;

  // Fetch movie data from movie.json
  fetch('movie.json')
    .then(response => response.json())
    .then(movieData => {
      // Get the id parameter from the URL
      const urlParams = new URLSearchParams(window.location.search);
      const idParam = urlParams.get('id');

      // Find the movie with the matching id
      const selectedMovie = movieData.find(movie => movie.id === idParam);

      if (selectedMovie) {
        const movieName = selectedMovie.name;

        switch (platform) {
          case "facebook":
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                parentURL
              )}&quote=${encodeURIComponent(movieName)}`
            );
            break;
          case "twitter":
            window.open(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                parentURL
              )}&text=Check%20out%20this%20awesome%20movie%20${encodeURIComponent(
                movieName
              )}!`
            );
            break;
          case "linkedin":
            window.open(
              `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                parentURL
              )}&title=${encodeURIComponent(movieName)}`
            );
            break;
          case "whatsapp":
            window.open(
              `whatsapp://send?text=Check%20out%20this%20awesome%20movie%20${encodeURIComponent(
                movieName
              )}!%20${encodeURIComponent(parentURL)}`
            );
            break;
          case "email":
            window.location.href = `mailto:?subject=Check%20out%20${encodeURIComponent(
              movieName
            )}!&body=Check%20out%20this%20awesome%20movie%20${encodeURIComponent(
              movieName
            )}!%20${encodeURIComponent(parentURL)}`;
            break;
          default:
            console.log("Unsupported platform.");
        }
      } else {
        console.error('Movie not found');
      }
    })
    .catch(error => {
      console.error('Error fetching movie data:', error);
    });
}
