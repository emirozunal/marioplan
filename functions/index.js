const functions = require('firebase-functions');
const admin = require('firebae-admin');
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello ninjas!");
});

const createNotification = (notification => {
  return admin.firestore().collection('notification')
  .add(notification)
  .then(doc => console.log('notification added',doc))
})

exports.projectCreated = functions.firebase
.document('project/{projectId}')
.onCreate(doc =>{

const project = doc.data();
const notification = {
  content: 'Add a new project',
  user: `${project.authorFirstName} ${project.authorLastName}`,
  time: admin.firestore.FieldValue.serverTimestamp()
}
return createNotification(notification);

})


exports.userJoined = functions.auth.user()
  .onCreate(user => {
    
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
});

