import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";

const genderBooks = [
    "Ação",
    "Aventura",
    "Biografia",
    "Comédia",
    "Drama",
    "Ficção",
];


export function Home() {

    const [selectedGender, setSelectedGender] = useState<string[]>([]);
    console.log('Home - selectedGender:', selectedGender)

    const handleSelect = useCallback((title: string) => {
        if (selectedGender.includes(title)) {
            const removeGender = selectedGender.filter(item => item !== title)
            setSelectedGender(removeGender)
        } else {
            setSelectedGender([...selectedGender, title])
        }
    }, [selectedGender])
    return (
        <div className='mb-6'>
            <Header />
            <Container>
                <Title title="O que você quer ler hoje?" />
                <div className="gap-8 grid grid-cols-8 my-6">
                    {genderBooks.map((book) => (
                        <Button title={book} variant={selectedGender.includes(book) ? 'dark' : 'light'}
                            onClick={() => handleSelect(book)} />
                    ))}
                </div>
                <div className='py-7'>
                    <p className='text-evergreen font-semibold text-2xl'>Sobre o que você gostaria de receber uma recomendação de livro?</p>
                    <input type="text" placeholder="Eu gostaria de ler..." className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3" />
                </div>
                <Title title="Livros recomendados" />
                <Card/>
            </Container>
        </div>
    )
}