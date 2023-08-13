// import React, { useEffect } from "react";

// function Api() {
//   useEffect(() => {
//     fetch("data.json") // Adjust the path based on your project structure
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Display farmers' schemes
//         console.log("Farmers' Schemes:");
//         data.farmers.forEach((scheme) => {
//           console.log(`ID: ${scheme.id}`);
//           console.log(`Title: ${scheme.title}`);
//           console.log(`Description: ${scheme.description}`);
//         });

//         // Display labor schemes
//         console.log("Labor Schemes:");
//         data.labor.forEach((scheme) => {
//           console.log(`ID: ${scheme.id}`);
//           console.log(`Title: ${scheme.title}`);
//           console.log(`Description: ${scheme.description}`);
//           console.log(""); // Empty line for spacing
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return <div>api </div>;
// }

// export default Api;
