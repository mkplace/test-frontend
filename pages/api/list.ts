import type { NextApiRequest, NextApiResponse } from "next";
import NodeCache from "node-cache";
const myCache = new NodeCache();

type Data = {
  id: number;
  products: {
    categoryTitle: string;
    name: string;
    price: number;
    type: "unit" | "kg";
    quantity: number;
    imageUrl: string;
  }[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "GET":
        if (!myCache.get("list")) {
          myCache.set("list", [
            {
              id: 610743,
              products: [
                {
                  categoryTitle: "Alimentos e Bebidas",
                  name: "Leite Longavida",
                  quantity: 2,
                  type: "unit",
                  price: 4.9,
                },
                {
                  categoryTitle: "Alimentos e Bebidas",
                  name: "Milho verde",
                  quantity: 3,
                  type: "unit",
                  price: 1.8,
                },
                {
                  categoryTitle: "Alimentos e Bebidas",
                  name: "Couve",
                  quantity: 1,
                  type: "kg",
                  price: 7.5,
                },
                {
                  categoryTitle: "Casa, Pessoas e Outros",
                  name: "Shampoo",
                  quantity: 1,
                  type: "unit",
                  price: 1,
                },
                {
                  categoryTitle: "Casa, Pessoas e Outros",
                  name: "Sabonete",
                  quantity: 4,
                  type: "unit",
                  price: 1.25,
                },
              ],
            },
          ]);
        }

        const data: Data[] | undefined = myCache.get("list");

        res.status(200).json(data);
        break;
      case "POST":
        if (!req?.body?.products || req?.body?.products?.length <= 0) {
          throw new Error("É obrigatório enviar algum produto");
        }

        const body: Data = {
          id: Math.floor(Math.random() * 900000),
          products: [],
        };

        req.body.products.map((product: any) => {
          if (!product.categoryTitle) {
            throw new Error("O título da categoria é obrigatório");
          }

          if (!product.name) {
            throw new Error("O nome do produto é obrigatório");
          }

          if (!product.price) {
            throw new Error("O preço do produto é obrigatório");
          }

          if (!product.type) {
            throw new Error("O tipo do produto é obrigatório");
          }

          if (!product.quantity) {
            throw new Error("A quantidade do produto é obrigatório");
          }

          if (product.price < 0) {
            throw new Error(
              "O preço do produto deve ser maior ou igual a R$ 0,00"
            );
          }

          if (product.quantity < 1) {
            throw new Error("A quantidade do produto deve ser maior do que 0");
          }

          if (product.type !== "kg" && product.type !== "unit") {
            throw new Error(
              `O tipo do produto deve ser igual a "kg" ou "unit"`
            );
          }

          body.products.push({
            categoryTitle: product.categoryTitle,
            name: product.name,
            quantity: product.quantity,
            type: product.type,
            price: product.price,
            imageUrl: product.imageUrl || undefined,
          });
        });

        const listCache: Data[] = myCache.get("list") || [];

        listCache.push(body);

        myCache.set("list", listCache);

        res.status(200).json(body);
        break;
      default:
        throw new Error("Método inválido");
    }
  } catch (error: any) {
    res.status(400).json({ message: error?.message || error });
  }
}
