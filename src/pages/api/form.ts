import type {NextApiRequest, NextApiResponse} from 'next';
import {GoogleSpreadsheet} from 'google-spreadsheet';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {name, email, phone} = _req.body;
    const parsedEmail = email.trim().toLowerCase();
    // Verify if email is valid
    if (!parsedEmail || !parsedEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g))
      return res.status(400).json({error: {message: 'Email inválido'}});

    // Verify if phone is valid
    if (
      !phone ||
      !phone.match(
        /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/g
      )
    )
      return res
        .status(400)
        .json({error: {message: 'Telefone em formato inválido'}});

    // Verify if name is valid
    if (!name) return res.status(400).json({error: {message: 'Nome inválido'}});

    const sheetId = process.env.GOOGLE_SHEET_ID || '';

    const doc = new GoogleSpreadsheet(sheetId);
    doc.useServiceAccountAuth(
      JSON.parse(process.env.GOOGLE_SHEET_API_CONFIG || '{}')
    );

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.setHeaderRow(['Nome', 'Email', 'Telefone', 'Label', 'Data']);

    await sheet.addRow({
      Nome: name,
      Email: parsedEmail,
      Telefone: phone,
      Label: 'Interessado',
      Data: new Date().toString()
    });

    return res.status(200).json(true);
  } catch (e) {
    return res.status(500).json({error: e});
  }
}
