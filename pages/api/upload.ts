import { IncomingForm } from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type Data = {
  url: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { message: string }>
) {
  try {
    if (req.method === "POST") {
      const { files } = await new Promise((resolve, reject) => {
        const form = new IncomingForm({
          keepExtensions: true,
        });

        form.parse(req, (error: Error, _, files: any) => {
          if (error) return reject(error);
          resolve({ files });
        });
      });

      if (!files?.file?.filepath) {
        throw new Error(
          "Ocorreu algo com o arquivo que vc enviou, pois não recebemos ele"
        );
      }

      if (files?.file?.size > 1000000) {
        throw new Error(
          "Arquivo muito grande, só é possível enviar arquivos de até 1MB"
        );
      }

      const baseDir = "./public/uploads/";
      const oldPath = files.file.filepath;
      const newPath = `${baseDir}${files.file.originalFilename}`;

      if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
      }

      fs.rename(oldPath, newPath, function (error) {
        if (error) {
          throw error;
        }
      });

      res.status(200).json({ url: newPath });
    } else {
      throw new Error("Método inválido");
    }
  } catch (error: any) {
    res.status(400).json({ message: error?.message || error });
  }
}
