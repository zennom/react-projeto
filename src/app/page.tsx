import { peopleList} from '@/data/peopleList'

const Page = () =>{

  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Algum outro texto</h3>

       {/* use sempre o key quando usar map pois
       ele precia ser mapeado */}
      <ul>
        {peopleList.map(person => 
        <li key={person.id}>{person.name} - {person.profession}</li>
        )}
      </ul>

    </div>
  )
}
export default Page

