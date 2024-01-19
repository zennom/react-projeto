export const Person = () =>{
    //vamos criar as variáveis
    const name: string = 'Elon Musk' 
    const avatar: string = 'https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg'
    return(
        <>
           <h1>Elon Musk</h1>

           <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg" 
           alt="Elon Musk" 
           
           className="w-40"
           
           />
            <ul>
                <li>CEO da Tesla</li>
                <li>CEO da SpaceX</li>
            </ul>
        </>
    )
}
