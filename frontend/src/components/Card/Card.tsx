import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";

export function Card() {
    return (
        <div className="p-4 grid grid-cols-3 grap-3 shadow-lg rounded-lg border border-gray-100 max-w-lg w-full">
            <img src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg" alt="" className="col-span-1 w-full h-full rounded-l-lg" />
            <div className='col-span-2'>
                <p className='font-bold text-2xl text-evergreen'>Código limpo</p>
                <p className='font-light text-lg text-gray-500'>Autor</p>
                <Tag title="Ação" />
                <p>Sinopse: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper erat faucibus justo luctus gravida. In hac habitasse platea dictumst. Curabitur at massa vel nulla pulvinar dignissim.</p>
                <Button title="Ver mais" variant="light" />

            </div>
        </div>
    )
}