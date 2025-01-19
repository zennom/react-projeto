type Props = {
    phrase: string;
    author?: string;
}

export const Card = ({ phrase, author }: Props) => {


    return (
        <div className="border-2 border-red-600 p-3 text-3-xl text-center">
            <h3 className="text-3xl font-bold italic">{phrase}</h3>
            <p className="text-right text-sm">- {author ?? 'Autor Desconhecido'}</p>
        </div> 
    )

}
