//Check for network connectivity before performing Firebase operations.
const isOnline = window.navigator.onLine;
if (isOnline) {
  // Perform Firebase operation here
  firebase.database().ref('/myPath').once('value', snapshot => {
      //handle data 
    }).catch((error) => {
      console.error('Firebase error: ', error);
      //display user-friendly message, such as 'Please check your internet connection.'
    });
} else {
  // Handle offline mode
  console.log('Offline, unable to reach Firebase.');
  // Display a user-friendly message
}
//Listen for network connectivity changes
window.addEventListener('online', () => {
  console.log('Online');
  //Perform Firebase operation when network is back
});
window.addEventListener('offline', () => {
  console.log('Offline');
  //Handle offline mode
});