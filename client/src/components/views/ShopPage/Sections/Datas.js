

const families = [
    {
        "_id": 1,
        "name": "Oriental / Ambré / Boisé"
    },
    {
        "_id": 2,
        "name": "Floral"
    },
    {
        "_id": 3,
        "name": "Gourmand"
    },
    {
        "_id": 4,
        "name": "Chypré"
    },
    {
        "_id": 5,
        "name": "Fougère"
    },
    {
        "_id": 6,
        "name": "Hesperidé / Fruité"
    },
    {
        "_id": 7,
        "name": "Cuir"
    },
]

const price = [
    {
        "_id": 0,
        "name": "Tous",
        "array": []
    },
    {
        "_id": 1,
        "name": "Moins de 100€",
        "array": [0, 99]
    },
    {
        "_id": 2,
        "name": "100€ à 200€",
        "array": [100, 200]
    },
    {
        "_id": 3,
        "name": "200€ à 300€",
        "array": [200, 300]
    },
    {
        "_id": 4,
        "name": "300€ à 400€",
        "array": [300, 400]
    },
    {
        "_id": 5,
        "name": "Plus de 400€",
        "array": [400, 1500000]
    }
]

export {
    families, price
}