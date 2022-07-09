import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
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
        title: "Alimentos e Bebidas",
      },
      {
        id: 2,
        title: "Especiais",
      },
      {
        id: 3,
        title: "Nutrição Especial",
      },
      {
        id: 4,
        title: "Casa, Pessoas e Outros",
      },
      {
        id: 5,
        title: "Conteúdo Especial",
      },
    ];

    res.status(200).json(data);
  } else {
    res.status(400).json(undefined);
  }
}
