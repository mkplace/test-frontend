import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  categoryId: number;
  title: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | undefined>
) {
  if (req.method === "GET") {
    const data: Data = [
      {
        id: 1,
        categoryId: 2,
        title: "Super Ofertas",
      },
      {
        id: 2,
        categoryId: 2,
        title: "Importados",
      },
      {
        id: 3,
        categoryId: 2,
        title: "Novidades",
      },
      {
        id: 4,
        categoryId: 2,
        title: "Mundo Saudável",
      },
      {
        id: 5,
        categoryId: 2,
        title: "Receitas Exclusivas",
      },
      {
        id: 6,
        categoryId: 1,
        title: "Adega",
      },
      {
        id: 7,
        categoryId: 1,
        title: "Biscoitos e Snacks",
      },
      {
        id: 8,
        categoryId: 1,
        title: "Bomboniere",
      },
      {
        id: 9,
        categoryId: 1,
        title: "Carnes, Aves e Peixes",
      },
      {
        id: 10,
        categoryId: 1,
        title: "Mercearia",
      },
      {
        id: 11,
        categoryId: 1,
        title: "Molhos e Condimentos",
      },
      {
        id: 12,
        categoryId: 1,
        title: "Padaria e Confeitaria",
      },
      {
        id: 13,
        categoryId: 1,
        title: "Frios",
      },
      {
        id: 14,
        categoryId: 4,
        title: "Frios",
      },
      {
        id: 15,
        categoryId: 4,
        title: "Acessórios de Informática",
      },
      {
        id: 16,
        categoryId: 4,
        title: "Automotivo",
      },
      {
        id: 17,
        categoryId: 4,
        title: "Bebê e Mamãe",
      },
      {
        id: 18,
        categoryId: 4,
        title: "Beleza",
      },
      {
        id: 19,
        categoryId: 4,
        title: "Cartucho de tinta",
      },
      {
        id: 20,
        categoryId: 4,
        title: "Casa e Bazar",
      },
      {
        id: 21,
        categoryId: 4,
        title: "Eletroportáteis",
      },
      {
        id: 22,
        categoryId: 4,
        title: "Higiene",
      },
      {
        id: 23,
        categoryId: 4,
        title: "Limpeza",
      },
      {
        id: 24,
        categoryId: 4,
        title: "Pet Shop",
      },
      {
        id: 25,
        categoryId: 5,
        title: "Produtos Orgânicos",
      },
      {
        id: 26,
        categoryId: 5,
        title: "Momento Café",
      },
      {
        id: 27,
        categoryId: 5,
        title: "Faça sua pizza em casa",
      },
      {
        id: 28,
        categoryId: 5,
        title: "Alimentação Restritiva",
      },
      {
        id: 29,
        categoryId: 5,
        title: "Receitas NESTLÉ",
      },
      {
        id: 30,
        categoryId: 3,
        title: "Diet e Light",
      },
      {
        id: 31,
        categoryId: 3,
        title: "Sem Glúten",
      },
      {
        id: 32,
        categoryId: 3,
        title: "Sem Lactose",
      },
      {
        id: 33,
        categoryId: 3,
        title: "Vegano",
      },
      {
        id: 34,
        categoryId: 3,
        title: "Fitness",
      },
    ];

    let dataFilters = data.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }

      return 1;
    });

    if (req.query?.categoryId) {
      dataFilters = data.filter(
        (subcategory) => subcategory.categoryId === Number(req.query.categoryId)
      );
    }

    res.status(200).json(dataFilters);
  } else {
    res.status(400).json(undefined);
  }
}
