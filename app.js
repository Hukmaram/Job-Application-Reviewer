console.log('Welcome to the project6.js');
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

let nextBttn=document.getElementById('next');
nextBttn.addEventListener('click',nextCV);

function cvIterator(profiles){
    let nextIterator=0;
return{
    next:function(){
     return nextIterator<profiles.length?{value:profiles[nextIterator++], done:false}:{done:true};
    }   
}
}
let candidates=cvIterator(data);
function nextCV(){
    let currentCandidate=candidates.next().value;
    //console.log(candidates); it will return fxn
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    if(currentCandidate!=undefined){
    image.innerHTML=`<img src="${currentCandidate.image}">`;
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Work on ${currentCandidate.language}</li>
    <li class="list-group-item">with ${currentCandidate.framework} framework</li>
  </ul>`
    }
    else{
        $("#myModal").modal('show');
        setTimeout(()=>{
            window.location.reload();
        },4000)
    }
    
}
nextCV();
