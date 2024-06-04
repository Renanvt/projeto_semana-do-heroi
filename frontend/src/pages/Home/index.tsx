import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";

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
        <>
            <Header />
            <Container>
                <Title title="O que você quer ler hoje?" />
                <div className="gap-5 grid grid-cols-8">
                    {genderBooks.map((book) => (
                        <Button title={book} variant={selectedGender.includes(book) ? 'dark' : 'light'} 
                        onClick={()=>handleSelect(book)} />
                    ))}
                </div>
            </Container>
        </>
    )
}