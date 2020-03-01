import React, { useState } from 'react';
import { Typography, Button, Form, Input} from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Families = [
    { key: 1, value: "Oriental / Ambré / Boisé" },
    { key: 2, value: "Floral" },
    { key: 3, value: "Gourmand" },
    { key: 4, value: "Chypré" },
    { key: 5, value: "Fougère" },
    { key: 6, value: "Hesperidé / Fruité" },
    { key: 7, value: "Cuir" }
]

function UploadProductPage(props) {

    const [CreatorValue, setCreatorValue] = useState("")
    const [NameValue, setNameValue] = useState("")
    const [FamilyValue, setFamilyValue] = useState(1)
    const [NotesValue, setNotesValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [SizeValue, setSizeValue] = useState(0)
    const [PriceValue, setPriceValue] = useState(0)

    const [Images, setImages] = useState([])

    const onCreatorChange = (event) => {
        setCreatorValue(event.currentTarget.value)
    }
    const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
    }
    const onFamiliesSelectChange = (event) => {
        setFamilyValue(event.currentTarget.value)
    }
    const onNotesChange = (event) => {
        setNotesValue(event.currentTarget.value)
    }
    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }
    const onSizeChange = (event) => {
        setSizeValue(event.currentTarget.value)
    }
    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }
    const updateImages = (newImages) => {
        console.log(newImages)
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();

        //Si les champs ne sont pas remplis, alors une alerte apparait
        if (!Images || !CreatorValue || !NotesValue || !NameValue || !FamilyValue || !DescriptionValue || !SizeValue || !PriceValue) {
            return alert("Remplissez tous les champs afin d'ajouter un parfum!")
        }

        const variables = {
            images: Images,
            creator: CreatorValue,
            name: NameValue,
            notes: NotesValue,
            families: FamilyValue,
            description: DescriptionValue,
            size: SizeValue,
            price: PriceValue,    
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Le parfum a été ajouté avec succès')
                    props.history.push('/')
                } else {
                    alert("Le produit n'a pas été ajouté")
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}>Ajouter Un Parfum</Title>
            </div>

        <Form onSubmit={onSubmit} >

        {/* DROPZONE */}
        <FileUpload refreshFunction={updateImages}/>
        <br />
        <br />
        <label>Createur du parfum </label>
        <br />
        <Input
            onChange={onCreatorChange}
            value={CreatorValue}
        />
        <br />
        <br />
        <label>Nom du parfum </label>
        <br />
        <Input
            onChange={onNameChange}
            value={NameValue}
        />
        <br />
        <br />
        <label>Famille olfactive </label>
        <br />
        <select onChange={onFamiliesSelectChange}>
            {Families.map(item => (
                <option key={item.key} value={item.key}>{item.value}</option>
            ))}
        </select>
        <br />
        <br />
        <label>Notes olfactives </label>
        <TextArea
            onChange={onNotesChange}
            value={NotesValue}
        />
        <br />
        <br />
        <label>Description </label>
        <TextArea
            onChange={onDescriptionChange}
            value={DescriptionValue}
        />
        <br />
        <br />
        <label>Quantité en ml </label>
        <br />
        <Input
            onChange={onSizeChange}
            value={SizeValue}
            type="number"
        />
        <br />
        <br />
        <label>Prix en € </label>
        <br />
        <Input
            onChange={onPriceChange}
            value={PriceValue}
            type="number"
        />
        <br />
        <br />
        <Button
            onClick={onSubmit}
        >
        Ajouter le Parfum    
        </Button>

        </Form>


        </div>
    )
}

export default UploadProductPage
