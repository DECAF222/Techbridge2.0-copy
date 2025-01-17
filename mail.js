const firebaseConfig = {
    apiKey: "AIzaSyDiGCvDav1T86EdEa8uAtoPSFRqM7hPRUc",
    authDomain: "techbridge-innovations.firebaseapp.com",
    databaseURL: "https://techbridge-innovations-default-rtdb.firebaseio.com",
    projectId: "techbridge-innovations",
    storageBucket: "techbridge-innovations.firebasestorage.app",
    messagingSenderId: "477208358412",
    appId: "1:477208358412:web:308618c04c3ec861868829"
  };
firebase.initializeApp(firebaseConfig);
var studentFormDB = firebase.database().ref('studentsform');
document.getElementById('registerForm').addEventListener('submit', submitForm);
function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var number = getElementVal('number');
    var institution = getElementVal('institution');
    var course = getElementVal('course');
    var duration = getElementVal('duration');
    var address = getElementVal('address');
    var referral = getElementVal('referral');

    saveMessages(name, email, number, institution, course, duration, address, referral);
}
const saveMessages = (name, email, number, institution, course, duration, address, referral) => {
    var newStudentsForm = studentFormDB.push();

    newStudentsForm.set({
        name : name,
        email : email,
        number : number,
        institution : institution,
        course : course,
        duration : duration,
        address : address,
        referral : referral,

    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};