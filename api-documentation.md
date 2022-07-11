# API Documentation

## <a name="get_list"> [GET] /api/list </a>

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

## <a name="post_list"> [POST] /api/list </a>

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

## <a name="category"> [GET] /api/category </a>

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

## <a name="subcategory"> [GET] /api/subcategory </a>

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

## <a name="products"> [GET] /api/products </a>

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

## <a name="upload"> [POST] /api/upload </a>

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
