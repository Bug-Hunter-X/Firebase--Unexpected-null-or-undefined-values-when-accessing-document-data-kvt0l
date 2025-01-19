```javascript
async function getData() {
  const docRef = doc(db, 'collection', 'docId');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
}

// Or using .then()
function getDataThen() {
  const docRef = doc(db, 'collection', 'docId');
  getDoc(docRef)
    .then(docSnap => {
      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
      } else {
        console.log('No such document!');
      }
    })
    .catch(error => {
      console.error('Error getting document:', error);
    });
}
```