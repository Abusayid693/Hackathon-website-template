import type {NextApiRequest, NextApiResponse} from 'next';
import {GoogleSpreadsheet} from 'google-spreadsheet';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {name, email, phone} = _req.body;
    const parsedEmail = email.trim().toLowerCase();

    const sheetId = process.env.GOOGLE_SHEET_ID || '';
    const sheetEmail = process.env.GOOGLE_SHEET_EMAIL || '';
    const sheetPrivateKey = process.env.GOOGLE_SHEET_PRIVATE_KEY || '';

    const doc = new GoogleSpreadsheet(sheetId);
    doc.useServiceAccountAuth({
      client_email: sheetEmail,
      private_key: sheetPrivateKey.replace(/\\n/g, '\n')
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const columnValues = sheet.headerValues;
    const expectedHeader = ['Nome', 'Email', 'Whatsapp', 'Label', 'Data'];
    if (
      !columnValues ||
      !expectedHeader.every(value => columnValues.includes(value))
    )
      return res.status(500).json({error: 'Invalid sheet header'});

    await sheet.addRow({
      Nome: name,
      Email: parsedEmail,
      Whatsapp: phone,
      Label: 'Interessado',
      Data: new Date().toString()
    });

    return res.status(200).json(true);
  } catch {
    return res.status(500).json({error: 'Error'});
  }
}
