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
      throw new Error('Invalid email');

    // Verify if phone is valid
    if (
      !phone ||
      !phone.match(
        /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/g
      )
    )
      throw new Error('Invalid phone');

    // Verify if name is valid
    if (!name) throw new Error('Invalid name');

    const sheetId = process.env.GOOGLE_SHEET_ID || '';
    const sheetEmail = process.env.GOOGLE_SHEET_API_EMAIL || '';
    const sheetPrivateKey = process.env.GOOGLE_SHEET_API_PRIVATE_KEY || '';

    const doc = new GoogleSpreadsheet(sheetId);
    doc.useServiceAccountAuth({
      client_email: sheetEmail,
      private_key: sheetPrivateKey.replace(/\\n/g, '\n')
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.setHeaderRow(['Nome', 'Email', 'Whatsapp', 'Label', 'Data']);

    await sheet.addRow({
      Nome: name,
      Email: parsedEmail,
      Whatsapp: phone,
      Label: 'Interessado',
      Data: new Date().toString()
    });

    return res.status(200).json(true);
  } catch (e) {
    console.log(e);
    return res.status(500).json({error: e});
  }
}
