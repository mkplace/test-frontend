# API Documentation

## [GET] /api/list

#### Query params:

- id: number (optional)

#### [200] Response body:

```
[
    {
        "id": 610743,
        "products": [
            {
                "categoryTitle": "Alimentos e "Bebidas"",
                "name": "Leite Longavida",
                "quantity": 2,
                "type": "unit",
                "price": 4.9,
            },
            {
                "categoryTitle": "Alimentos e "Bebidas"",
                "name": "Milho verde",
                "quantity": 3,
                "type": "unit",
                "price": 1.8,
            },
            {
                "categoryTitle": "Alimentos e "Bebidas"",
                "name": "Couve",
                "quantity": 1,
                "type": "kg",
                "price": 7.5,
            },
            {
                "categoryTitle": "Casa, Pessoas e Outros",
                "name": "Shampoo",
                "quantity": 1,
                "type": "unit",
                "price": 1,
            },
            {
                "categoryTitle": "Casa, Pessoas e Outros",
                "name": "Sabonete",
                "quantity": 4,
                "type": "unit",
                "price": 1.25,
            },
        ],
    },
    {
        "id": 780219,
        "products": [
            {
                "categoryTitle": "Alimentos e "Bebidas"",
                "name": "Milho verde",
                "quantity": 3,
                "type": "unit",
                "price": 1.8,
            },
            {
                "categoryTitle": "Alimentos e "Bebidas"",
                "name": "Couve",
                "quantity": 1,
                "type": "kg",
                "price": 7.5,
            },
            {
                "categoryTitle": "Casa, Pessoas e Outros",
                "name": "Shampoo",
                "quantity": 1,
                "type": "unit",
                "price": 1,
            },
        ],
    }
]
```

#### [400] Response body:

```
{
    "message": "message error"
}
```

## [POST] /api/list

#### Request body:

- products: array of objects (required)
  - categoryTitle: string (required)
  - name: string (required)
  - quantity: int (required)
  - type: string ["unit" or "kg"] (required)
  - price: number (required)
  - imageUrl: string (optional)

#### [200] Response body:

```
{
    "id": 610743,
    "products": [
        {
            "categoryTitle": "Alimentos e "Bebidas"",
            "name": "Leite Longavida",
            "quantity": 2,
            "type": "unit",
            "price": 4.9,
        },
        {
            "categoryTitle": "Alimentos e "Bebidas"",
            "name": "Milho verde",
            "quantity": 3,
            "type": "unit",
            "price": 1.8,
        },
        {
            "categoryTitle": "Alimentos e "Bebidas"",
            "name": "Couve",
            "quantity": 1,
            "type": "kg",
            "price": 7.5,
        },
        {
            "categoryTitle": "Casa, Pessoas e Outros",
            "name": "Shampoo",
            "quantity": 1,
            "type": "unit",
            "price": 1,
        },
        {
            "categoryTitle": "Casa, Pessoas e Outros",
            "name": "Sabonete",
            "quantity": 4,
            "type": "unit",
            "price": 1.25,
        },
    ],
}
```

#### [400] Response body:

```
{
    "message": "mensagem de error"
}
```

## [GET] /api/category

#### [200] Response body:

```
[
    {
        "id": 1,
        "title": "Alimentos e Bebidas",
    },
    {
        "id": 2,
        "title": "Especiais",
    }
]
```

#### [400] Response body:

```
{}
```

## [GET] /api/subcategory

#### Query params:

- categoryId: number [filter by categoryId] (optional)

#### [200] Response body:

```
[
    {
        "id": 15,
        "categoryId": 4,
        "title": "Acessórios de Informática",
    },
    {
        "id": 16,
        "categoryId": 4,
        "title": "Automotivo",
    },
    {
        "id": 17,
        "categoryId": 4,
        "title": "Bebê e Mamãe",
    },
]
```

#### [400] Response body:

```
{}
```

## [GET] /api/products

#### Query params:

- name: string [like in product name] (optional)

#### [200] Response body:

```
[
    {
        "id": 5,
        "name": "Shampoo",
    },
    {
        "id": 6,
        "name": "Milho verde",
    },
    {
        "id": 7,
        "name": "Café",
    },
]
```

#### [400] Response body:

```
{}
```

## [POST] /api/upload

#### Request body:

- file: image (required)

#### [200] Response body:

```
{
    "url": "./public/uploads/filename.png"
}
```

#### [400] Response body:

```
{
    "message": "message error"
}
```
