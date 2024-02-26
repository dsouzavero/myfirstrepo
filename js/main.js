// function openPopup(videoUrl, posterUrl, serverName) {
//     var popup = document.getElementById("popup");
//     var iframe = document.getElementById("popup-iframe");
//     if (popup && iframe) {
//       popup.style.display = "block";
//       iframe.style.display = "block"; // Show the iframe
//       // Set the video source URL
//       iframe.src = videoUrl;
//       // Set the poster source URL
//       iframe.poster = posterUrl;
//       document.body.style.overflow = "hidden"; // Prevent scrolling

//       // Update popup title
//       var popupTitle = document.querySelector("#popup-content p");
//       if (popupTitle) {
//         popupTitle.textContent = "Watch Official Trailer (" + serverName + ")";
//       }
//     }
//   }

//   function closePopup() {
//     var popup = document.getElementById("popup");
//     var iframe = document.getElementById("popup-iframe");
//     if (popup && iframe) {
//       popup.style.display = "none";
//       iframe.style.display = "none"; // Hide the iframe when closing the popup
//       // Reset the video source URL
//       iframe.src = "";
//       // Reset the poster source URL
//       iframe.poster = "";
//       document.body.style.overflow = ""; // Re-enable scrolling
//     }
//   }

function openPopup(videoUrl, posterUrl, serverName) {
  var popup = document.getElementById("popup");
  var iframe = document.getElementById("popup-iframe");
  if (popup && iframe) {
    popup.style.display = "block";
    iframe.style.display = "block"; // Show the iframe
    // Set the video source URL
    iframe.src = videoUrl;
    // Set the poster source URL
    iframe.poster = posterUrl;
    document.body.style.overflow = "hidden"; // Prevent scrolling

    // Update popup title
    var popupTitle = document.querySelector("#popup-content h1");
    if (popupTitle) {
      popupTitle.textContent = "Watch Official Trailer (" + serverName + ")";
    }
  }
}

function closePopup() {
  var popup = document.getElementById("popup");
  var iframe = document.getElementById("popup-iframe");
  if (popup && iframe) {
    popup.style.display = "none";
    iframe.style.display = "none"; // Hide the iframe when closing the popup
    // Reset the video source URL
    iframe.src = "";
    // Reset the poster source URL
    iframe.poster = "";
    document.body.style.overflow = ""; // Re-enable scrolling
  }
}

// function toggleTheaterMode() {
//   var theaterButton = document.querySelector('.theater-mode-btn');
//   var popupContent = document.getElementById('popup-content');
//   var iframe = popupContent.querySelector('iframe');

//   if (theaterButton && iframe) {
//     if (theaterButton.classList.contains('theater-mode-on')) {
//       // Exit theater mode
//       theaterButton.classList.remove('theater-mode-on');
//       theaterButton.innerHTML = '<i class="fa fa-toggle-off" aria-hidden="true"></i> Theater mode';
//       iframe.style.width = "100%";
//       iframe.style.height = "100%";
//     } else {
//       // Enter theater mode
//       theaterButton.classList.add('theater-mode-on');
//       theaterButton.innerHTML = '<i class="fa fa-toggle-on" aria-hidden="true"></i> Exit theater mode';
//       // Calculate height to maintain 16:9 aspect ratio
//       var width = popupContent.offsetWidth;
//       var height = (width / 16) * 9;
//       iframe.style.width = width + "px";
//       iframe.style.height = height + "px";
//     }
//   }
// }
