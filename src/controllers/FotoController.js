import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto'); // para fazer upload precisamos fazer essa estrutura
// logo apos ele sera tratado como um middleware e ira ativar o req.file no controller dele

// single para pegar uma unica imagem, dentro dela precisa estar escrito o nome dado
// a essa dado inserido no insomnia

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['o aluno que você está tentando referenciar não existe!'],
        });
      }
    });
  }
}

export default new FotoController();
