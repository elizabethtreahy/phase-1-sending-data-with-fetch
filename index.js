// Add your code here


function submitData(userName, userEmail) {
  const userPost = {name: userName, email: userEmail}
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userPost)
  })
  .then(res => res.json())
  .then(data => document.querySelector('body').append(data.id))
  .catch(function (error) {
    alert('Unauthorized Access');
    document.querySelector('body').append(error);
  })
}







// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });