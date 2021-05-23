import { readUserData } from './database';

export default async function user(req, res) {
  try {
    const { query: { custId } } = req;
    const _res = await readUserData(custId);
    if (!_res) return res.send({});
    return res.json(_res);
  } catch (error) {
    console.error(error);
  }
}

