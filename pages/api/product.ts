import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | undefined>
) {
  if (req.method === "GET") {
    const data: Data = [
      {
        id: 1,
        name: "Desinfetante",
      },
      {
        id: 2,
        name: "Trigo",
      },
      {
        id: 3,
        name: "Leite Longavida",
      },
      {
        id: 4,
        name: "Sabão em pó",
      },
      {
        id: 5,
        name: "Shampoo",
      },
      {
        id: 6,
        name: "Milho verde",
      },
      {
        id: 7,
        name: "Café",
      },
      {
        id: 8,
        name: "Arroz",
      },
      {
        id: 9,
        name: "Macarrão",
      },
      {
        id: 10,
        name: "Oléo",
      },
      {
        id: 11,
        name: "Milharina",
      },
      {
        id: 12,
        name: "Margarina",
      },
      {
        id: 13,
        name: "Manteiga",
      },
      {
        id: 14,
        name: "Biscoito",
      },
      {
        id: 15,
        name: "Extrato de tomate",
      },
      {
        id: 16,
        name: "Água sem gás",
      },
      {
        id: 17,
        name: "Água com gás",
      },
      {
        id: 18,
        name: "Picles",
      },
      {
        id: 19,
        name: "Azeitona",
      },
      {
        id: 20,
        name: "Banana",
      },
      {
        id: 21,
        name: "Panela",
      },
      {
        id: 22,
        name: "Couve",
      },
      {
        id: 23,
        name: "Alface",
      },
      {
        id: 24,
        name: "Barra de chocolate",
      },
      {
        id: 25,
        name: "Requeijão",
      },
      {
        id: 26,
        name: "Nescau",
      },
      {
        id: 27,
        name: "Sabonete",
      },
      {
        id: 28,
        name: "Batata",
      },
      {
        id: 29,
        name: "Morango",
      },
      {
        id: 30,
        name: "Salgadinho",
      },
    ];

    let dataFilters = data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }

      return 1;
    });

    if (req.query?.name) {
      dataFilters = data.filter((product) =>
        product.name
          .toLocaleLowerCase()
          .includes(String(req.query.name).toLocaleLowerCase())
      );
    }

    res.status(200).json(dataFilters);
  } else {
    res.status(400).json(undefined);
  }
}
