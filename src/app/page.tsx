import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"
import {Card} from "@/components/Card"
import { Circle } from "@/components/Geo"
const Page = () =>{
  return(
    <div>
      <h1 className="font-bold text-lg">Olá Mundo</h1>
      <h3>Algum outro texto</h3>

      <Card>
        <>
        Frase de efeito!
        <h1 className="text-3xl font-bold italic">Frase de efeito 2!</h1>
        <p className="text-right text-sm">Autor Desconhecido</p>
        <Circle />
        </>
      </Card>
    </div>
  )
}
export default Page

