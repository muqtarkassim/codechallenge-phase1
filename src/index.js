// Your code here

// let animal
  function fetchData(){
    fetch('http://localhost:3000/characters')
    .then(res =>res.json())
    .then(data => functionData(data))
}
  function functionData(animals){

    const divParent=document.getElementById('character-bar');
    animals.forEach((animal,index)=>{
      const charName=document.createElement('span');
        charName.textContent=animal.name;
        const InnerName=document.getElementById('name')
        const innerImage=document.getElementById('image')
        const votes=document.getElementById('vote-count');
        const formVotes=document.querySelector('#votes-form')
        const addvotes=document.getElementById('votes');
       
     // childDiv.innerHTML=`<img src='${animal.name}'></img>`
      divParent.appendChild(charName)
          
      InnerName.textContent='';
      innerImage.src='';
      votes.textContent='';
      charName.addEventListener('click',()=>{
        
       InnerName.textContent=animal.name;
       innerImage.src=animal.image;
       votes.textContent=animal.votes
      })
      
      formVotes.addEventListener('submit',(e)=>{
        e.preventDefault()
        const animalVotes=parseInt(addvotes.value) || 0;
        votes.textContent=animalVotes
       
        
      })
     
     
      const resetButton=document.getElementById('reset-btn')
      resetButton.addEventListener('click',()=>{
        votes.textContent='0';
        addvotes.value='';
      })
    })
    
    const AddchForm=document.getElementById('character-form');
    const AddcharName=document.getElementById('name');
    const AddcharImage=document.getElementById('image-url');

    AddchForm.addEventListener('submit',(e)=>{

        e.preventDefault()
        const name=AddcharName.value;
        const url=AddcharImage.value;
       
        if(name && url){

            const newobj={
                name:name,
                image_url: url,
                votes:0

            }
        fetch('http://localhost:3000/characters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCharacter)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from your server, which may contain the added character's data
            console.log('Character added:', data);

            // Display the character in the UI (optional)
            const charName = document.createElement('span');
            charName.textContent = data.name;
            divParent.appendChild(charName);

            // Clear the form fields
            AddcharName.value = '';
            AddcharImage.value = '';
        })
        .catch(error => {
            console.error('Error adding character:', error);
        });
    }
});

  /*  AddchForm.addEventListener('submit', (e) => {
    
    
    e.preventDefault();
    
    const name = AddcharName.value;
    const url = AddcharImage.value;

    if (name && url) {
        // Create a new character object
        const newCharacter = {
            name: name,
            image_url: url,
            votes: 0
        };
        
        // Send a POST request to add the character
        fetch('http://localhost:3000/characters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCharacter)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from your server, which may contain the added character's data
            console.log('Character added:', data);

            // Display the character in the UI (optional)
            const charName = document.createElement('span');
            charName.textContent = data.name;
            divParent.appendChild(charName);

            // Clear the form fields
            AddcharName.value = '';
            AddcharImage.value = '';
        })
        .catch(error => {
            console.error('Error adding character:', error);
        });
    }
});*/






}
document.addEventListener('DOMContentLoaded',fetchData)